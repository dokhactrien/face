const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public")); // Đảm bảo phục vụ các tệp HTML, CSS, JS từ thư mục 'public'

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Lưu thông tin vào cơ sở dữ liệu hoặc xử lý như bạn muốn
  console.log("Tên đăng nhập:", username);
  console.log("Mật khẩu:", password);

  // Trả về phản hồi thành công
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Máy chủ đang chạy trên http://localhost:${port}`);
});
