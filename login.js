const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "food" && password === "food#123") {
        // location.reload("./index.html");
        location.href='./index.html'
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})