document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const successMsg = document.getElementById("successMsg");

  // Form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

      if (username === "admin" && password === "admin123") {
      alert("Login Successful");
      window.location.href = "dashboard.html";
    } else {
      alert("Login Failed");
    }
  });
});