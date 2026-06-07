"""
Cau hinh cho tung loai nhac cu.

fmin/fmax gioi han dai tan so de pYIN khong bat nham hoa am thanh f0
(tranh loi octave error). tolerance_cents la nguong sai lech cao do
duoc chap nhan khi cham diem, tinh bang cents thay vi Hz tuyet doi.

Dan bau noi rong dung sai vi ky thuat luyen lay lam f0 dao dong manh.
"""

PITCH = "pitch"
RHYTHM = "rhythm"


INSTRUMENTS = {
    "dan_bau": {
        "name": "Dan Bau",
        "scoring_type": PITCH,
        "fmin": 65.0,
        "fmax": 1200.0,
        "tolerance_cents": 70.0,
    },
    "dan_nhi": {
        "name": "Dan Nhi",
        "scoring_type": PITCH,
        "fmin": 200.0,
        "fmax": 1500.0,
        "tolerance_cents": 50.0,
    },
    "dan_nguyet": {
        "name": "Dan Nguyet",
        "scoring_type": PITCH,
        "fmin": 130.0,
        "fmax": 1000.0,
        "tolerance_cents": 50.0,
    },
    "dan_tranh": {
        "name": "Dan Tranh",
        "scoring_type": PITCH,
        "fmin": 130.0,
        "fmax": 2100.0,
        "tolerance_cents": 50.0,
    },
    "dan_ty_ba": {
        "name": "Dan Ty Ba",
        "scoring_type": PITCH,
        "fmin": 100.0,
        "fmax": 1200.0,
        "tolerance_cents": 50.0,
    },
    "sao_truc": {
        "name": "Sao Truc",
        "scoring_type": PITCH,
        "fmin": 400.0,
        "fmax": 2500.0,
        "tolerance_cents": 50.0,
    },
}


def get_instrument(instrument_id):
    return INSTRUMENTS.get(instrument_id)


def is_supported(instrument_id):
    return instrument_id in INSTRUMENTS
