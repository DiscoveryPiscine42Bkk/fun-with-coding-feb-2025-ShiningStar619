count=$(find . -maxdepth 1 -type f | wc -l) # นับไฟล์ปกติ
dir_count=$(find . -maxdepth 1 -type d | wc -l) # นับโฟลเดอร์
total=$((count + dir_count)) # รวมจำนวนไฟล์และโฟลเดอร์
echo $total # แสดงผลลัพธ์O
