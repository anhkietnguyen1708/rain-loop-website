#!/usr/bin/env python3
# Run from repository root. Only replaces the six member.image values.
from pathlib import Path
import re
p=Path("src/content.js")
if not p.exists():
    raise SystemExit("Không tìm thấy src/content.js. Hãy chạy trong thư mục gốc của repo.")
s=p.read_text(encoding="utf-8")
original=s
mapping = {
    "Khánh Trình": "assets/team/khanh-trinh.webp",
    "Anh Kiệt": "assets/team/anh-kiet.webp",
    "Phúc Nguyên": "assets/team/phuc-nguyen.webp",
    "Đức Tùng": "assets/team/duc-tung.webp",
    "Gia Huy": "assets/team/gia-huy.webp",
    "Hiển Minh": "assets/team/hien-minh.webp",
}
for name, path in mapping.items():
    pattern=r"(\{\s*name:\s*'"+re.escape(name)+r"'(?:(?!\n\s*\},).)*?\bimage:\s*)(?:null|'[^']*'|\"[^\"]*\")"
    s,n=re.subn(pattern, lambda m: m.group(1)+"'"+path+"'", s, count=1, flags=re.S)
    if n!=1:
        raise SystemExit("Không tìm thấy đúng 1 mục cho "+name+". Dừng, chưa lưu thay đổi.")
if s==original: raise SystemExit("Không có thay đổi.")
p.write_text(s,encoding="utf-8")
print("Đã liên kết đủ 6 ảnh, không thay đổi thông tin khác.")
print("Chạy: npm run build")
