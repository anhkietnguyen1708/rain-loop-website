# RainLoop

Website hồ sơ dự án phỏng sinh học của **The Creative Creature**, môn Thiết kế & Công nghệ lớp 12, Trường Đinh Thiện Lý.

**Học từ tự nhiên. Thiết kế cho cuộc sống.**

Website tĩnh sáu trang, viết bằng HTML, CSS và JavaScript, đóng gói bằng Vite. Không cần backend, tài khoản hoặc cơ sở dữ liệu. Nội dung được render vào HTML khi build nên vẫn đọc được khi JavaScript không hoạt động.

## Chạy dự án

Yêu cầu Node.js 24 và npm. Từ thư mục repository:

```sh
npm ci
npm run dev
```

Bản production:

```sh
npm run build
npm run preview -- --port 4173
```

Ứng dụng dùng base path `/rain-loop-website/`. Các trang gồm `index.html`, `nghien-cuu.html`, `nhat-ky.html`, `thiet-ke.html`, `vat-lieu.html`, `doi-ngu.html`; có thêm `404.html` và mẫu nhận diện `nhan-dien.html`.

## Cấu trúc

- `src/content.js`: nội dung, nhóm, nghiên cứu, vật liệu, bản vẽ, nguồn media.
- `scripts/render.mjs`: template sáu trang và các thành phần dùng chung. Chạy lại khi build.
- `src/main.js`: menu, thẻ, modal, zoom/kéo ảnh, hotspot, Trình diễn, giảm chuyển động.
- `src/style.css`: token màu, font và giao diện responsive.
- `public/assets/`: asset xuất bản. Bản SVG thiên nhiên được ghi là minh họa.
- `scripts/art.mjs`: nguồn tạo minh họa SVG, không phải bản vẽ kỹ thuật của nhóm.
- `tests/site.spec.js`: kiểm thử trình duyệt trên đầu ra production.
- `.github/workflows/pages.yml`: build, kiểm thử và triển khai GitHub Pages khi push `main`.
- `docs/`: brief, kiểm kê nguồn, hướng dẫn cập nhật và kết quả kiểm thử.

Các file HTML ở gốc được tạo từ template. Sửa template/nội dung rồi chạy build, không sửa tay HTML đã sinh.

## Kiểm thử

Trong môi trường hiện tại đã có `/usr/bin/chromium`:

```sh
npm run build
npm test
```

Trên máy khác, đặt `CHROMIUM_PATH` trỏ tới Chromium/Chrome. Trong CI, Playwright sử dụng browser được cài bằng `npx playwright install --with-deps chromium`.

Kiểm tra trên bốn viewport: 1440×1000, 820×1180, 430×932 và 360×780. Các kiểm tra menu mobile được bỏ qua có chủ đích trên viewport dùng điều hướng desktop.

## Xuất bản GitHub Pages

Trong repository GitHub, chọn **Settings → Pages → Build and deployment → Source: GitHub Actions**. Workflow `Build and deploy RainLoop` chạy khi push vào `main`; có thể chạy thủ công từ Actions sau khi bật Pages. Đầu ra triển khai là `dist/`.

URL dự kiến sau khi deployment thành công: `https://tommykhanhtrinh.github.io/rain-loop-website/`. Đây là địa chỉ cấu hình, không phải xác nhận website đã xuất bản.

Nếu đổi tên repository hoặc dùng tên miền riêng, cập nhật `base` trong `vite.config.js`, đường dẫn chung trong `scripts/render.mjs` và kiểm thử đường dẫn production.

## Trạng thái nội dung

Chưa có logo gốc, PowerPoint, năm bản vẽ, ảnh/video thật, nhật ký ngày tháng, nguồn nghiên cứu, bảng giá hoặc thông tin liên hệ. Website hiển thị trạng thái phù hợp, không tự tạo bằng chứng. Mô hình chưa thử nghiệm; mọi chuyển động dòng nước chỉ minh họa nguyên lý.

Đọc [hướng dẫn cập nhật](docs/UPDATING.md), [kiểm kê nguồn](docs/SOURCES.md), [bàn giao](docs/HANDOFF.md) và [kiểm thử](docs/VALIDATION.md) trước khi bổ sung tư liệu.
