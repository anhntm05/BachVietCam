"""
Tao ban mau (template) cao do tu ban thu cua giao vien.

Chay pYIN tren file am thanh giao vien, trich toan bo chuoi f0 va luu
ra shared_storage/templates/<instrument_id>.json. File nay duoc dung
lam chuan de c012n DTW va cham diem hoc vien.

Cach dung:
    python generate_origin.py dan_tranh duong_dan/ban_thu_giao_vien.wav

File template phai cung sample rate va hop_length voi luc cham diem,
nen ca hai deu lay tu evaluator.services.
"""
import os
import sys

import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "ai_service.settings")
django.setup()

from django.conf import settings  # noqa: E402

from evaluator import instruments, services  # noqa: E402


def main():
    if len(sys.argv) != 3:
        print("Cach dung: python generate_origin.py <instrument_id> <audio_path>")
        print("Vi du:     python generate_origin.py dan_tranh teacher.wav")
        sys.exit(1)

    instrument_id = sys.argv[1]
    audio_path = sys.argv[2]

    instrument = instruments.get_instrument(instrument_id)
    if instrument is None:
        print(f"Nhac cu khong ho tro: {instrument_id}")
        print("Cac nhac cu hop le:", ", ".join(instruments.INSTRUMENTS.keys()))
        sys.exit(1)

    if not os.path.exists(audio_path):
        print(f"Khong tim thay file: {audio_path}")
        sys.exit(1)

    print(f"Dang trich f0 cho {instrument['name']} ...")
    f0 = services.extract_f0(
        audio_path,
        fmin=instrument["fmin"],
        fmax=instrument["fmax"],
    )

    os.makedirs(settings.TEMPLATES_DIR, exist_ok=True)
    out_path = os.path.join(settings.TEMPLATES_DIR, f"{instrument_id}.json")
    services.save_f0(f0, out_path)

    voiced = sum(1 for x in f0 if x == x)  # dem frame khong phai NaN
    print(f"Da luu template: {out_path}")
    print(f"Tong {len(f0)} frame, {voiced} frame co cao do.")


if __name__ == "__main__":
    main()
