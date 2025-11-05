import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Kết nối MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "22092003", // nếu có mật khẩu thì điền vào đây
  database: "todo_app"
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Kết nối MySQL thành công!");
});

// Route kiểm tra
app.get("/", (req, res) => {
  res.send("Server Todo API đang chạy!");
});


app.get("/todos", (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});



app.post("/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Thiếu nội dung todo" });
  db.query("INSERT INTO todos (text) VALUES (?)", [text], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, text, isComplete: false });
  });
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM todos WHERE id = ?", [id], (err) => {
    if (err) throw err;
    res.json({ message: "Đã xóa todo" });
  });
});


app.patch("/todos/:id/toggle", (req, res) => {
  const { id } = req.params;
  db.query(
    "UPDATE todos SET isComplete = NOT isComplete WHERE id = ?",
    [id],
    (err) => {
      if (err) throw err;
      res.json({ message: "Đã cập nhật trạng thái todo" });
    }
  );
});


app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));

