"""
Endpoint cham diem.

Ho tro ca hai luong:
  - Client gui file truc tiep (multipart/form-data): truong 'audio'.
  - Gateway (Express) da luu file vao shared_storage roi gui 'file_path'.

Tach lop ro rang: view chi lo nhan/validate/tra ket qua, toan bo
tinh toan nam trong services.evaluate. Sau nay muon doi luong nhan file
chi sua view, khong dung den logic cham diem.
"""
import json
import os
import uuid

from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST

from evaluator import services
from evaluator.schemas import ValidationError, validate_upload


def _template_path(instrument_id):
    return os.path.join(settings.TEMPLATES_DIR, f"{instrument_id}.json")


def _save_temp_upload(uploaded_file):
    os.makedirs(settings.UPLOADS_DIR, exist_ok=True)
    ext = os.path.splitext(uploaded_file.name)[1].lower()
    temp_name = f"{uuid.uuid4().hex}{ext}"
    temp_path = os.path.join(settings.UPLOADS_DIR, temp_name)
    with open(temp_path, "wb") as dest:
        for chunk in uploaded_file.chunks():
            dest.write(chunk)
    return temp_path


@csrf_exempt
@require_POST
def evaluate_view(request):
    instrument_id = request.POST.get("instrument_id")

    # Luong gateway: file da nam san tren dia, chi nhan duong dan.
    file_path = request.POST.get("file_path")
    if file_path:
        return _evaluate_existing(instrument_id, file_path)

    # Luong truc tiep: client gui file len.
    uploaded = request.FILES.get("audio")
    try:
        instrument = validate_upload(instrument_id, uploaded)
    except ValidationError as e:
        return JsonResponse({"error": str(e)}, status=400)

    template = _template_path(instrument_id)
    if not os.path.exists(template):
        return JsonResponse(
            {"error": f"Chua co ban mau cho {instrument_id}"},
            status=404,
        )

    temp_path = _save_temp_upload(uploaded)
    try:
        result = services.evaluate(temp_path, template, instrument)
    except Exception as e:
        return JsonResponse({"error": f"Loi xu ly am thanh: {e}"}, status=500)
    finally:
        # Don file tam du thanh cong hay that bai.
        if os.path.exists(temp_path):
            os.remove(temp_path)

    return JsonResponse(result, status=200)


def _evaluate_existing(instrument_id, file_path):
    """Cham diem tren file da co san tren dia (luong gateway)."""
    from evaluator import instruments

    if not instruments.is_supported(instrument_id):
        return JsonResponse(
            {"error": f"Nhac cu khong ho tro: {instrument_id}"}, status=400
        )
    if not os.path.exists(file_path):
        return JsonResponse({"error": "Khong tim thay tep"}, status=404)

    template = _template_path(instrument_id)
    if not os.path.exists(template):
        return JsonResponse(
            {"error": f"Chua co ban mau cho {instrument_id}"}, status=404
        )

    instrument = instruments.get_instrument(instrument_id)
    try:
        result = services.evaluate(file_path, template, instrument)
    except Exception as e:
        return JsonResponse({"error": f"Loi xu ly am thanh: {e}"}, status=500)

    return JsonResponse(result, status=200)


@csrf_exempt
@require_POST
def evaluate_pair_view(request):
    """
    Cham diem so truc tiep hai file da nam tren dia (luong gateway):
    teacher_path va student_path. Khong dung template luu san.
    """
    from evaluator import instruments

    instrument_id = request.POST.get("instrument_id")
    teacher_path = request.POST.get("teacher_path")
    student_path = request.POST.get("student_path")

    if not instruments.is_supported(instrument_id):
        return JsonResponse(
            {"error": f"Nhac cu khong ho tro: {instrument_id}"}, status=400
        )
    if not teacher_path or not student_path:
        return JsonResponse(
            {"error": "Thieu teacher_path hoac student_path"}, status=400
        )
    if not os.path.exists(teacher_path):
        return JsonResponse({"error": "Khong tim thay file giao vien"}, status=404)
    if not os.path.exists(student_path):
        return JsonResponse({"error": "Khong tim thay file hoc vien"}, status=404)

    instrument = instruments.get_instrument(instrument_id)
    try:
        result = services.evaluate_pair(teacher_path, student_path, instrument)
    except Exception as e:
        return JsonResponse({"error": f"Loi xu ly am thanh: {e}"}, status=500)

    return JsonResponse(result, status=200)


@require_POST
def health_view(request):
    return JsonResponse({"status": "ok"})
