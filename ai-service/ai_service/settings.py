"""
Cau hinh Django cho AI service.
Cac duong dan shared_storage doc tu bien moi truong de chay duoc
tren may khac nhau ma khong sua code.
"""
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = os.environ.get(
    "DJANGO_SECRET_KEY", "doi-key-nay-truoc-khi-len-production"
)
DEBUG = os.environ.get("DJANGO_DEBUG", "True") == "True"
ALLOWED_HOSTS = os.environ.get("DJANGO_ALLOWED_HOSTS", "*").split(",")

INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.auth",
    "evaluator",
]

MIDDLEWARE = [
    "django.middleware.common.CommonMiddleware",
]

ROOT_URLCONF = "ai_service.urls"
WSGI_APPLICATION = "ai_service.wsgi.application"

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# Thu muc dung chung voi gateway. Mac dinh tro len thu muc goc du an.
_DEFAULT_SHARED = BASE_DIR.parent / "shared_storage"
SHARED_STORAGE_DIR = os.environ.get("SHARED_STORAGE_DIR", str(_DEFAULT_SHARED))
UPLOADS_DIR = os.environ.get(
    "UPLOADS_DIR", os.path.join(SHARED_STORAGE_DIR, "uploads")
)
TEMPLATES_DIR = os.environ.get(
    "TEMPLATES_DIR", os.path.join(SHARED_STORAGE_DIR, "templates")
)

# Cho phep upload file lon ghi thang ra dia thay vi giu trong RAM.
DATA_UPLOAD_MAX_MEMORY_SIZE = 26 * 1024 * 1024
FILE_UPLOAD_MAX_MEMORY_SIZE = 5 * 1024 * 1024

LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Ho_Chi_Minh"
USE_TZ = True
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
