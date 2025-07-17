document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && email && password) {
    document.getElementById("message").textContent = "Sign-up successful! 🎉";
    this.reset();
  } else {
    document.getElementById("message").textContent = "Please fill in all fields!";
    document.getElementById("message").style.color = "red";
  }
});
