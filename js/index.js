let loginBtn = document.getElementById("loginBtn");
let signUpBtn = document.getElementById("signupBtn");
let userNameIF = document.getElementById("userNameIF")
let passwordIF = document.getElementById("passwordIF")

function onLoginBtnClicked() {
    let username = userNameIF.value;
    let password = passwordIF.value;

    if (username && password) {

    }

}

loginBtn.addEventListener("click", onLoginBtnClicked)