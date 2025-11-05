# 📝 Todo List App (React + Node.js + Tailwind + MySQL)

Một ứng dụng Todo List đơn giản giúp người dùng quản lý công việc hằng ngày.



## 🚀 Tech Stack

**Frontend:**

⚛️ React (Vite)

🎨 Tailwind CSS

🧠 React Hooks (useState, useEffect)

🌐 Axios (gọi API)

**Backend:**

🟢 Node.js + Express

🗃️ MySQL (hoặc PostgreSQL)

🔌 RESTful API



## 🧩 Tính năng

✅ Thêm công việc mới
✅ Xem danh sách công việc
✅ Cập nhật trạng thái hoàn thành
✅ Xóa công việc
✅ Lưu trữ dữ liệu trên MySQL qua RESTful API


##  💻 Cách chạy dự án
1️⃣ Cài đặt dependencies
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

2️⃣ Tạo database

Tạo database mới trong MySQL:

CREATE DATABASE todo_app;
USE todo_app;

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);

3️⃣ Cấu hình kết nối database (backend/db.js)
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo_app"
});

db.connect((err) => {
  if (err) console.error("DB connection failed:", err);
  else console.log("✅ Connected to MySQL");
});

export default db;

4️⃣ Chạy backend
cd backend
node index.js


Server chạy tại: http://localhost:5000

5️⃣ Chạy frontend
cd frontend
npm run dev


App chạy tại: http://localhost:5173

## 📸 Preview


<img width="658" height="800" alt="image" src="https://github.com/user-attachments/assets/09f23566-41d5-45a5-9be0-3ab3b18f2edc" />
