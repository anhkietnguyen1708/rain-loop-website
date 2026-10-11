from pathlib import Path
import json,re
root=Path(__file__).resolve().parent
content=Path('src/content.js')
render=Path('scripts/render.mjs')
if not content.exists() or not render.exists():
    raise SystemExit('Hãy chạy trong thư mục gốc rain-loop-website-main.')
rows=json.loads((root/'du_lieu_vat_lieu.json').read_text(encoding='utf-8'))
s=content.read_text(encoding='utf-8')
start=s.index('export const materials = [')
end=s.index('];',start)+2
def js(v):return json.dumps(v,ensure_ascii=False)
data='export const materials = [\n'+',\n'.join('  { '+', '.join(f'{k}: {js(v)}' for k,v in r.items())+' }' for r in rows)+'\n];'
s=s[:start]+data+s[end:]
s=s.replace("export const realMaterials = materials.map(item => ({ ...item, quantity: null, price: null }));","export const realMaterials = materials.map(item => ({ ...item }));")
content.write_text(s,encoding='utf-8')
r=render.read_text(encoding='utf-8')
r=r.replace("Chưa xác định quy mô, cao độ, kích thước hoặc khối lượng. Không suy chi phí thực tế bằng cách nhân tỷ lệ mô hình.","Phương án triển khai một sản phẩm RainLoop gồm 3 hộp thu và trữ nước, nối với hệ lọc sơ bộ, van điều tiết và bồn cây. Số lượng và đơn giá bên dưới là dự toán cho một bộ; cần đo kích thước thực tế và xác minh giá trước khi mua.")
r=r.replace("Danh mục đã đối chiếu PowerPoint KTTX lần 2. Xem bảng kê gốc trên RL-001 và xác nhận quy cách trước khi mua; đơn giá chưa được cung cấp.","Dự toán cho một mô hình gồm 3 hộp thu và trữ nước. Giá là mức giả định tham khảo, chưa phải báo giá cửa hàng được xác minh.")
r=r.replace("Ước tính triển khai thực tế","Dự toán một hệ thống ba hộp")
r=r.replace("'Đã cộng đủ các mục có trong bảng'","'Đã tính các mục trong bảng theo giá giả định; chưa xác minh giá thị trường'")
render.write_text(r,encoding='utf-8')
print('Đã cập nhật dữ liệu. Chạy npm run build và npm run dev để kiểm tra.')
