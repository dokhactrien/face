document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Ngăn chặn hành động gửi form mặc định

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Đăng nhập thành công!");
        } else {
          alert("Đăng nhập thất bại!");
        }
      })
      .catch((error) => {
        console.error("Có lỗi xảy ra:", error);
      });
  });
