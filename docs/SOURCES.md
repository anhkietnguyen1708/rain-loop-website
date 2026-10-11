# Kiểm kê tư liệu và nguồn

| Tư liệu | Trạng thái | Cách sử dụng / nguồn |
| --- | --- | --- |
| `BRIEF.md` | Đã đọc | Bản yêu cầu người dùng gửi trong phiên xây dựng. Nguồn cho tên nhóm, slogan, màu, cấu tạo dự kiến và phân công. |
| `.agents/skills/cinematic-desktop-build/SKILL.md` | Đã đọc | Skill do người dùng cung cấp; hướng dẫn bố cục và quy trình. |
| `.agents/skills/cinematic-mobile-refinement/SKILL.md` | Đã đọc | Skill do người dùng cung cấp; hướng dẫn mobile. Yêu cầu RainLoop cụ thể được ưu tiên. |
| Logo RainLoop | Đã nhận | PNG nền trong suốt do người dùng cung cấp từ phiên tạo ảnh; dùng ở header, footer và trang nhận diện. |
| PowerPoint của nhóm | Đã đọc | `UPDATE KTTX Lần 2 CNCN - The Creative Creature (1).pptx`; đối chiếu cấu tạo, quy cách vật liệu và trạng thái thiết kế. Không suy ra kết quả thử nghiệm. |
| `image.png` | Đã nhận | Phác thảo minh họa ý tưởng; thư viện, thẻ nghiên cứu và so sánh. |
| `image(1).png` | Đã nhận | Concept mô-đun; bản vẽ tương tác, thư viện và Journal. |
| `image(2).png` | Đã nhận | Sketch tay; thư viện và Journal. |
| `image(3).png` | Đã nhận | Render tổng thể; thư viện và bảng cảm hứng hình dáng. |
| `image(4).png` | Đã nhận | Blueprint RL-001, mặt cắt và bảng vật liệu; thư viện và phần vật liệu. |
| Ảnh khảo sát / mô hình vật lý / ảnh nhóm | Chưa nhận | Hiện thông báo hoặc avatar chữ mẫu; không dùng chân dung AI. |
| Video thiên nhiên thật | Chưa nhận | Dùng ảnh nền AI có nhãn, giữ SVG làm phương án dự phòng. Mã hỗ trợ video có poster, tạm dừng, lazy load, giảm chuyển động và xử lý lỗi. |
| AskNature / bài nghiên cứu | Chưa có liên kết | Chỉ trình bày mức khái quát từ brief; yêu cầu đối chiếu nguồn trước khi tăng mức khẳng định. |
| `public/assets/wetland-illustration.svg` | Được tạo cho website | Minh họa vector viết bằng mã trong `scripts/art.mjs`. Không phải ảnh thật, ảnh AI, ảnh khảo sát hoặc bằng chứng nghiên cứu. |
| Hotspot và hoạt ảnh trên concept | Được tạo cho website | Lớp tương tác phủ lên concept đã cung cấp, đặt theo bộ phận trong ảnh. Dòng chuyển động chỉ minh họa, không xác nhận lưu lượng hoặc hiệu suất. |
| Be Vietnam Pro | Phụ thuộc có khóa phiên bản | Gói `@fontsource/be-vietnam-pro`; phân phối tự lưu trữ, không gọi Google Fonts. Giấy phép SIL OFL ở `FONT-LICENSE.txt`. |

Bộ thẻ mới được tạo bằng ImageGen của ChatGPT theo yêu cầu trực tiếp của người dùng. Ảnh nghệ thuật thẻ không phải ảnh sinh học; ảnh macro tham khảo thật bổ sung bên dưới đã được kiểm tra tác giả và giấy phép. Không dùng video từ URL chưa kiểm chứng. Không sử dụng ảnh AI làm bằng chứng khảo sát hoặc kết quả thử nghiệm.

Khi nhận tư liệu mới, ghi tác giả, nguồn gốc, quyền sử dụng, ngày tham khảo và vị trí sử dụng. Giữ tệp gốc ngoài bộ asset tối ưu; chỉ đưa tài liệu được phép công bố vào repository công khai. Chỉ thêm link thật đã kiểm tra. Dữ liệu thiếu giữ `null`, không thay bằng số 0.

## Bản gốc và bản tối ưu

Năm ảnh thiết kế được lưu WebP để hiển thị; PNG gốc ở `public/assets/originals/` để đọc chi tiết và tải xuống. Không sửa chữ hoặc cấu trúc sản phẩm trong ảnh. Các tệp `image(5)`, `(7)`, `(8)`, `(9)` trùng các bản đã nhận; `image(6)` là bản chụp sketch có độ phân giải thấp hơn, ưu tiên bản `(2)`. Chữ nằm trong ảnh là nội dung gốc, không phải font HTML của website.

## Bộ thẻ tương tác (11/10/2026)

- Đã đọc ba tài liệu bài giảng buổi 2, buổi 3 và tuần 4 để đối chiếu cấu trúc nghiên cứu; ảnh yêu cầu tuần 9 xác nhận flipcard, grid và lightbox. Chỉ dùng các tài liệu làm nguồn nội dung, không công khai tệp bài giảng.
- Hai ảnh thẻ do công cụ ImageGen tích hợp ChatGPT tạo mới theo yêu cầu người dùng. Ảnh không chứa chữ, không phải ảnh thiên nhiên thật hoặc sơ đồ định lượng. Nhãn và thông tin là HTML có thể chỉnh sửa.
- `rainloop-card-wetland.webp` / PNG gốc: minh họa nghệ thuật đất ngập nước, thảm thực vật, vùng rễ và vòng nước. `rainloop-card-capillary.webp` / PNG gốc: minh họa sợi thấm nước, giọt nước và rễ. Được hiển thị trong mục Nghiên cứu và lightbox.
- Bản gốc ở `public/assets/originals/`; prompt đầy đủ ở `docs/CARD-ART-PROMPTS.json`. Cả hai ảnh 1086×1448 px; WebP chất lượng 90 chỉ đổi định dạng, không sửa đối tượng.
- Trạng thái đất ngập nước và mao dẫn đều do nhóm đã xác nhận lựa chọn. Mao dẫn chưa có chi tiết trong RL-001 nên vẫn ghi rõ chưa tích hợp; không đổi kết quả thử nghiệm.
- Nguồn nền tảng bổ sung được kiểm tra ngày 11/10/2026: USGS, “Capillary Action and Water”, https://www.usgs.gov/water-science-school/science/capillary-action-and-water; EPA, “Functions & Values of Wetlands”, https://www.epa.gov/sites/default/files/2021-01/documents/functions_values_of_wetlands.pdf. Các nguồn này bổ sung đối chiếu, không được gán là link AskNature/bài nghiên cứu do nhóm đã gửi.

## Giao diện theo hai ảnh tham chiếu — 11/10/2026

Hai ảnh tham chiếu do người dùng gửi (Haven và Verdro) định hướng thanh điều hướng dạng viên thuốc, phần mở đầu toàn cảnh thiên nhiên và các khối sáng bo tròn. Không dùng ảnh chụp giao diện làm ảnh nền hoặc sao chép thương hiệu, số liệu marketing từ mẫu.

- `assets/rainloop-wetland-panorama.webp`: phong cảnh minh họa bằng công cụ tạo ảnh tích hợp của ChatGPT; 1672 × 941, nguồn PNG trong `assets/originals/rainloop-wetland-panorama.png`.
- `assets/rainloop-wetland-island.webp`: khối thiên nhiên nổi minh họa ý tưởng bằng AI; 1536 × 1024, giữ alpha trong suốt; PNG trong `assets/originals/rainloop-wetland-island.png`.
- Prompt đầy đủ và công cụ: `docs/REFERENCE-REDESIGN-PROMPTS.json`.

Các ảnh trên phục vụ nhận diện thị giác, không phải ảnh khảo sát hay bằng chứng nghiên cứu. Website vẫn chưa có video thiên nhiên thật. Màu xanh rừng và xanh nước giữ vai trò nhận diện; xanh lá nhạt #D7EB8C và nền #FAFBF7 bổ sung cho giao diện mới. Logo, bản vẽ và thông tin khoa học của nhóm giữ nguyên.


## Đối chiếu tiêu chí mới — 11/10/2026

Đã đọc đầy đủ 9 trang PDF “Hoàn thiện Biomimicry Journal, Moodboard, Biomimicry Cards.pptx.pdf”. Trang 3–4 xác định bốn phần kỹ thuật, render + tên sinh vật + logo ở mặt trước, flip và lightbox phóng sketch. Trang 6 yêu cầu userflow trong slide thuyết trình, không trên website. Bài giảng buổi 2–4 và slide 7–8 PowerPoint nhóm được đối chiếu lại. Không công khai file bài giảng.

| Asset thật | Tác giả / quyền sử dụng | Nguồn và cách dùng |
| --- | --- | --- |
| `phragmites-macro.webp` | Kaira Liggett, USGS Contractor; Public Domain | [USGS: Fluffy phragmites](https://www.usgs.gov/media/images/fluffy-phragmites). Thu nhỏ 1200×900 và đổi WebP. Ảnh cận cảnh sậy để nhận diện sinh vật tham khảo; ảnh quần thể xâm lấn ở Bắc Mỹ, không phải khảo sát nhóm hay đề xuất trồng. |
| `celery-macro.webp` | Кузнецов Денис Аркадьевич / KDA-TRUE-TECH / Denis Kuznetsov; [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Wikimedia Commons: Макро срез сельдерея](https://commons.wikimedia.org/wiki/File:%D0%9C%D0%B0%D0%BA%D1%80%D0%BE_%D1%81%D1%80%D0%B5%D0%B7_%D1%81%D0%B5%D0%BB%D1%8C%D0%B4%D0%B5%D1%80%D0%B5%D1%8F.jpg). Thu nhỏ 1280×851 và đổi WebP; bản phái sinh ảnh này tiếp tục theo CC BY-SA 4.0. Dùng như tham chiếu mô thực vật, không gán thành cảm hứng mới của nhóm. |
| `gravel-texture.webp` | Poxnar; [CC0](https://creativecommons.org/publicdomain/zero/1.0/) | [Gravel road (close-up)](https://commons.wikimedia.org/wiki/File:Gravel_road_(close-up).jpg). Thu nhỏ 1200×677 và đổi WebP. Chỉ tham khảo texture; không khẳng định kích thước hoặc nguồn vật liệu mua của nhóm. |

Tên khoa học cần tây đối chiếu [Kew Plants of the World Online](https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:838067-1): *Apium graveolens* L. Mao dẫn là cơ chế vật lý; vận chuyển nước trong cây không chỉ do mao dẫn. Loài sậy và cần tây được ghi rõ là sinh vật tham khảo bổ sung, không thay nguồn cảm hứng nhóm đã chọn ở cấp hệ sinh thái/quy trình.

Mặt trước thẻ dùng render sản phẩm nhóm cung cấp và logo gốc; tên sinh vật đi kèm nhãn “Tham khảo”. Bốn phần kỹ thuật và ảnh thật ở mặt sau/hồ sơ. Các minh họa nghệ thuật AI giữ trong lightbox và mục mở rộng. Ghi tác giả, nguồn, giấy phép và chỉnh sửa ngay trong hồ sơ ảnh; thông tin tiếp tục hiển thị khi phóng lớn.

`docs/rainloop-userflow.svg` là sơ đồ vector viết bằng mã, mô tả điều hướng thật; dùng trong slide, không đưa vào public assets. Giấy phép ảnh CC BY-SA chỉ áp dụng cho ảnh và bản phái sinh của ảnh, không tự thay giấy phép toàn bộ mã website.


## Chỉnh nhận diện Level 3 và typography — 11/10/2026

Yêu cầu mới của nhóm ưu tiên tên hệ sinh thái thay tên loài. Đã đọc lại ba bài giảng buổi 2–4: Form / Process / Ecosystem; phân biệt Function, Strategy, Reference. Thẻ và hồ sơ dùng “Hệ sinh thái đất ngập nước”, đề mục “Nhận diện hệ sinh thái” và “Cấu trúc & Chức năng”. Mao dẫn giữ vai trò cơ chế hỗ trợ kết nối đất–nước–rễ; chưa tích hợp RL-001. Không gán Level 3 riêng cho hiện tượng vật lý mao dẫn.

Tên khoa học sậy/cần tây và Kew không còn trong phần nhận diện website. Ảnh thực vật USGS vẫn dùng để tham khảo thành phần môi trường; ảnh texture Poxnar thay ảnh cần tây ở thẻ mao dẫn. Các thông tin tác giả và giấy phép được giữ. Asset cần tây cũ được lưu nhưng không hiển thị trên website.

Unbounded 500/600 và Fraunces 500 italic từ các gói Fontsource khóa phiên bản 5.3.0, tự lưu trữ cùng website. Nội dung và nút vẫn dùng Be Vietnam Pro 5.2.8. Bộ latin, latin-ext, vietnamese được nhập đầy đủ; đã kiểm tra cmap và hiển thị chữ có dấu. License SIL OFL được sao chép vào `public/assets/unbounded-OFL.txt` và `fraunces-OFL.txt`.

Chuyển trang dùng ba dải màu liên tiếp, tiêu đề đích và hiệu ứng mở chương. Không thêm thư viện hoạt ảnh. Navigation HTML vẫn hoạt động khi JavaScript không chạy; nút Trình diễn dùng cùng cơ chế chuyển cảnh. Tắt chuyển động/Reduced Motion bỏ qua cảnh chuyển. Thời gian chuyển đích cố định 570ms, không phụ thuộc animationend; màn mở chờ font tối đa 1.1s rồi mở nội dung. Back/Forward phục hồi từ BFCache xóa trạng thái che trang.


## Cảnh nền và chuyển động chữ — 11/10/2026

Đã đối chiếu hai ảnh chụp trang chủ `image(20261011-120633).png` và dải quy trình `image(20261011-120708).png`. Dải trắng cũ được thay bằng khối bốn bước có link thật tới hotspot trên concept. Không thêm số liệu vận hành hoặc thay cấu trúc sản phẩm.

Phong cảnh RainLoop hiện có vẫn là minh họa AI. Hiệu ứng phong cảnh phóng/chuyển chậm, lớp sương CSS, hạt sáng và gợn nước canvas là chuyển động trang trí viết bằng mã, không phải video thiên nhiên thật hay mô phỏng khoa học. Không tạo thêm ảnh và không thay đổi file ảnh gốc. Canvas giới hạn mật độ điểm ảnh 1.5, khoảng 30 fps, dừng khi hero ngoài màn hình, tab ẩn hoặc chuyển động bị tắt.

Chữ chạy dùng HTML/CSS; phần lặp là trang trí ẩn với trình đọc màn hình, có bản nội dung tĩnh. Tiêu đề giữ nguyên chữ Unicode tiếng Việt, chỉ tách từ để hoạt ảnh; không vẽ chữ lên canvas. Chữ xuất hiện lại khi mục trở vào màn hình ở cả hai hướng cuộn. Nút chuyển động và prefers-reduced-motion dừng toàn bộ hiệu ứng mới. Các vùng nền thêm đường đồng mức và vòng nước, giữ nội dung nghiên cứu nguyên vẹn.


## Thay ảnh tại Cảm hứng chính — 11/10/2026

Theo ảnh vị trí `image(20261011-123010).png`, chỉ thay minh họa khối đất nổi tại research feature ở trang Nghiên cứu. Ảnh mới: `image(20261011-123033).png`, do nhóm gửi; giữ nguyên hình và chú thích. Lưu PNG gốc tại `public/assets/originals/rainloop-ecosystem-sketch.png`, bản WebP tại `public/assets/rainloop-ecosystem-sketch.webp`. Không crop/chỉnh cấu trúc; chỉ đổi định dạng cho hiển thị. Bấm ảnh để mở PNG gốc trong lightbox; ghi nhãn phác thảo nhóm cung cấp, không phải mô hình đã kiểm chứng.


## Bong bóng màu và điều hướng — 11/10/2026

Đối chiếu ảnh chụp `image(20261011-130259).png`: hai khối discovery, các pill CTA/kicker và thanh điều hướng trước đây đơn sắc. Bổ sung gradient kính xanh rừng/xanh nước/lime/vàng, đường viền conic, orb trang trí và SVG giọt nước viết bằng mã. Không sửa ảnh cảnh, logo, bản vẽ hay nội dung nghiên cứu. Orb và viền chuyển động độc lập với hộp liên kết để giữ hình học/touch target ổn định; các lớp trang trí không bắt pointer.

Điều hướng desktop có sáu tab màu, số chương ẩn với trình đọc màn hình, capsule trượt theo pointer/focus và trả về trang hiện tại. Giữ href/aria-current gốc. JS đo capsule lại sau khi font sẵn sàng và nav resize. Dưới 1051px chuyển sang menu touch có cùng bảng màu; media query đóng dialog được đồng bộ với breakpoint. Tắt chuyển động/Reduced Motion dừng các hoạt ảnh và bỏ transition capsule. Bóng/trang trí discovery dừng khi hero ngoài màn hình.
