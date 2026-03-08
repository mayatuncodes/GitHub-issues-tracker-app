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
      successMsg.classList.remove("hidden");

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      alert("Login Failed");
    }
  });

  // Enter press anywhere in form fills auto credentials
  form.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default submit
      usernameInput.value = "admin";
      passwordInput.value = "admin123";
    }
  });
});
