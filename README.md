# MusyWeb — Hệ thống Chấm điểm Nhạc cụ Truyền thống Việt Nam

Hệ thống phân tích và chấm điểm bản ghi âm nhạc cụ truyền thống bằng cách so sánh
bản trình diễn của học viên với bản mẫu của giáo viên. Điểm cao độ được tính trên
thang **cents** và hai bản được căn chỉnh thời gian bằng thuật toán **Dynamic Time
Warping (DTW)** trước khi so khớp, nên lệch nhịp hay vào muộn không bị trừ điểm oan.

Nhạc cụ hỗ trợ: Đàn Bầu, Đàn Nhị, Đàn Nguyệt, Đàn Tranh, Đàn Tỳ Bà, Sáo Trúc.

## Kiến trúc

Hệ thống gồm ba service độc lập, chạy trực tiếp (không Docker), trao đổi file qua
thư mục dùng chung trên đĩa cục bộ:

```
[web-portal]  --HTTP-->  [api-gateway]  --HTTP-->  [ai-service]
  Next.js                  Express.js                 Django
  cong 3000                cong 4000                  cong 8000
                               |                          |
                               +---> [shared_storage] <---+
```

- **web-portal** (Next.js): giao diện ghi âm / tải file, gửi lên gateway.
- **api-gateway** (Express + TypeScript): nhận file, lưu vào `shared_storage`,
  gọi sang Django kèm đường dẫn file, dọn file tạm sau khi chấm xong.
- **ai-service** (Django + Librosa): trích cao độ bằng pYIN, căn DTW, chấm điểm cents.

Luồng chính hiện tại là **so trực tiếp hai file** (giáo viên + học viên) trong một
lần chấm, không cần lưu template trước.

## Yêu cầu môi trường

- **Python** 3.10 trở lên
- **Node.js** 18 trở lên (kèm npm)
- Hệ điều hành: Windows, macOS hoặc Linux

## Cấu trúc thư mục

```
musyweb/
├── ai-service/        # Django AI service
├── api-gateway/       # Express gateway
├── web-portal/        # Next.js frontend
├── shared_storage/    # Thư mục dùng chung (uploads + templates)
├── .gitignore
└── README.md
```

`shared_storage/uploads` và `shared_storage/templates` được tạo tự động khi chạy,
nhưng để Git giữ lại cấu trúc thư mục rỗng, mỗi thư mục nên có một file `.gitkeep`.

## Cài đặt và chạy

Mở **ba terminal riêng** và chạy theo thứ tự dưới đây. Bật `ai-service` trước, vì
gateway sẽ gọi sang nó.

### Terminal 1 — AI Service (Django, cổng 8000)

```bash
cd ai-service

# Tao moi truong ao
python -m venv venv

# Kich hoat venv:
source venv/bin/activate        # macOS / Linux
venv\Scripts\activate           # Windows (PowerShell / CMD)

pip install -r requirements.txt
python manage.py migrate         # tao db.sqlite3, chay mot lan
python manage.py runserver 127.0.0.1:8000
```

### Terminal 2 — API Gateway (Express, cổng 4000)

```bash
cd api-gateway
npm install
cp .env.example .env             # Windows: copy .env.example .env
npm run dev
```

### Terminal 3 — Web Portal (Next.js, cổng 3000)

```bash
cd web-portal
npm install
npm run dev
```

Mở trình duyệt vào **http://localhost:3000**.

## Cấu hình (.env)

### ai-service

Mặc định chạy được ngay không cần `.env`. Nếu muốn đổi, copy `.env.example` thành
`.env`:

- `SHARED_STORAGE_DIR` — đường dẫn thư mục dùng chung. Để trống thì mặc định trỏ
  tới `../shared_storage` (ngang hàng với `ai-service`).
- `DJANGO_DEBUG` — `True` khi phát triển.

### api-gateway

- `PORT` — cổng gateway (mặc định 4000).
- `AI_SERVICE_URL` — URL của Django (mặc định `http://127.0.0.1:8000`).
- `SHARED_STORAGE_PATH` — phải trỏ tới **cùng** thư mục `shared_storage` mà Django dùng.
- `AI_TIMEOUT_MS` — thời gian chờ Django xử lý (mặc định 120000ms, vì pYIN chạy chậm).

### web-portal

Nếu gateway chạy ở cổng khác 4000, đặt biến môi trường khi build/run:

- `NEXT_PUBLIC_GATEWAY_URL` — URL của gateway (mặc định `http://127.0.0.1:4000`).

## Cách sử dụng

1. Vào trang, kéo xuống mục **Thực hành**.
2. Chọn loại nhạc cụ.
3. Tải lên **bản mẫu của giáo viên** (ô số 1).
4. **Bản của học viên** (ô số 2): ghi âm trực tiếp hoặc tải file lên.
5. Bấm **Chấm điểm**. Kết quả gồm độ chính xác cao độ (%), sai lệch trung bình
   (cents), tempo của cả hai bên và số khung khớp.

## Lưu ý kỹ thuật

- File ghi âm tạm của người dùng được **xóa khỏi máy chủ ngay sau khi chấm xong**;
  hệ thống không lưu trữ bản ghi.
- pYIN xử lý mất vài giây mỗi lần chấm. Đây là tác vụ nặng, chạy đồng bộ — phù hợp
  cho số ít người dùng cùng lúc. Nếu cần phục vụ nhiều người song song thì nên
  chuyển sang xử lý bất đồng bộ (hàng đợi job).
- Thứ tự khởi động quan trọng: Django (8000) → Express (4000) → Next.js (3000).
- Cả Django lẫn Express phải trỏ về **cùng một** thư mục `shared_storage`, nếu không
  gateway lưu file một nơi mà Django đọc một nơi khác sẽ báo không tìm thấy tệp.

## Khắc phục sự cố

- **Gateway báo lỗi 502 / không kết nối được AI service**: Django chưa chạy, hoặc
  `AI_SERVICE_URL` sai. Kiểm tra Terminal 1.
- **Báo không tìm thấy tệp**: `SHARED_STORAGE_PATH` (Express) và `SHARED_STORAGE_DIR`
  (Django) đang trỏ về hai thư mục khác nhau.
- **Font hiển thị thô / không đẹp**: trang nạp font từ Google Fonts; cần có mạng khi
  chạy lần đầu. Chữ tiếng Việt vẫn đúng dấu kể cả khi font fallback.
- **Lỗi quyền truy cập Micro**: trình duyệt cần được cấp quyền microphone; trên
  Chrome chỉ hoạt động ở `localhost` hoặc HTTPS.
