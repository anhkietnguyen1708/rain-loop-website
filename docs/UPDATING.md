# Cập nhật RainLoop

1. Gửi nội dung hoặc tệp mới qua chat, ghi mục cần thay và trạng thái xác nhận.
2. Sửa dữ liệu tại `src/content.js`; giữ ID ổn định để không làm hỏng liên kết.
3. Đặt asset tối ưu trong `public/assets/`, dùng tên rõ ràng; lưu bản gốc trong thư mục riêng phù hợp với quyền công bố.
4. Chạy `npm run build`, `npm test`; kiểm tra trang liên quan và giao diện mobile.
5. Commit và push `main`; xem workflow Pages. Chỉ báo website mới đã xuất bản khi deployment và URL thực tế được kiểm tra.

## Logo, video và ảnh đại diện

- `site.logo`: đường dẫn logo trong `public/` (ví dụ `assets/rainloop-logo.png`) khi có tệp gốc.
- `site.heroPoster`: ảnh poster đã được phép sử dụng.
- `site.heroVideo`: video thật đã tối ưu. Mặc định `null` để tránh request tài nguyên giả. Cập nhật nhãn nguồn và `docs/SOURCES.md` khi thêm.
- `members[].image`: ảnh thật thành viên đã xác nhận; bỏ nhãn mẫu tự động khi trường này có giá trị.
- Khi bổ sung liên hệ, sửa phần Đội ngũ trong template để tạo link thật từ dữ liệu đã được nhóm cho phép công bố.

Giữ tỷ lệ logo. Không ghi tên ảnh SVG minh họa như thể đó là ảnh thật. Kiểm tra giấy phép video, ghi nguồn/tác giả và kiểm thử lỗi tải media sau khi thêm.

## Bản vẽ và hotspot

`drawings[]` có ID, tên, tên tệp gốc, loại, `src` và `original`. Đặt `src` vào đường dẫn ảnh hợp lệ để tự động có nút mở ảnh lớn. Viewer hỗ trợ zoom 100–400%, kéo bằng chuột/cảm ứng, phím mũi tên để di chuyển, ảnh trước/tiếp và Escape.

Hotspot hiện gắn đúng các bộ phận trên concept đã cung cấp. Khi đổi concept, cập nhật tọa độ phần trăm trong `hotspots[]` và đường hoạt ảnh trong template. Viewer đọc PNG gốc và có nút tải xuống. Nhật ký dùng `image` và `imageTitle` cho tư liệu theo giai đoạn.

Thanh so sánh dùng phác thảo minh họa và concept, giữ tỷ lệ ảnh. Các điều khiển Chuyển động / Con trỏ áp dụng toàn website, ghi nhớ lựa chọn trong trình duyệt; reduced motion được ưu tiên. Con trỏ trang trí chỉ bật trên thiết bị có chuột, vẫn giữ con trỏ hệ thống.

## Nghiên cứu, nhật ký và giá

- Thẻ nghiên cứu: cập nhật `research[]`, các trạng thái `selected`, `rejected`, `considering`; dùng nguồn thật. Nếu thêm thẻ mới, thay hình mặc định/nhãn minh họa trong template bằng ảnh đã xác minh.
- Nhật ký: xác nhận ngày, hoạt động, ảnh và phản hồi trước khi đổi trạng thái. Template hiện không tự tạo ngày tháng.
- `materials[]`: vật liệu mô hình. `realMaterials[]`: vật liệu thực tế riêng biệt; mặc định chỉ kế thừa danh mục, không kế thừa số lượng hoặc giá.
- `quantity`, `price`: số đã xác nhận hoặc `null`. Bổ sung `spec`, `source`, `date`, `estimated` khi có dữ liệu. Đơn giá hiển thị tiền Việt; dòng ước tính phải đặt `estimated: true`.
- Tổng chỉ cộng các dòng đủ số lượng và giá. Nếu có dòng chưa đủ dữ liệu, nhãn vẫn là tạm tính. Không dùng số 0 để biểu diễn thiếu dữ liệu.
- Kế hoạch kiểm chứng tại `testPlan[]` hiện chưa có kết quả. Khi có dữ liệu thật, thêm điều kiện, phép đo, đơn vị, sai số và bằng chứng; không suy kết quả từ hoạt ảnh.

## Trình diễn và khả năng truy cập

Bắt đầu bằng nút Trình diễn ở trang chủ, header desktop hoặc menu điện thoại. Dùng nút Trước/Tiếp; Escape hoặc Thoát để trở về trang và vị trí xuất phát. Chế độ không tự chuyển bước. Tab/Shift+Tab và Enter/Space dùng cho điều khiển; Escape ưu tiên đóng cửa sổ đang mở.

Nội dung không được đặt hoàn toàn trong ảnh. Giữ alt text, thứ tự heading, nhãn điều khiển, focus nhìn thấy và chế độ giảm chuyển động khi cập nhật.

## Thẻ phỏng sinh học

Mỗi `research[]` có ảnh `image`, PNG `original`, mô tả ảnh `imageAlt`, trạng thái chọn, trạng thái triển khai `implementation`, bốn mục `facts` và nguồn `sourceLinks`. Cập nhật bốn mục từ dữ liệu nhóm đã kiểm chứng. Chỉ gắn `hotspotId` khi bộ phận được thể hiện trong concept; nếu chưa có thì liên kết tới kế hoạch kiểm chứng. Các ý tưởng cũ chưa xác nhận không tự thêm vào nhóm Đã loại.

Thẻ lật 3D bằng nút hoặc chạm mặt trước; mặt ẩn có `inert` và `aria-hidden`. Esc từ mặt sau lật về trước. Lưới lớn/gọn và bộ lọc giữ tương tác độc lập; bố cục ghi nhớ trong sessionStorage. Lightbox ảnh thẻ có ảnh trước/tiếp, thumbnail, zoom/kéo, vuốt ngang ở mức zoom 100%, phím mũi tên, Home/End, tải PNG và trả focus khi đóng. Phần chữ không nằm trong ảnh AI.
