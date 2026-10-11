Hãy thiết kế và xây dựng website tương tác hoàn chỉnh cho dự án phỏng sinh học “RainLoop” của nhóm “The Creative Creature”, thuộc môn Thiết kế & Công nghệ lớp 12, Trường Đinh Thiện Lý.

Website cần thể hiện quá trình nghiên cứu và thiết kế từ đầu học kỳ, với chất lượng trình bày của một nhóm thiết kế chuyên nghiệp. Người xem phải hiểu vấn đề, khám phá cơ chế tự nhiên, theo dõi các quyết định thiết kế và xem bằng chứng của dự án.

Sử dụng nội dung, PowerPoint, bản vẽ và ảnh đính kèm làm nguồn. Thực hiện đầy đủ website, các tương tác và cấu hình xuất bản trên GitHub Pages.

**0. Phạm vi, tư liệu và cách thực hiện**

Đây là yêu cầu xây dựng website khi tôi gửi prompt này để triển khai. Trước khi viết nội dung, kiểm kê những tệp thực sự truy cập được trong cuộc trò chuyện và repository. Tên tệp được nhắc trong prompt không có nghĩa là tệp đã được đính kèm. Không tuyên bố đã đọc PowerPoint, ảnh hoặc cuộc trò chuyện nếu chưa truy cập được.

Lập bảng kiểm kê nguồn trong tài liệu bàn giao: tên tệp/URL thật, loại tư liệu, nội dung sử dụng, trạng thái xác nhận và quyền sử dụng nếu có. Khi các nguồn mâu thuẫn, ghi rõ điểm mâu thuẫn; chỉ dùng quyết định mới nhất đã được người dùng xác nhận để giải quyết. Thông số chưa xác định phải giữ trạng thái chưa xác nhận.

Các mô tả thiết kế và phân công trong prompt là thông tin do người dùng cung cấp, không tự động là kết quả đã kiểm chứng. Không tự nâng trạng thái từ dự kiến sang đã thực hiện. Phần thiếu tư liệu vẫn có bố cục hoàn chỉnh với thông báo phù hợp; không tạo bản vẽ kỹ thuật, kết quả hay nguồn giả để lấp chỗ trống. Chỉ tạo sơ đồ giải thích khi ghi rõ đó là minh họa, không thay thế bản vẽ của nhóm.

Áp dụng hai skill cinematic-desktop-build và cinematic-mobile-refinement khi phù hợp. Các yêu cầu cụ thể trong prompt này được ưu tiên: website hồ sơ dự án sáu trang, video thiên nhiên thật, bản vẽ nguyên bản và nội dung khoa học. Không bắt buộc tạo logo mới, video AI, chuỗi ảnh cinematic hoặc bộ video portrait riêng. Chỉ sử dụng Higgsfield hay dịch vụ tạo nội dung khi có yêu cầu phù hợp và công cụ thực sự khả dụng; thiếu công cụ đó không chặn việc xây website bằng tư liệu có sẵn. Ảnh/video AI nếu được cho phép phải ghi rõ là minh họa và không dùng làm bằng chứng nghiên cứu hoặc chế tạo.

Trước khi sản xuất, trình bày ngắn sơ đồ sáu trang, mẫu nhận diện HTML/CSS và bảng Visual Story gồm Scene, Visual story, Website copy. Bảng này mô tả nhịp kể chuyện của Trang chủ, không buộc toàn bộ website thành một vùng hoạt ảnh ghim dài. Nếu không cần quyết định quan trọng từ người dùng, tiếp tục triển khai với các lựa chọn hợp lý và ghi lại giả định.

Dùng checkout hiện có của tommykhanhtrinh/rain-loop-website. Kiểm tra trạng thái Git và bảo toàn tệp/thay đổi có sẵn. Nếu repository rỗng, khởi tạo dự án ngay trong checkout đó. Không tạo worktree hoặc repository khác nếu không được yêu cầu.

**1. Mục tiêu và tiêu chí đánh giá**

Website cần đáp ứng bốn nhóm tiêu chí:

- Nội dung & Nghiên cứu — 3 điểm: Nhật ký nghiên cứu, thẻ phỏng sinh học, bảng cảm hứng, sketch, render, vật liệu và quá trình phát triển mô hình.
- Thương hiệu & Hồ sơ nhóm — 2 điểm: Tên thương hiệu, slogan, câu chuyện, ảnh, họ tên, vai trò và thông tin liên hệ.
- Thẩm mỹ & UI/UX — 3 điểm: Nhận diện nhất quán, bố cục rõ, trải nghiệm mượt và không có liên kết chết.
- Thuyết trình & Bảo vệ — 2 điểm: Có luồng trình diễn trực tiếp, nội dung khoa học rõ và cơ sở để trả lời phản biện.

Dùng các tiêu chí này để kiểm tra độ đầy đủ. Nội dung hiển thị cho người xem phải tự nhiên, không đặt điểm số và checklist chấm bài vào giao diện chính.

**2. Thương hiệu và phong cách**

- Tên thương hiệu: RainLoop.
- Nhóm thực hiện: The Creative Creature.
- Slogan chính xác: “Học từ tự nhiên. Thiết kế cho cuộc sống.”
- Mô tả ngắn: “Hệ thống thu gom nước mưa, lọc sơ bộ, trữ tạm và tưới vùng rễ.”
- Dùng logo RainLoop đã cung cấp: biểu tượng vòng tuần hoàn nước kết hợp giọt nước và chữ RainLoop.
- Giữ nguyên tỷ lệ logo, nền trong suốt, không kéo giãn.
- Toàn bộ giao diện, nút, thông báo, chú thích và vai trò bằng tiếng Việt. Giữ nguyên tên riêng, tên khoa học và ký hiệu kỹ thuật cần thiết.
- Giọng văn ngắn, cụ thể, phù hợp học sinh nhưng chuyên nghiệp. Tránh câu quảng cáo quá mức và tuyên bố hiệu quả chưa được chứng minh.

Bảng màu:

- Xanh rừng: #123F35.
- Xanh nước: #167D9A.
- Nền sáng: #F7FAFC.
- Chữ tối: #172B2A.
- Xám vật liệu: #737D80.
- Vàng nhấn: #E9B949.

Dùng Be Vietnam Pro hoặc font hỗ trợ tiếng Việt tương đương. Chữ nội dung tối thiểu khoảng 16px, dễ đọc trên điện thoại và khi trình chiếu.

Phong cách tổng thể kết hợp thiên nhiên thật với bản vẽ kỹ thuật. Dùng ảnh lớn, bố cục có khoảng thở và nhiều chuyển động có chủ đích. Các trang chuyên môn cần dễ đọc và tra cứu.

**3. Cấu trúc website**

Tạo sáu trang riêng, có URL có thể mở trực tiếp:

1. Trang chủ.
2. Nghiên cứu.
3. Nhật ký thiết kế.
4. Thiết kế.
5. Vật liệu & Mô hình.
6. Đội ngũ.

Thanh điều hướng nhất quán, đánh dấu trang đang xem. Điện thoại có menu thu gọn dễ thao tác. Logo dẫn về Trang chủ.

Luồng khám phá chính:

Vấn đề sân trường → nghiên cứu tự nhiên → nguyên lý thiết kế → phát triển RainLoop → vật liệu và kế hoạch kiểm chứng.

Mỗi trang có liên kết phù hợp đến nội dung tiếp theo. Người xem cũng có thể chuyển trang tự do. Không bắt buộc đi theo một chuỗi cố định.

**4. Nội dung từng trang**

A. TRANG CHỦ

Mở bằng video thiên nhiên thật: toàn cảnh đất ngập nước, cây lay động và mặt nước gợn nhẹ.

Hiển thị logo RainLoop, slogan và mô tả ngắn. Có hai nút:

- “Khám phá RainLoop”.
- “Trình diễn”.

Phần tiếp theo giới thiệu:

- Vấn đề nhóm quan sát: nước mưa đọng hoặc thoát chậm ở sân trường, đồng thời cây cần được chăm sóc bằng nguồn nước phù hợp.
- Nguồn cảm hứng từ đất ngập nước.
- Giải pháp đang phát triển: thu nước qua các hộp ngầm, lọc sơ bộ, trữ tạm và đưa nước tới vùng rễ.
- Hình thiết kế RainLoop nổi bật.
- Các liên kết dẫn đến nghiên cứu, quá trình thiết kế và mô hình.

Không đưa số liệu về tình trạng sân trường nếu tài liệu chưa cung cấp. Không tuyên bố RainLoop đã giải quyết ngập thực tế.

B. NGHIÊN CỨU

Trình bày toàn bộ cảm hứng nhóm thực sự đã nghiên cứu. Đối chiếu tư liệu để xác định danh sách, không mặc định mọi ý tưởng từng nhắc đến đều là nghiên cứu đã hoàn thành.

Mỗi mục có:

- Đối tượng tự nhiên.
- Tên khoa học nếu là một loài đã xác định.
- Ảnh thật và nguồn ảnh.
- Cấu trúc hoặc đặc điểm liên quan.
- Chức năng sinh học.
- Cơ chế vật lý, hóa học hoặc sinh học.
- Cấp độ phỏng sinh học: hình thái, quy trình hoặc hệ sinh thái.
- Nguyên lý chuyển hóa sang thiết kế.
- Ý tưởng ứng dụng trong RainLoop.
- Quyết định và lý do chọn, loại hoặc tiếp tục cân nhắc.
- Nguồn AskNature và bài nghiên cứu khi có.

Đất ngập nước là nguồn cảm hứng chính trong thiết kế hiện tại. Phân biệt hệ sinh thái với một loài sinh vật, không điền tên khoa học giả cho “đất ngập nước”.

Nguyên lý thiết kế cần thể hiện được quan hệ giữa cấu trúc, tác động vật lý/hóa học và chức năng. Câu hỏi HMW phải gắn với vấn đề và sản phẩm cụ thể.

BỘ THẺ PHỎNG SINH HỌC

Tạo một bộ thẻ chung, có bộ lọc:

- Tất cả.
- Được chọn.
- Đã loại.
- Đang cân nhắc.

Mặt trước có hình sản phẩm hoặc chi tiết liên quan, tên đối tượng tự nhiên, logo và nhãn trạng thái.

Bấm hoặc chạm để lật thẻ. Mặt sau tóm tắt bốn phần:

1. Nhận diện đối tượng tự nhiên.
2. Đặc điểm sinh học.
3. Cơ chế hoạt động.
4. Ứng dụng và vị trí liên kết trên thiết kế.

Nút “Xem chi tiết” mở nội dung đầy đủ cùng nguồn nghiên cứu.

Thẻ được ứng dụng có nút “Xem trên bản vẽ”, chuyển đến trang Thiết kế và làm nổi bật đúng bộ phận. Thẻ đã loại chỉ dẫn đến sketch cũ hoặc quyết định trong Nhật ký nếu có tư liệu tương ứng.

BẢNG CẢM HỨNG

Moodboard gồm bốn nhóm:

- Thiên nhiên.
- Màu sắc.
- Vật liệu.
- Hình dáng thiết kế.

Kết hợp ảnh thật đất ngập nước, thực vật/vùng rễ, vật liệu và các hình thiết kế đã cung cấp. Mỗi nhóm có chú thích giải thích điều nhóm học được hoặc chuyển hóa vào thiết kế.

Không dùng ảnh AI như ảnh chụp sinh vật thật hoặc bằng chứng nghiên cứu.

C. NHẬT KÝ THIẾT KẾ

Dùng dòng thời gian theo giai đoạn:

- Quan sát vấn đề.
- Xác định nhu cầu và câu hỏi.
- Nghiên cứu sinh học.
- Chọn nguyên lý thiết kế.
- Phác thảo và so sánh ý tưởng.
- Nhận phản hồi, sửa thiết kế.
- Chuẩn bị vật liệu và chế tạo.
- Kiểm chứng và cải tiến.

Mỗi mốc có:

- Tên giai đoạn.
- Thời gian nếu có dữ liệu thật.
- Việc nhóm đã làm.
- Ảnh hoặc tài liệu liên quan.
- Điều học được.
- Quyết định tiếp theo.

Bấm mốc để mở nội dung. Thể hiện các phiên bản và lý do thay đổi. Phân biệt “Đã thực hiện”, “Đang thực hiện” và “Dự kiến”. Không tự tạo ngày, phản hồi của giáo viên hay kết quả nhóm chưa cung cấp.

D. THIẾT KẾ

Tổ chức thư viện:

- Sketch tay ban đầu.
- Phác thảo minh họa.
- Concept hoàn thiện.
- Blueprint đã sửa.
- Render 3D.
- Chi tiết cấu tạo và cơ chế.

Phân loại các ảnh đã gửi:

- image.png: phác thảo minh họa ý tưởng.
- image(1).png: concept hoàn thiện và cấu tạo mô-đun.
- image(2).png: sketch tay ban đầu.
- image(3).png: render tổng thể nhiều góc nhìn.
- image(4).png: blueprint, mặt cắt, chi tiết kỹ thuật và bảng vật liệu.

Đổi tên asset rõ ràng khi đưa vào dự án, giữ bản gốc. Dùng ảnh nguyên bản, không cắt mất kích thước, ghi chú hoặc cấu tạo quan trọng.

Cho phép phóng lớn, di chuyển ảnh khi zoom, chuyển giữa các ảnh và đóng bằng nút hoặc phím Escape. Thao tác dùng được trên điện thoại.

Thêm điểm chú thích tương tác tại:

- Nắp thu nước.
- Lớp lọc.
- Khoang chứa.
- Ống nối.
- Van.
- Vùng tưới.

Thiết kế hiện tại theo tài liệu:

- Ba hộp thu, lọc và trữ nước ngầm.
- Nắp đục lỗ ngang mặt đất.
- Lớp sỏi lớn, sỏi nhỏ, cát thô và vải lọc.
- Khoang nước bên dưới.
- Ống nối thẳng ở vị trí thấp giữa các hộp.
- Một van tại đoạn chuyển từ hộp cuối đến bồn cây.
- Van nằm trong hố kỹ thuật có nắp tiếp cận.
- Ống đục lỗ cấp nước ngầm dưới bồn cây.
- Cây mọc trên mặt đất.
- Bồn cây có phương án thoát nước dư.

Dùng hoạt ảnh để minh họa nước đi qua lớp lọc, xuống khoang chứa và qua van đến vùng tưới. Ghi “Minh họa nguyên lý”; không coi tốc độ hoạt ảnh là dữ liệu đo.

Phân biệt dòng chảy trong ống, sự thấm trong đất và mao dẫn. Người dùng muốn bổ sung dây/vật liệu mao dẫn từ khoang chứa tới vùng rễ, nhưng các bản vẽ hiện có chưa thể hiện bộ phận đó. Giữ nội dung này ở trạng thái “Phương án bổ sung cần xác nhận”. Không tự sửa bản vẽ hoặc tuyên bố dây mao dẫn đã được lắp.

Không khẳng định nước sau lọc uống được. Không khẳng định các hình minh họa đã xác nhận lưu lượng, cao độ hoặc hiệu quả vận hành.

E. VẬT LIỆU & MÔ HÌNH

Tách hai bảng:

1. Mô hình học tập.
2. Ước tính triển khai thực tế.

Mỗi bảng gồm:

- Bộ phận/vật liệu.
- Quy cách.
- Số lượng.
- Đơn vị.
- Đơn giá.
- Thành tiền.
- Nguồn giá và ngày tham khảo.
- Lý do lựa chọn hoặc ghi chú.

Lấy dữ liệu từ bảng vật liệu và blueprint đã cung cấp. Đối chiếu những thông số mâu thuẫn, không tự hợp thức hóa lỗi trong ảnh.

Tính tổng riêng từng bảng. Giá chưa có hiển thị “Chưa có giá”; giá dự tính ghi “Ước tính”. Không dùng số 0 thay cho thông tin thiếu.

Phương án thực tế phải ghi quy mô và giả định. Không nhân tỷ lệ mô hình một cách máy móc để suy ra chi phí triển khai.

Mô hình và kiểm chứng:

- Nhóm chưa thử nghiệm.
- Tạo khu vực “Kế hoạch kiểm chứng — Chưa thực hiện”.
- Phân biệt ảnh/render ý tưởng với ảnh mô hình vật lý.
- Khi chưa có ảnh thật, hiển thị trạng thái ngắn, rõ.

Kế hoạch thử gồm:

- Rò rỉ hộp và khớp nối.
- Nước đi qua nắp và lớp lọc.
- Mực nước và sự phân phối giữa các hộp.
- Hoạt động của van và đường tưới ngầm.
- Nước đến vùng rễ.
- Tình huống bồn đầy và thoát nước dư.
- Khả năng vệ sinh, bảo trì.
- Mao dẫn nếu nhóm xác nhận bổ sung.

Mỗi thử nghiệm có mục tiêu, cách làm, đại lượng cần đo và tiêu chí dự kiến. Chưa điền kết quả hoặc hiệu suất khi chưa đo.

F. ĐỘI NGŨ

Giới thiệu ngắn câu chuyện The Creative Creature và mục tiêu của RainLoop.

Hiển thị sáu hồ sơ:

- Khánh Trình: Quản lý dự án & Trưởng nhóm phát triển website.
- Anh Kiệt: Phát triển website.
- Phúc Nguyên: Phụ trách chế tạo mô hình & Nguyên vật liệu.
- Đức Tùng: Chế tạo mô hình.
- Gia Huy: Lắp ráp & Thử nghiệm.
- Hiển Minh: Hỗ trợ lắp ráp.

Ba vai trò cuối là phân công dự kiến cho đến khi cập nhật đóng góp thực tế.

Mỗi hồ sơ có ảnh, tên, vai trò và mô tả nhiệm vụ ngắn. Ban đầu dùng ảnh đại diện mẫu đồng bộ, dễ thay ảnh thật sau. Không tạo chân dung AI rồi trình bày như ảnh thật của thành viên.

Máy tính dùng bố cục ba cột, hai hàng. Điện thoại chuyển thành bố cục phù hợp.

Thông tin liên hệ chưa có. Chuẩn bị vị trí bổ sung trước khi xuất bản bản hoàn thiện. Không tạo email giả hoặc nút liên hệ không hoạt động.



**Giới hạn khoa học của sơ đồ cơ chế**

Không mặc định rằng ba hộp nối thấp sẽ phân phối nước theo thứ tự hoặc rằng mở van luôn đủ để đưa nước tới vùng rễ. Phân biệt đường đi dự kiến với vận hành đã kiểm chứng. Giải thích ngắn vai trò của chênh lệch cao độ/mực nước, tổn thất qua lớp lọc và ống, khả năng tắc nghẽn và điều kiện thoát nước dư. Khi thiếu kích thước, cao độ, tính thấm hoặc dữ liệu đo, không tính hay khẳng định lưu lượng, thời gian tưới hoặc hiệu suất lọc.

Mao dẫn là phương án riêng cần vật liệu, chiều cao nâng nước và khả năng cấp nước phù hợp; không đồng nhất với dòng chảy trọng lực hoặc nước chảy trong ống. Các tiêu chí thử nghiệm định lượng chưa có cơ sở phải ghi “Ngưỡng cần xác định”, không tự đặt ngưỡng rồi trình bày như yêu cầu đã được nhóm phê duyệt.


**5. Motion, video và tương tác**

Đây là website có nhiều chuyển động nổi bật, phản ứng với cuộn trang, rê chuột và bấm.

- Video nền thật, cây lay động và gợn nước.
- Logo, slogan và nội dung xuất hiện có nhịp.
- Hiệu ứng chiều sâu nhẹ giữa hình và nội dung khi cuộn.
- Dòng thời gian được làm nổi bật theo vị trí cuộn.
- Thẻ nổi nhẹ khi rê chuột, lật khi bấm.
- Chuyển trang và mở chi tiết mượt.
- Điểm chú thích bản vẽ phản hồi khi chọn.
- Hoạt ảnh dòng nước phục vụ giải thích cơ chế.

Giữ cuộn trang tự nhiên, không khóa hoặc ép người dùng cuộn theo hoạt ảnh. Không thay con trỏ bằng hiệu ứng gây khó thao tác.

Video lấy từ nguồn có quyền sử dụng phù hợp và video người dùng gửi. Ghi lại nguồn, tác giả và điều kiện sử dụng. Không tự đặt URL video giả.

Video nền:

- Chạy lặp, tắt tiếng, phát trong trang.
- Có ảnh đại diện khi chưa tải hoặc không phát được.
- Có nút tạm dừng.
- Chỉ tải/phát khi cần.
- Không phủ chuyển động dày phía sau bảng và nội dung nghiên cứu.
- Có phương án nhẹ hơn trên điện thoại.

Hỗ trợ chế độ giảm chuyển động của thiết bị. Bàn phím dùng được với menu, thẻ và cửa sổ ảnh. Không có chức năng chỉ hoạt động khi rê chuột.

**6. Chế độ “Trình diễn”**

Nút “Trình diễn” mở luồng:

1. Vấn đề.
2. Nghiên cứu.
3. Thẻ phỏng sinh học.
4. Thiết kế.
5. Vật liệu & Kế hoạch kiểm chứng.
6. Đội ngũ.

Có “Trước”, “Tiếp”, “Thoát trình diễn” và chỉ báo tiến trình. Người trình bày tự điều khiển, không tự động chuyển bước. Khi thoát, trở về khu vực đang xem.

Không yêu cầu màn hình riêng hoặc nội dung trùng lặp nếu có thể dùng lại các phần trên website.

Chuẩn bị mục hỏi đáp ngắn trong nội dung phù hợp: nguồn cảm hứng, khác biệt với thoát nước thông thường, vị trí van, bồn đầy, bảo trì và giới hạn chưa kiểm chứng. Không bịa kết quả để trả lời.

**7. Kỹ thuật và cập nhật**

Mã nguồn lưu trên GitHub, xuất bản bằng GitHub Pages.

Chọn giải pháp frontend tĩnh phù hợp. Không yêu cầu máy chủ hoặc cơ sở dữ liệu cho các chức năng đã nêu.

- Các trang mở trực tiếp và tải lại không lỗi.
- Đường dẫn asset hoạt động khi website nằm dưới đường dẫn repository.
- Nếu dùng bộ định tuyến, có phương án tương thích GitHub Pages.
- Ảnh và video được tối ưu nhưng bản vẽ vẫn đọc được khi phóng lớn.
- Có trang báo không tìm thấy với liên kết về Trang chủ.
- Có tiêu đề trang, mô tả, favicon và cấu trúc HTML phù hợp.
- Không có bí mật hoặc token trong mã frontend.

Người dùng cập nhật bằng cách gửi ảnh và nội dung qua chat để trợ lý sửa mã nguồn. Vì vậy, tách dữ liệu nội dung khỏi giao diện, đặt tên tệp rõ và có tài liệu hướng dẫn cập nhật.

Không cần xây màn hình quản trị, đăng nhập, tài khoản hoặc biểu mẫu tải ảnh lên website.



**Lựa chọn triển khai mặc định**

Ưu tiên website tĩnh đa trang, xuất ra sáu tệp HTML với URL dạng /rain-loop-website/index.html, /rain-loop-website/nghien-cuu.html, /rain-loop-website/nhat-ky.html, /rain-loop-website/thiet-ke.html, /rain-loop-website/vat-lieu.html và /rain-loop-website/doi-ngu.html. Có thể dùng Vite đa trang hoặc giải pháp tĩnh tương đương. Nếu repository đã có nền tảng phù hợp, giữ nền tảng đó. Không dựa riêng vào chuyển hướng 404 để giả lập khả năng mở trực tiếp các trang.

Tách dữ liệu vào các tệp nội dung có cấu trúc, với ID ổn định cho nguồn nghiên cứu, thẻ, mốc nhật ký, bản vẽ và hotspot. Liên kết “Xem trên bản vẽ” dùng ID/hash thật, mở đúng ảnh, chọn đúng hotspot và đưa tiêu điểm tới phần giải thích. Nếu bản vẽ chưa có, hiện trạng thái thiếu tư liệu thay vì nút dẫn đến nội dung không tồn tại. Không đoán vị trí hotspot trước khi xem ảnh thật.

Tổng chi phí phải phân biệt tổng đầy đủ và tạm tính phần đã có giá. Nếu còn dòng thiếu giá, hiển thị “Tạm tính các mục đã có giá” cùng số mục chưa có giá; không gọi đó là tổng chi phí dự án.

Chế độ Trình diễn dùng lại dữ liệu nội dung chung. Nếu chuyển qua các trang, lưu đủ trạng thái để “Thoát trình diễn” trở về đúng trang và vị trí xuất phát. Định nghĩa rõ điều khiển bàn phím; không chiếm phím khi người dùng đang nhập liệu hoặc thao tác cửa sổ ảnh.

Menu và cửa sổ chi tiết/ảnh phải có tên truy cập, tiêu điểm nhìn thấy, xử lý Escape và trả tiêu điểm về nút mở. Cửa sổ dạng modal giữ tiêu điểm bên trong khi mở. Thẻ lật không để mặt bị ẩn vẫn nhận tiêu điểm hoặc được trình đọc màn hình đọc trùng. Vùng chạm chính tối thiểu 44 × 44 px; thanh điều hướng mobile luôn hiện, có khoảng bù cho tiêu đề và safe-area.

Với prefers-reduced-motion, bỏ parallax và chuyển động không cần thiết, không tự phát video nền; giữ đầy đủ nội dung và tương tác. Nếu chưa có video thật hợp lệ, dùng ảnh thật được phép sử dụng khi có, hoặc nền đồ họa được ghi rõ là minh họa. Không yêu cầu người dùng tải hết video mới đọc được trang.

Cấu hình GitHub Actions để build và triển khai GitHub Pages, không chèn token vào frontend. Xác minh quyền push và khả năng triển khai trước khi tuyên bố xuất bản. Cấu hình workflow thành công không đồng nghĩa website đã được xuất bản; báo riêng trạng thái mã nguồn, build, triển khai và URL đã kiểm tra.


**8. Quy tắc nguồn và nội dung thiếu**

Ưu tiên quyết định mới nhất của người dùng và tài liệu dự án hiện tại. Tài liệu bài giảng dùng để xác định phương pháp và tiêu chí, không làm bằng chứng rằng nhóm đã hoàn thành công việc.

Không tự tạo:

- Link AskNature, DOI, tác giả hoặc nguồn ảnh.
- Ngày làm việc và phản hồi giáo viên.
- Giá vật liệu đã xác minh.
- Kết quả thử nghiệm.
- Ảnh/video mô hình thật.
- Thông tin liên hệ.

Nội dung chưa xác nhận phải có trạng thái phù hợp và được đưa vào danh sách cần bổ sung. Vẫn hoàn thành giao diện và các phần có dữ liệu, không để thông tin thiếu chặn toàn bộ website.

**9. Kiểm tra và bàn giao**

Trước khi hoàn thành, kiểm tra:

- Sáu trang và toàn bộ liên kết.
- Bộ lọc, thẻ lật, cửa sổ chi tiết.
- Liên kết từ thẻ đến đúng bản vẽ.
- Phóng lớn ảnh và thao tác đóng.
- Chế độ Trình diễn.
- Video, ảnh thay thế và nút tạm dừng.
- Giao diện máy tính, máy tính bảng và điện thoại.
- Không tràn chữ, cắt ảnh quan trọng hoặc cuộn ngang ngoài ý muốn.
- Nhãn phân biệt render, mô hình thật, kế hoạch và kết quả.
- Các đường dẫn sau khi triển khai lên GitHub Pages.

Bàn giao mã nguồn đầy đủ, cấu hình xuất bản, hướng dẫn chạy và cập nhật bằng tiếng Việt. Kèm danh sách ngắn những tư liệu còn cần bổ sung.

Nếu có quyền truy cập GitHub được kết nối, đưa mã lên repository và xuất bản theo phạm vi được cho phép. Nếu chưa có quyền, bàn giao dự án sẵn triển khai cùng hướng dẫn; không tuyên bố đã xuất bản.



**Bằng chứng kiểm tra bắt buộc**

Chạy production build và phục vụ chính đầu ra build dưới base path /rain-loop-website/. Kiểm tra mở trực tiếp và tải lại cả sáu trang, đường dẫn media, trang 404 và liên kết thẻ–hotspot. Kiểm tra không có lỗi JavaScript liên quan chức năng chính. Các liên kết ngoài chỉ ghi là đã xác minh khi truy cập được nguồn thật.

Nếu công cụ trình duyệt khả dụng, kiểm tra ít nhất màn hình điện thoại hẹp, điện thoại rộng và desktop; kiểm tra bàn phím, menu, modal, zoom, Trình diễn, chế độ giảm chuyển động và trường hợp video không tải được. Ghi riêng kiểm tra đã chạy, kiểm tra thất bại và kiểm tra chưa chạy. Không coi build thành công là bằng chứng giao diện hoặc hoạt ảnh đã hoạt động đúng.

Bàn giao thêm bảng đối chiếu bốn nhóm tiêu chí với trang/tư liệu tương ứng, chỉ trong tài liệu bàn giao. Nêu mục nào đã đủ, mục nào đang thiếu bằng chứng. Không đưa bảng chấm điểm vào giao diện người xem.


Hãy thực hiện website theo toàn bộ yêu cầu trên. Ưu tiên nội dung khoa học chính xác, hình ảnh rõ, chuyển động nổi bật và các tương tác hoạt động thực tế.