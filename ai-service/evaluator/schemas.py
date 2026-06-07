"""
Kiem tra du lieu dau vao truoc khi cham diem.
Django khong co Pydantic nen validate thu cong, gon va du dung.
"""
from evaluator import instruments

ALLOWED_EXTENSIONS = {".mp3", ".wav", ".m4a", ".ogg", ".flac"}
MAX_FILE_BYTES = 25 * 1024 * 1024  # 25MB


class ValidationError(Exception):
    pass


def validate_upload(instrument_id, uploaded_file):
    if not instrument_id:
        raise ValidationError("Thieu instrument_id")

    if not instruments.is_supported(instrument_id):
        raise ValidationError(f"Nhac cu khong ho tro: {instrument_id}")

    if uploaded_file is None:
        raise ValidationError("Thieu tep am thanh")

    name = (uploaded_file.name or "").lower()
    if not any(name.endswith(ext) for ext in ALLOWED_EXTENSIONS):
        raise ValidationError(
            "Dinh dang khong ho tro. Cho phep: "
            + ", ".join(sorted(ALLOWED_EXTENSIONS))
        )

    if uploaded_file.size > MAX_FILE_BYTES:
        raise ValidationError("Tep vuot qua 25MB")

    return instruments.get_instrument(instrument_id)
