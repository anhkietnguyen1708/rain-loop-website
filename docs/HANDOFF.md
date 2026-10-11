# Bàn giao RainLoop

## Hướng thiết kế

Nền sáng, xanh rừng và xanh nước; vàng dùng cho hành động chính. Typography Be Vietnam Pro thống nhất, có font nghiêng thật và bộ ký tự tiếng Việt. Trang chủ có đồ họa đất ngập nước nhiều lớp và chuyển động nhẹ; trang chuyên môn ưu tiên đọc, tra cứu và trình chiếu. Mẫu token/component thực tế tại `nhan-dien.html`.

Hai skill được áp dụng cho bố cục, tính liên tục của nội dung, điều hướng mobile, tương tác và giảm chuyển động. Yêu cầu RainLoop ưu tiên website hồ sơ sáu trang, nên không tạo logo, video AI hoặc chuỗi ảnh portrait bắt buộc.

## Luồng thị giác

| Scene | Visual story | Website copy |
| --- | --- | --- |
| 01 — Từ một cơn mưa | Đất ngập nước minh họa, mặt nước và các lớp cây. | Học từ tự nhiên. Thiết kế cho cuộc sống. |
| 02 — Học cách giữ nước | Từ vấn đề sân trường tới nguyên lý của hệ sinh thái. | Nếu mỗi cơn mưa là một cơ hội? |
| 03 — Chuyển hóa ý tưởng | Sơ đồ ba hộp ngầm và vùng rễ, có phần giải thích tương tác. | Một vòng tuần hoàn. Nhiều điều cần khám phá. |

Cuộn tự nhiên, không ghim hoặc khóa cuộn. Hero khoảng một màn hình; phần nội dung tiếp theo theo chiều cao tự nhiên. Đoạn có chữ không bị giới hạn thời gian. Khả năng đọc ưu tiên hơn việc đồng bộ với thời lượng video. Giảm chuyển động giữ bố cục đầy đủ, ngừng vòng trang trí và dòng nước.

## Đối chiếu tiêu chí

| Nhóm tiêu chí | Phần đã triển khai | Bằng chứng cần bổ sung |
| --- | --- | --- |
| Nội dung & Nghiên cứu | Nghiên cứu, bộ thẻ/bộ lọc, moodboard, nhật ký, thư viện thiết kế, vật liệu, kế hoạch kiểm chứng. | Nguồn nghiên cứu, ảnh thiên nhiên thật, nhật ký ngày tháng, ảnh chế tạo. PowerPoint và năm ảnh thiết kế đã tích hợp. |
| Thương hiệu & Hồ sơ nhóm | Slogan chính xác, bảng màu, sáu hồ sơ, trạng thái phân công và avatar mẫu. | Ảnh thành viên, họ tên đầy đủ nếu cần, liên hệ được xác nhận. Logo PNG đã tích hợp. |
| Thẩm mỹ & UI/UX | Sáu trang responsive, điều hướng, modal, zoom/kéo, sơ đồ, reduced motion, font tự lưu trữ. | Thay minh họa bằng tư liệu hợp lệ khi có; kiểm tra lại ảnh/video mới. |
| Thuyết trình & Bảo vệ | Trình diễn sáu bước, FAQ khoa học, trạng thái chưa kiểm chứng và giới hạn cơ chế. | Kết quả đo thực tế để trả lời câu hỏi định lượng. |

## Nội dung chưa thể hoàn thiện bằng tư liệu thật

Nguồn AskNature/bài nghiên cứu; ảnh khảo sát và mô hình; video thiên nhiên có quyền sử dụng; ảnh nhóm và liên hệ; thời gian hoạt động/feedback; quy cách, đơn giá; kết quả thử nghiệm. Website vẫn dùng được với các mục này được ghi rõ trạng thái.

Mao dẫn là phương án cần xác nhận, chưa được lắp vào sơ đồ hiện tại. Không có tuyên bố giảm ngập thực tế, lưu lượng tưới, nước uống được hoặc hiệu suất lọc.

## Khả năng đã xây

Nội dung HTML tĩnh; tương tác tăng cường bằng JavaScript. Trình diễn lưu trạng thái tại sessionStorage trong cùng tab; không có tài khoản hay đồng bộ máy chủ. Trình xem ảnh mở năm PNG gốc, có zoom/kéo/tải; thanh kéo so sánh phác thảo–concept và hotspot trên concept. Con trỏ, phản hồi hover/click, parallax nhẹ, reveal và thanh tiến độ cuộn có tùy chọn tắt chuyển động. Chưa đo tốc độ tải trên mạng di động thực tế.

## Triển khai

GitHub Pages dùng workflow `Build and deploy RainLoop` trên nhánh `main`. Mỗi cập nhật chạy build và Playwright trước khi deploy. URL dự kiến: https://tommykhanhtrinh.github.io/rain-loop-website/. Trạng thái deployment được kiểm tra riêng sau khi push.

## Cập nhật bộ thẻ

Hai ảnh nghệ thuật đất ngập nước và mao dẫn tạo bằng ChatGPT, dùng làm mặt trước; nội dung bốn phần nằm ở mặt sau và chi tiết. Lưới lớn/gọn, lật 3D, lightbox có thumbnail/zoom/vuốt/tải ảnh đều dùng cùng cơ chế giảm chuyển động. Giữ nguyên concept và bản vẽ kỹ thuật. Prompt tái sử dụng ở `docs/CARD-ART-PROMPTS.json`; nguồn và đường dẫn ảnh ở `docs/SOURCES.md`.
