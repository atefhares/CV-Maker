/*
 * Copyright (c)  2020, Atef Hares - Information Technology Institute (ITI).
 * Licensed under GNU General Public License v3.0
 *
 * https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 * Permissions of this strong copyleft license are conditioned on making available complete
 * source code of licensed works and modifications, which include larger works using a
 * licensed work, under the same license. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights.
 */

let loginBtn = document.getElementById("loginBtn");
let signUpBtn = document.getElementById("signupBtn");
let authBtnsGroup = document.getElementById("authBtnsGroup");
let userGroup = document.getElementById("userGroup");
let username = document.getElementById("username");
let logout = document.getElementById("logout");
let createCV = document.getElementById("createCV");

//---------------------------------------------------------------------------------------------------------
let isUserLoggedIn = false;
let currentLoggedInUser = JSON.parse(localStorage.getItem(localStorage.getItem("currentLoggedInUserId")));
if (currentLoggedInUser !== null) {
    isUserLoggedIn = true;
}

//---------------------------------------------------------------------------------------------------------


if (!isUserLoggedIn) {
    function onLoginBtnClicked() {
        window.location.href = "auth.html";
        localStorage.setItem("isLogin", "true");
    }

    function onSignUpBtnClicked() {
        window.location.href = "auth.html";
        localStorage.setItem("isLogin", "false");
    }

    loginBtn.addEventListener("click", onLoginBtnClicked);
    signUpBtn.addEventListener("click", onSignUpBtnClicked);

    userGroup.style.display = "none";
    createCV.style.display = "none";

} else {
    authBtnsGroup.style.display = "none";
    userGroup.style.display = "block";
    createCV.style.display = "block";
    username.innerHTML = '<span class=\"glyphicon glyphicon-user\"></span> ' + currentLoggedInUser.name;

    function onLogOutBtnClicked() {
        localStorage.removeItem("currentLoggedInUserId")
        location.reload();
    }

    logout.addEventListener("click", onLogOutBtnClicked)
}
//---------------------------------------------------------------------------------------------------------
