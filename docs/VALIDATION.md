# Kết quả kiểm tra

Kiểm tra trên máy cloud của dự án, bằng Node.js 24.19.0 và Chromium 154. Kiểm thử dùng đầu ra `npm run build` được phục vụ tại base path `/rain-loop-website/`, không chỉ kiểm tra mã nguồn dev.

## Đã xác minh

- Production build thành công, tạo sáu trang, trang 404 và mẫu nhận diện.
- Sáu trang mở trực tiếp và tải lại; liên kết nội bộ, hash và asset trả về thành công.
- Không có lỗi JavaScript hoặc tràn ngang trong các trang được kiểm tra ở 1440×1000, 820×1180, 430×932 và 360×780.
- Thẻ lật, lọc trạng thái, trạng thái bộ lọc rỗng, cửa sổ nghiên cứu và liên kết tới đúng hotspot.
- Timeline, tab vật liệu bằng bàn phím, các mục kế hoạch kiểm chứng.
- Trình diễn qua cả sáu bước, khóa nút Tiếp tại bước cuối, thoát và khôi phục trang/vị trí cuộn.
- Menu mobile: giữ focus trong modal, Escape, trả focus, đóng khi chọn link; header vẫn hiện sau khi cuộn xuống cuối.
- Giảm chuyển động, tạm dừng chuyển động và ảnh minh họa thay thế đang dùng.
- Viewer ảnh: zoom, di chuyển bằng bàn phím, ảnh kế tiếp, reset zoom, Escape và trả focus; năm ảnh thiết kế tải được, liên kết tải PNG gốc đúng.
- Thanh so sánh ảnh, tư liệu Journal và blueprint ở mục vật liệu.
- Font Be Vietnam Pro tự lưu trữ có bộ ký tự tiếng Việt và chữ nghiêng thật; kiểm tra font đã tải.
- Con trỏ động, tắt/bật chuyển động toàn trang, ghi nhớ lựa chọn và chế độ giảm chuyển động trên desktop/mobile.
- Đã quan sát ảnh chụp trình duyệt desktop/mobile và kiểm tra cuộn qua các phần.

Bộ kiểm thử sau cập nhật gồm 52 trường hợp: 50 đạt, 2 trường hợp menu mobile không áp dụng trên desktop/tablet được bỏ qua. Production build thành công. Quan sát thêm giao diện 1440×1000 và 390×844 bằng ảnh chụp trình duyệt.

## Chưa kiểm chứng

- Video thật, lỗi tải video và việc xin quyền sử dụng: chưa có video được cung cấp. Không tạo request video giả; mã hỗ trợ được chuẩn bị nhưng chưa kiểm chứng bằng media thật.
- Ảnh mô hình thật và độ chính xác kỹ thuật của kích thước blueprint chưa được nhóm xác nhận. Hotspot đã đối chiếu với concept; PNG gốc mở được.
- Thao tác kéo ảnh trên thiết bị cảm ứng vật lý và trình đọc màn hình: chưa thử trên thiết bị thật. Kiểm thử trình duyệt chạy môi trường mô phỏng viewport/cảm ứng.
- Safari/Firefox: chưa chạy.
- Tốc độ trên mạng di động thật: chưa đo. Kích thước file không được xem như phép đo tốc độ.
- GitHub Pages công khai: cấu hình workflow có sẵn; trạng thái công khai chỉ được xác nhận sau khi truy cập và kiểm tra được deployment.

Không có kết quả thử nghiệm mô hình vật lý. Các phép kiểm tra trên đây là kiểm tra website.

## Kiểm tra bộ thẻ mới

- Hai thẻ và bốn mục thông tin riêng cho mỗi thẻ; lật thật bằng CSS 3D, trạng thái `inert`/`aria-hidden` và focus đúng; Esc quay lại mặt trước.
- Lưới lớn/gọn ghi nhớ sau reload, bộ lọc và số thẻ hiển thị hoạt động; phần mao dẫn không tạo link hotspot giả.
- Lightbox ảnh AI: tải PNG gốc, ảnh trước/tiếp, thumbnail giữ focus, zoom, vuốt qua pointer events, đóng và trả focus. Kiểm thử mô phỏng không thay kiểm tra cảm ứng trên thiết bị vật lý.
- Quan sát ảnh chụp ở 1440×1000 và 390×844; không tràn ngang. Lightbox trên điện thoại bố trí nút Đóng ở góc trên, ảnh theo tỷ lệ gốc.

## Thiết kế lại theo ảnh tham chiếu — 11/10/2026

- Thanh điều hướng nổi dạng viên thuốc; hero toàn cảnh đất ngập nước, slogan giữa trang; các khối sáng bo tròn và minh họa thiên nhiên nổi.
- Hai ảnh AI mới có ghi chú trên giao diện và prompt trong hồ sơ nguồn; ảnh đảo thiên nhiên giữ alpha trong suốt, ảnh dùng trên web nén WebP. Không bổ sung video giả.
- Build production thành công. Chromium Headless Shell 141: 50 kiểm thử đạt, 2 trường hợp menu điện thoại không áp dụng trên desktop/tablet được bỏ qua. Kiểm tra ở 1440 × 1000, 360 × 780, 430 × 932, 820 × 1180.
- Quan sát ảnh chụp riêng ở 1440 × 1000 và 390 × 844; không lỗi JavaScript hay tràn ngang. Kiểm tra menu nổi, màu chữ, typography, phần cắt ảnh, bố cục nature section, hỗ trợ giảm chuyển động.
- Tiêu đề nhấn màu hiện dùng font Be Vietnam Pro dáng thẳng theo mẫu mới; kiểm thử font tiếng Việt cập nhật theo quyết định này. Các font nghiêng tự lưu trữ vẫn sẵn cho những nội dung cần dùng.

## Đối chiếu tiêu chí mới — 11/10/2026

- `npm run build`: thành công (Vite 7.2.2).
- `npm test`: 54 bài kiểm tra đạt, 2 bài menu mobile bỏ qua có chủ đích trên desktop/tablet; 56 ca trên viewport 1440×1000, 360×780, 430×932, 820×1180.
- Thẻ: kiểm tra render và logo gốc ở mặt trước, đúng bốn đề mục, ảnh sinh học thật tải được và tên khoa học tham khảo; lightbox render đúng bản gốc, giữ ảnh AI ở nút riêng.
- Hồ sơ: kiểm tra bốn section, tác giả/giấy phép; mở ảnh macro rồi đóng trả focus; mở sketch trong modal rồi zoom/đóng, trả focus về modal cha và về thẻ.
- Journal có 4 quyết định; checklist có 5 nhóm minh chứng; demo sáu bước đã có Journal và trả vị trí bắt đầu khi thoát.
- Các trang, link nội bộ/anchor, ảnh gốc tải xuống, font Việt, bộ lọc/layout, zoom/pan/swipe, hotspot, BOM tabs, menu/focus, cursor và giảm chuyển động đều được kiểm tra tự động.
- QA hình ảnh: đã xem mặt trước/mặt sau thẻ desktop, thẻ và hồ sơ mobile, Moodboard, câu chuyện brand và SVG userflow. Hai mặt thẻ desktop cao 888px, scrollHeight bằng clientHeight, không cắt nội dung. Không có lỗi JavaScript hoặc tràn ngang trong kiểm tra các trang.
- Trình duyệt kiểm thử: Chromium Headless Shell 141; chưa thực hiện kiểm tra trên thiết bị Safari/iOS thật.
- Chưa xác nhận đầy đủ điểm nội dung: ảnh mô hình thật, dữ liệu thử, nguồn nghiên cứu riêng, khối lượng/báo giá và liên hệ vẫn chưa được cung cấp. Đây là giới hạn tư liệu, được đánh dấu trên website.


## Level 3, font biểu đạt và chuyển cảnh — 11/10/2026

- Build thành công; bộ kiểm thử cập nhật đạt 58/60 ca trên bốn viewport, 2 ca menu mobile bỏ qua có chủ đích ở desktop/tablet.
- Thẻ dùng tên hệ sinh thái, không có nhãn tên loài; bốn đề mục điều chỉnh theo yêu cầu mới. Flip, hồ sơ, lightbox và zoom sketch vẫn hoạt động.
- Kiểm tra điều hướng có cảnh chuyển, kết thúc cảnh sau khi đến trang, Back, chế độ giảm chuyển động và Trình diễn đủ sáu bước; giữ vị trí khi thoát.
- Cmap của ba subset latin/latin-ext/vietnamese kiểm tra câu tiếng Việt và các dấu kép: không thiếu glyph trong chuỗi mẫu. Trình duyệt xác nhận Fraunces italic đã tải; tiêu đề dùng Unbounded.
- Đã xem ảnh desktop/mobile: trang chủ, tiêu đề nghiên cứu, thẻ trước/sau, câu chuyện brand và một khung chuyển cảnh. Không tràn ngang hoặc lỗi JavaScript trong bộ kiểm thử.
- Desktop mặt trước thẻ cao 905px; mặt sau mobile đo 898px. ScrollHeight bằng clientHeight trong các mẫu QA, không cắt nội dung.
- Trình duyệt kiểm thử Chromium 141; chưa kiểm tra trên Safari/iOS thật.


## Phong cảnh động, khoảng trắng và typography chuyển động — 11/10/2026

- Build Vite thành công; kiểm thử cuối: 62 đạt, 2 menu mobile bỏ qua trên desktop/tablet, tổng 64 ca ở 1440×1000, 360×780, 430×932 và 820×1180.
- Kiểm tra mới: bốn link quy trình mở đúng hotspot; cuộn xuống rồi lên kích hoạt lại reveal; tạm dừng được ghi nhớ giữa trang; canvas/ảnh/chữ chạy dừng; Reduced Motion giữ nội dung và nút.
- Kiểm tra cũ tiếp tục đạt: điều hướng, Trình diễn sáu bước/khôi phục vị trí, menu, focus, thẻ lật, bộ lọc, lightbox, zoom/pan, tải bản gốc, BOM, font Việt, JavaScript và HTTP assets.
- QA riêng sáu trang ở 1440px/820px/360px: không tràn ngang. Đã sửa tràn do xoay dải ticker và đường đồng mức trên mục vật liệu; dùng clip-path cho dải chéo, giữ hình trang trí trong phạm vi section.
- Đã xem ảnh chụp trang chủ/khối quy trình/trang nghiên cứu trên desktop và 360px. Bộ kiểm thử phát hiện một tham chiếu ring cũ đã bỏ; đã chuyển kiểm tra fallback sang lớp phong cảnh thực tế. Kiểm thử cuối chạy sau các sửa đổi.
- Canvas chỉ trang trí, không mô phỏng dữ liệu đo; phong cảnh vẫn ghi nhãn AI, chưa có video thiên nhiên thật. Không đo FPS trên thiết bị thật; chưa kiểm thử Safari/iOS thật.


## Thay ảnh Cảm hứng chính — 11/10/2026

Build thành công; 8 kiểm thử liên quan trên bốn viewport đạt. QA riêng 1440px và 360px: ảnh 1372×768 hiển thị đủ, không tràn ngang/không lỗi JavaScript; bấm mở đúng PNG gốc, đóng lightbox trả focus. Đã xem ảnh chụp hai bố cục.


## Bong bóng và thanh điều hướng màu — 11/10/2026

- Build thành công; bộ kiểm thử đầy đủ 62 đạt, 2 menu mobile bỏ qua trên desktop/tablet. Kiểm tra lại điều hướng, Trình diễn, menu/focus, thẻ, lightbox, pointer và Reduced Motion.
- QA hình ảnh/JavaScript ở 1440×1000, 1100×1000, 820×1000, 360×780 và 430×1000: không tràn ngang hoặc lỗi JavaScript; đã xem ảnh trang chủ, khối discovery, trạng thái hover nav và menu mobile.
- Capsule đổi vị trí từ 5px đến 202.625px trên desktop, 5px đến 175.625px ở 1100px khi hover tab Journal. Mobile/tablet dùng menu dưới breakpoint 1051px; HTML links và accessible labels được giữ.
- Trình duyệt Chromium Headless Shell 141, chưa kiểm tra trên thiết bị Safari/iOS thật hoặc đo FPS thực tế.
