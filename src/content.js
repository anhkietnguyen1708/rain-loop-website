export const site = {
  name: 'RainLoop', team: 'The Creative Creature',
  slogan: 'Học từ tự nhiên. Thiết kế cho cuộc sống.',
  description: 'Hệ thống thu gom nước mưa, lọc sơ bộ, trữ tạm và tưới vùng rễ.',
  school: 'Trường Đinh Thiện Lý', course: 'Thiết kế & Công nghệ · Lớp 12',
  logo: 'assets/rainloop-logo.png', contact: null,
  // Local, licensed assets only. Leave null until supplied and recorded in docs/SOURCES.md.
  heroVideo: null, heroPoster: 'assets/rainloop-wetland-panorama.webp',
};

export const pages = [
  { id: 'index', title: 'Trang chủ', short: 'Trang chủ' },
  { id: 'nghien-cuu', title: 'Nghiên cứu', short: 'Nghiên cứu' },
  { id: 'nhat-ky', title: 'Nhật ký thiết kế', short: 'Nhật ký' },
  { id: 'thiet-ke', title: 'Thiết kế', short: 'Thiết kế' },
  { id: 'vat-lieu', title: 'Vật liệu & Mô hình', short: 'Vật liệu & Mô hình' },
  { id: 'doi-ngu', title: 'Đội ngũ', short: 'Đội ngũ' },
];

export const research = [{
  id: 'dat-ngap-nuoc', name: 'Đất ngập nước', category: 'Hệ sinh thái', status: 'selected',
  statusLabel: 'Được chọn', eyebrow: 'Cảm hứng chính', image: 'assets/rainloop-card-wetland.webp',
  original: 'assets/originals/rainloop-card-wetland.png',
  imageAlt: 'Minh họa AI: đất ngập nước với cây, vùng rễ và vòng nước trên nền xanh rừng',
  accent: 'forest', implementation: 'Đã chuyển hóa vào concept',
  facts: [
    ['Cấu trúc & cơ chế', 'Vùng trũng, nền đất và thảm thực vật giữ nước, cản dòng; dòng chậm tạo điều kiện cho cặn lắng.'],
    ['Chức năng', 'Giữ tạm nước và làm chậm dòng chảy trong hệ sinh thái.'],
    ['Cấp độ phỏng sinh học', 'Hệ sinh thái: học cách kết nối nhiều chức năng trong một hệ thống.'],
    ['Ứng dụng RainLoop', 'Ba hộp ngầm: thu nước, lọc sơ bộ, trữ tạm; van và ống tưới đưa nước tới vùng rễ.']
  ],
  summary: 'Học cách giữ nước, làm chậm dòng chảy và kết nối nước với vùng rễ.',
  identity: 'Một hệ sinh thái có điều kiện ngập nước thường xuyên hoặc theo mùa; không phải một loài sinh vật.',
  structure: 'Nước, nền đất hoặc trầm tích và thảm thực vật tương tác trong cùng một hệ thống.',
  function: 'Khả năng lưu giữ nước và làm biến đổi chất lượng nước phụ thuộc cấu trúc, điều kiện môi trường và thời gian lưu.',
  mechanism: 'Dòng chảy chậm có thể tạo điều kiện cho hạt lơ lửng lắng xuống. Tương tác với nền đất, rễ và vi sinh vật là các quá trình khác nhau, cần tài liệu chuyên môn để mô tả định lượng.',
  principle: 'Tách việc thu, giữ tạm và phân phối nước thành các chức năng liên kết; dùng lớp vật liệu để lọc sơ bộ trước khi cấp tới vùng rễ.',
  application: 'Các hộp ngầm có lớp lọc, khoang nước và đường ống tới bồn cây. Đây là chuyển hóa ý tưởng, không tái tạo đầy đủ một hệ sinh thái đất ngập nước.',
  decision: 'Được chọn làm cảm hứng chính; đã chuyển hóa vào concept và RL-001. Các cảm hứng cũ khác còn cần đối chiếu tài liệu nhóm.',
  source: 'Tư liệu nhóm: PowerPoint UPDATE KTTX lần 2 và RL-001. Bổ sung nguồn nền tảng EPA để đối chiếu; không thay cho liên kết AskNature và bài nghiên cứu riêng của nhóm.',
  sourceLinks: [{ label: 'EPA · Chức năng và giá trị đất ngập nước', url: 'https://www.epa.gov/sites/default/files/2021-01/documents/functions_values_of_wetlands.pdf' }],
  drawingId: 'concept', hotspotId: 'lop-loc'
}, {
  id: 'mao-dan', name: 'Mao dẫn', category: 'Cơ chế / Quy trình', status: 'selected',
  statusLabel: 'Được chọn', eyebrow: 'Hướng phát triển', image: 'assets/rainloop-card-capillary.webp',
  original: 'assets/originals/rainloop-card-capillary.png',
  imageAlt: 'Minh họa AI: sợi vật liệu thấm nước, giọt nước và vùng rễ trên nền xanh nước',
  accent: 'water', implementation: 'Chưa tích hợp vào blueprint',
  summary: 'Gợi mở cách dẫn nước từ bồn chứa tới vùng rễ bằng vật liệu thấm nước.',
  identity: 'Mao dẫn là cơ chế vật lý; không phải tên một loài. Thẻ dùng sợi thấm nước để minh họa hướng ứng dụng đã được nhóm chọn.',
  structure: 'Khe nhỏ trong vật liệu xốp hoặc giữa các sợi tạo đường tiếp xúc cho nước.',
  function: 'Di chuyển nước trong các khe nhỏ, có thể ngược chiều trọng lực trong giới hạn nhất định.',
  mechanism: 'Bám dính, liên kết giữa các phân tử nước và sức căng bề mặt cùng tham gia. Độ cao và lượng nước chuyển phụ thuộc vật liệu, kích thước khe và trọng lực.',
  principle: 'Chọn vật liệu thấm nước liên tục, nối vùng chứa nước với nơi cần giữ ẩm; kiểm tra chiều cao nâng nước và lượng nước chuyển trước khi ứng dụng.',
  application: 'Dự kiến dùng dây hoặc vật liệu dẫn nước từ khoang chứa tới vùng rễ. Chưa có chi tiết này trong concept hoặc bản RL-001, chưa có dữ liệu thử nghiệm.',
  decision: 'Được chọn về định hướng theo xác nhận của nhóm trong trao đổi. Cần bổ sung vật liệu, chi tiết bản vẽ và thử nghiệm trước khi ghi là đã triển khai.',
  source: 'Định hướng ứng dụng theo xác nhận của nhóm; cơ chế nền tảng đối chiếu USGS. Liên kết AskNature và bài nghiên cứu của nhóm vẫn cần bổ sung.',
  sourceLinks: [{ label: 'USGS · Mao dẫn và nước', url: 'https://www.usgs.gov/water-science-school/science/capillary-action-and-water' }],
  facts: [
    ['Cấu trúc & cơ chế', 'Khe nhỏ giữa các sợi thấm nước; bám dính, liên kết nước và sức căng bề mặt cùng tham gia.'],
    ['Chức năng', 'Dẫn nước trong vật liệu xốp, có giới hạn chiều cao và lượng nước chuyển.'],
    ['Cấp độ phỏng sinh học', 'Quy trình: học nguyên lý vận chuyển nước; không bắt chước hình dáng sinh vật.'],
    ['Ứng dụng RainLoop', 'Dây hoặc vật liệu nối bồn chứa với vùng rễ; đang chờ bản vẽ chi tiết và thử nghiệm.']
  ]
}];

// Level 3 identity follows the group's ecosystem-level brief.
Object.assign(research[0], {
  ecosystemName: 'Hệ sinh thái đất ngập nước', level: 'Level 3 · Hệ sinh thái',
  referenceNote: 'RainLoop học cách liên kết thu, lọc sơ bộ, giữ tạm và phân phối nước ở cấp hệ sinh thái. Concept không tái tạo đầy đủ một vùng đất ngập nước và chưa có kết quả kiểm chứng.',
  macro: { src: 'assets/phragmites-macro.webp', title: 'Ảnh thật thảm thực vật đất ngập nước', credit: 'Kaira Liggett / USGS · Public Domain', source: 'https://www.usgs.gov/media/images/fluffy-phragmites', license: 'https://www.usgs.gov/media/images/fluffy-phragmites' },
  facts: [
    ['Nhận diện hệ sinh thái', 'Đất ngập nước: nước, nền đất và thảm thực vật liên kết trong cùng một hệ thống.'],
    ['Cấu trúc & Chức năng', 'Vùng trũng và thảm thực vật lưu giữ nước, cản dòng; kết nối nước với vùng rễ.'],
    ['Cơ chế hoạt động', 'Dòng chậm tạo điều kiện cho cặn lắng; lắng, lọc vật lý và quá trình sinh học có cơ chế khác nhau.'],
    ['Ứng dụng & Định vị', 'Hộp lọc và khoang trữ tạm; xem lớp lọc 02 trên concept. Đây là lọc sơ bộ, chưa kiểm chứng.']
  ]
});
research[0].sourceLinks.push({label:'USGS · Ảnh thành phần thực vật đất ngập nước',url:research[0].macro.source});
Object.assign(research[1], {
  ecosystemName: 'Hệ sinh thái đất ngập nước', level: 'Cơ chế hỗ trợ trong Level 3',
  category: 'Kết nối đất – nước – rễ',
  identity: 'Trong định hướng hệ sinh thái đất ngập nước, mao dẫn được xem xét như cơ chế đưa nước từ vùng chứa đến vùng rễ. Đây không phải một hệ sinh thái riêng.',
  referenceNote: 'Định hướng dự án là Level 3 — hệ sinh thái. Mao dẫn là cơ chế vật lý hỗ trợ kết nối đất, nước và vùng rễ, chưa được tích hợp vào RL-001.',
  macro: { src: 'assets/gravel-texture.webp', title: 'Ảnh thật bề mặt sỏi — tham khảo nền vật liệu', credit: 'Poxnar · CC0 · Thu nhỏ và chuyển WebP', source: 'https://commons.wikimedia.org/wiki/File:Gravel_road_(close-up).jpg', license: 'https://creativecommons.org/publicdomain/zero/1.0/' },
  facts: [
    ['Nhận diện hệ sinh thái', 'Đất ngập nước; thẻ này tập trung vào mối liên hệ đất, nước và vùng rễ trong hệ thống.'],
    ['Cấu trúc & Chức năng', 'Khe nhỏ trong vật liệu thấm gợi mở cách đưa nước tới vùng rễ; ảnh sỏi chỉ là texture tham khảo.'],
    ['Cơ chế hoạt động', 'Bám dính, liên kết giữa phân tử nước và sức căng bề mặt; chiều cao nâng nước có giới hạn.'],
    ['Ứng dụng & Định vị', 'Dây dẫn từ khoang chứa tới vùng rễ: dự kiến, chưa có trong RL-001. Cần sketch chi tiết và thử.']
  ]
});
research[1].sourceLinks.push({label:'Ảnh tham khảo nền vật liệu · Poxnar, CC0',url:research[1].macro.source});

export const timeline = [
  { title: 'Bắt đầu từ một cơn mưa', stage: 'Quan sát vấn đề', status: 'Đang thực hiện', text: 'Nhóm nêu hiện tượng nước mưa đọng hoặc thoát chậm ở sân trường, cùng nhu cầu chăm sóc cây.', learned: 'Cần phân biệt quan sát ban đầu với số liệu đo tại hiện trường.', next: 'Bổ sung ảnh vị trí, thời điểm quan sát và thời gian nước rút.', evidence: 'Mô tả trong yêu cầu dự án; chưa có ảnh khảo sát.' },
  { title: 'Đặt đúng câu hỏi', stage: 'Xác định nhu cầu', status: 'Đang thực hiện', text: 'Làm thế nào để thu và giữ tạm nước mưa ở sân trường, rồi đưa nước tới vùng rễ theo cách có thể vệ sinh và kiểm chứng?', learned: 'Một giải pháp cần được đánh giá đồng thời ở nơi thu nước và nơi sử dụng nước.', next: 'Xác nhận vị trí dự kiến, nhu cầu tưới và điều kiện sân trường.', evidence: 'Câu hỏi thiết kế đề xuất từ mô tả dự án.' },
  { title: 'Lắng nghe cách tự nhiên vận hành', stage: 'Nghiên cứu sinh học', status: 'Đang thực hiện', text: 'Đất ngập nước là nguồn cảm hứng chính được nêu trong thiết kế hiện tại.', learned: 'Lắng, lọc, thấm và quá trình sinh học có cơ chế khác nhau.', next: 'Bổ sung tài liệu gốc, nguồn ảnh và các thẻ nghiên cứu thực tế.', evidence: 'PowerPoint KTTX lần 2: nguồn cảm hứng đất ngập nước; link AskNature và bài nghiên cứu của nhóm đang chờ bổ sung.' },
  { title: 'Từ hệ sinh thái đến nguyên lý', stage: 'Chọn nguyên lý thiết kế', status: 'Đang thực hiện', text: 'Tổ chức chuỗi chức năng thu nước, lọc sơ bộ, trữ tạm và cấp nước vùng rễ.', learned: 'Mô phỏng chức năng cần đi kèm điều kiện vận hành cụ thể.', next: 'Đối chiếu nguyên lý với bản vẽ và cao độ dự kiến.', evidence: 'Mô tả phương án trong yêu cầu dự án.' },
  { title: 'Ba hộp, một hướng phát triển', stage: 'Phác thảo & so sánh', image: 'assets/rainloop-hand-sketch.webp', imageTitle: 'Sketch tay ban đầu', status: 'Đã có bản vẽ', text: 'Phương án được mô tả có ba hộp ngầm, ống nối thấp và một van trước bồn cây.', learned: 'Sketch tay ban đầu đã được phát triển thành ba hộp ngầm, ống thẳng và hố kỹ thuật tiếp cận van.', next: 'Đối chiếu các góc nhìn, vị trí van và kích thước trước khi chế tạo.', evidence: 'Sketch tay, phác thảo minh họa, concept, bản RL-001 và render tổng thể đã được cung cấp.' },
  { title: 'Mỗi thay đổi cần một lý do', stage: 'Phản hồi & chỉnh sửa', status: 'Đã có bản vẽ', image: 'assets/rainloop-blueprint.webp', imageTitle: 'Blueprint RL-001 — Version 1', text: 'Bản RL-001 thể hiện hộp nằm dưới đất, nắp ngang mặt đất, ống nối thẳng thấp và một van trước bồn cây.', learned: 'Mặt bằng, mặt cắt và phối cảnh cần thống nhất về cấu tạo và cao độ.', next: 'Đối chiếu các thông số ghi trên bản vẽ và bổ sung phản hồi có nguồn khi nhận được.', evidence: 'Bản RL-001, Version 1; thiết kế: Khánh Trình, kiểm tra: Phúc Nguyên.' },
  { title: 'Đưa ý tưởng vào vật liệu', stage: 'Chuẩn bị & chế tạo', status: 'Đang chuẩn bị', text: 'Lập danh mục vật liệu, đối chiếu quy cách và chuẩn bị quy trình lắp ráp.', learned: 'Chi phí mô hình học tập khác chi phí triển khai thực tế.', next: 'Xác nhận bảng vật liệu, nguồn giá và ảnh chế tạo.', evidence: 'Đã có bảng vật liệu trong PowerPoint và RL-001; chưa có ảnh mô hình vật lý.' },
  { title: 'Đo lường để cải tiến', stage: 'Kiểm chứng & cải tiến', status: 'Dự kiến', text: 'Nhóm chưa thử nghiệm. Kế hoạch tập trung vào rò rỉ, đường nước, van, vùng rễ và thoát nước dư.', learned: 'Chỉ kết luận hiệu quả sau khi có phép đo và điều kiện thử rõ ràng.', next: 'Chốt cách đo và ngưỡng đánh giá trước khi thử.', evidence: 'Kế hoạch kiểm chứng; chưa có kết quả.' }
];

export const hotspots = [
  { id: 'nap-thu', name: 'Nắp thu nước', n: '01', x: 19, y: 26, text: 'Nắp đục lỗ ngang mặt đất theo mô tả dự án. Cần kiểm tra nước đi qua và khả năng vệ sinh rác trên bề mặt.' },
  { id: 'lop-loc', name: 'Lớp lọc', n: '02', x: 35, y: 35, text: 'Sỏi lớn, sỏi nhỏ, cát thô và vải lọc phục vụ lọc sơ bộ. Thứ tự, chiều dày và hiệu quả cần đối chiếu bản vẽ và thử nghiệm.' },
  { id: 'khoang-chua', name: 'Khoang chứa', n: '03', x: 19, y: 46, text: 'Khoang nước bên dưới lớp lọc dùng để trữ tạm. Bản RL-001 thể hiện khoang chứa bên dưới lớp lọc. Dung tích hữu dụng cần đối chiếu kích thước trong và thể tích chiếm chỗ trước khi tính.' },
  { id: 'ong-noi', name: 'Ống nối', n: '04', x: 43, y: 43, text: 'Ống nối ở vị trí thấp giữa các hộp. Dòng chảy phụ thuộc chênh lệch mực nước và tổn thất, không mặc định phân phối theo thứ tự.' },
  { id: 'van', name: 'Van điều tiết', n: '05', x: 64, y: 41, text: 'Một van ở đoạn chuyển từ hộp cuối tới bồn cây, trong hố kỹ thuật có nắp tiếp cận. Mở van không tự bảo đảm nước tới vùng rễ.' },
  { id: 'vung-tuoi', name: 'Vùng tưới', n: '06', x: 82, y: 43, text: 'Ống đục lỗ cấp nước dưới bồn cây. Cần kiểm tra độ ẩm vùng rễ và lối thoát nước dư khi bồn đầy.' }
];

export const drawings = [
  { id: 'sketch', title: 'Sketch tay ban đầu', sourceName: 'image(2).png', kind: 'Phác thảo', src: 'assets/rainloop-hand-sketch.webp', original: 'assets/originals/rainloop-hand-sketch.png' },
  { id: 'illustration', title: 'Phác thảo minh họa ý tưởng', sourceName: 'image.png', kind: 'Minh họa', src: 'assets/rainloop-sketch-illustration.webp', original: 'assets/originals/rainloop-sketch-illustration.png' },
  { id: 'concept', title: 'Concept & cấu tạo mô-đun', sourceName: 'image(1).png', kind: 'Concept', src: 'assets/rainloop-concept.webp', original: 'assets/originals/rainloop-concept.png' },
  { id: 'blueprint', title: 'Blueprint & mặt cắt kỹ thuật', sourceName: 'image(4).png', kind: 'Bản vẽ kỹ thuật', src: 'assets/rainloop-blueprint.webp', original: 'assets/originals/rainloop-blueprint.png' },
  { id: 'render', title: 'Render tổng thể nhiều góc nhìn', sourceName: 'image(3).png', kind: 'Render 3D', src: 'assets/rainloop-render-3d.webp', original: 'assets/originals/rainloop-render-3d.png' }
];

export const materials = [
  { name: "Hộp thu & trữ nước", quantity: 3, unit: "hộp", price: 65000, spec: "Hộp PP tái sử dụng 15–20 lít", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Nắp đục lỗ", quantity: 3, unit: "cái", price: 15000, spec: "Nắp PP gia công lỗ Ø5 mm", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Sỏi lớn, sỏi nhỏ", quantity: 4, unit: "kg", price: 8000, spec: "Sỏi lọc rửa sạch", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Cát thô & vải lọc", quantity: 1, unit: "bộ", price: 45000, spec: "Cát thô và vải lọc", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Ống nối & khớp nối", quantity: 1, unit: "bộ", price: 65000, spec: "PVC Ø21 và khớp nối xuyên vách", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Van & hố kỹ thuật", quantity: 1, unit: "bộ", price: 65000, spec: "Van DN15 và hộp kỹ thuật", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Ống tưới đục lỗ", quantity: 1.5, unit: "m", price: 20000, spec: "PVC Ø21 đục lỗ", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Bồn cây & tấm đế", quantity: 1, unit: "bộ", price: 95000, spec: "Bồn trồng và tấm đế", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Vật liệu làm kín", quantity: 1, unit: "bộ", price: 48000, spec: "Keo làm kín và gioăng", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." },
  { name: "Dây / vật liệu mao dẫn", quantity: 1, unit: "m", price: 12000, spec: "Dây thấm, phương án tùy chọn", estimated: true, source: "Dự toán tham khảo; chưa xác minh báo giá trực tuyến", note: "Số lượng dự kiến cho một hệ thống ba hộp; đối chiếu bản vẽ trước khi mua." }
];

// Real deployment quantities and prices are independent from the learning model.
export const realMaterials = materials.map(item => ({ ...item }));

export const testPlan = [
  ['Độ kín của hệ thống', 'Rò rỉ hộp và khớp nối', 'Nạp nước trong điều kiện có kiểm soát, đánh dấu mực ban đầu, quan sát các mối ghép.', 'Mức nước thay đổi, vị trí rò, thời gian quan sát.'],
  ['Từ mặt đất tới khoang', 'Nước qua nắp và lớp lọc', 'Cấp lượng nước biết trước, ghi thời gian đi qua và quan sát tích tụ ở mặt nắp.', 'Lượng nước đầu vào/thu được, thời gian, hiện tượng tắc.'],
  ['Ba hộp liên kết', 'Mực nước và phân phối', 'Đặt hộp theo cao độ được xác nhận, quan sát mực nước khi cấp nước vào một hộp.', 'Cao độ, mực nước từng hộp, thời gian cân bằng.'],
  ['Điều tiết dòng nước', 'Van và đường tưới ngầm', 'Thử các trạng thái đóng/mở van với cùng điều kiện mực nước.', 'Trạng thái van, lượng nước qua đầu ra, rò rỉ.'],
  ['Đến đúng nơi cần', 'Nước đến vùng rễ', 'Ghi độ ẩm ở các vị trí và độ sâu trước/sau tưới.', 'Độ ẩm, vị trí đo, thời gian và lượng nước cấp.'],
  ['Khi bồn đầy', 'Thoát nước dư', 'Tăng lượng cấp có kiểm soát, theo dõi đường thoát và hiện tượng dâng ngược.', 'Mực nước lớn nhất, thời gian rút và vị trí tràn.'],
  ['Dễ chăm sóc lâu dài', 'Vệ sinh & bảo trì', 'Tiếp cận nắp, lớp lọc và van; thử tháo, vệ sinh và lắp lại.', 'Thời gian, thao tác khó, chi tiết cần thay.'],
  ['Phương án mở rộng', 'Mao dẫn — cần xác nhận', 'Sau khi chốt vật liệu và bổ sung sketch: thử các mẫu dây cùng chiều dài, bề rộng và độ chênh cao; dùng cùng mực nước ban đầu và một mẫu không có dây làm đối chứng. Đề xuất ghi tại 0, 5, 15, 30 và 60 phút; lặp lại ít nhất 3 lần, kiểm soát bay hơi.', 'Chiều cao mặt ướt trên dây, khối lượng nước chuyển, thời gian và độ chênh cao. Chốt mức cấp nước cần đạt theo nhu cầu vùng rễ trước khi thử; chưa có ngưỡng hoặc kết quả đo.']
];

export const members = [
  { name: 'Khánh Trình', initials: 'KT', role: 'Quản lý dự án & Trưởng nhóm phát triển website', task: 'Điều phối tiến độ, tổng hợp nội dung và phụ trách trải nghiệm website.', planned: false, image: 'assets/team/khanh-trinh.webp' },
  { name: 'Anh Kiệt', initials: 'AK', role: 'Phát triển website', task: 'Xây dựng giao diện, tương tác và hỗ trợ kiểm tra các trang.', planned: false, image: 'assets/team/anh-kiet.webp' },
  { name: 'Phúc Nguyên', initials: 'PN', role: 'Phụ trách chế tạo mô hình & Nguyên vật liệu', task: 'Chuẩn bị danh mục vật liệu và tổ chức công việc chế tạo.', planned: false, image: 'assets/team/phuc-nguyen.webp' },
  { name: 'Đức Tùng', initials: 'ĐT', role: 'Chế tạo mô hình', task: 'Dự kiến hỗ trợ gia công các bộ phận theo bản vẽ được xác nhận.', planned: true, image: 'assets/team/duc-tung.webp' },
  { name: 'Gia Huy', initials: 'GH', role: 'Lắp ráp & Thử nghiệm', task: 'Dự kiến lắp ráp hệ thống và ghi nhận các phép thử.', planned: true, image: 'assets/team/gia-huy.webp' },
  { name: 'Hiển Minh', initials: 'HM', role: 'Hỗ trợ lắp ráp', task: 'Dự kiến hỗ trợ lắp ráp và chuẩn bị khu vực kiểm chứng.', planned: true, image: 'assets/team/hien-minh.webp' }
];

export const faq = [
  ['RainLoop học điều gì từ tự nhiên?', 'Dự án lấy cảm hứng từ đất ngập nước ở cấp độ hệ sinh thái: giữ nước, làm chậm dòng chảy và kết nối các chức năng. Các hộp lọc không tái tạo đầy đủ quá trình sinh học của đất ngập nước.'],
  ['Mao dẫn đã hoạt động trong RainLoop chưa?', 'Chưa có chi tiết dây mao dẫn trong RL-001 và chưa thử nghiệm. Đây là hướng được nhóm chọn: dùng vật liệu thấm nối khoang chứa tới vùng rễ. Cần đo chiều cao nâng nước và lượng nước chuyển với mẫu đối chứng. Nước vận chuyển trong cây còn liên quan thoát hơi nước, không chỉ mao dẫn.'],
  ['Khác gì với thoát nước thông thường?', 'Phương án hướng tới giữ tạm và sử dụng một phần nước cho vùng rễ, bên cạnh việc thu nước. Hiệu quả thực tế chưa được thử nghiệm.'],
  ['Vì sao van nằm trước bồn cây?', 'Theo mô tả hiện tại, van đặt giữa hộp cuối và bồn cây để tiếp cận điều tiết, trong hố kỹ thuật có nắp. Cần xác nhận cao độ và điều kiện dòng chảy.'],
  ['Điều gì xảy ra khi bồn đầy?', 'Thiết kế cần đường thoát nước dư. Vị trí, cao độ và khả năng thoát phải được xác nhận qua bản vẽ và thử nghiệm tình huống đầy.'],
  ['Hệ thống được bảo trì thế nào?', 'Cần tiếp cận nắp thu, lớp lọc và van để lấy rác, vệ sinh hoặc thay vật liệu. Tần suất bảo trì chưa được xác định.'],
  ['Nước sau lọc có uống được không?', 'Không có cơ sở để kết luận nước uống được. RainLoop mới đề xuất lọc sơ bộ và cấp nước vùng rễ; chưa có kết quả kiểm tra chất lượng nước.']
];

export const decisions = [
 { title:'Chọn đất ngập nước', status:'Được chọn', basis:'PowerPoint KTTX lần 2; concept và RL-001.', reason:'Chuyển hóa chức năng thu, lọc sơ bộ và lưu giữ nước thành các khoang liên kết.', href:'nghien-cuu.html#card-dat-ngap-nuoc' },
 { title:'Giữ hướng mao dẫn', status:'Được chọn về ý tưởng', basis:'Xác nhận của nhóm trong trao đổi.', reason:'Dẫn nước bằng vật liệu thấm tới vùng rễ; chờ chi tiết sketch, vật liệu và kiểm chứng.', href:'nghien-cuu.html#card-mao-dan' },
 { title:'Hạ hộp xuống dưới mặt đất', status:'Đã thể hiện trên bản vẽ', basis:'Concept và RL-001, Version 1.', reason:'Nắp ngang mặt đất, tiếp cận lớp lọc và giảm phần chiếm mặt sân.', href:'thiet-ke.html#ho-so-ban-ve' },
 { title:'Ống thẳng, một van trước bồn cây', status:'Đã thể hiện trên bản vẽ', basis:'Concept, mặt cắt RL-001 và kế hoạch prototype.', reason:'Thống nhất phương án liên kết và vị trí tiếp cận điều tiết; hiệu quả dòng chảy chưa được đo.', href:'thiet-ke.html#van' }
];
export const submissionGaps = [
 ['Nghiên cứu','Link AskNature và bài nghiên cứu riêng của nhóm; các cảm hứng cũ và lý do loại.'],
 ['Bản vẽ','Sketch vị trí dây mao dẫn; đối chiếu tỷ lệ, kích thước giữa BOM và mặt cắt.'],
 ['Vật liệu','Khối lượng còn thiếu, nguồn báo giá và ngày khảo sát cho từng phạm vi.'],
 ['Mô hình','Ảnh/video mô hình thật, nhật ký chế tạo và dữ liệu thử nghiệm.'],
 ['Hồ sơ nhóm','Ảnh thật, họ tên đầy đủ và kênh liên hệ được nhóm xác nhận.']
];
