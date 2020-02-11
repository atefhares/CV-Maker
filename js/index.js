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

let actionBtn = document.getElementById("actionBtn");
let emailIF = document.getElementById("emailIF");
let passwordIF = document.getElementById("passwordIF");
let switchForm = document.getElementById("switchForm");
let confirmPasswordDiv = document.getElementById("confirmPasswordDiv");
let switchFormLabel = document.getElementById("switchFormLabel");
let formHeader = document.getElementById("formHeader");

let isLogin = true;

function onActionBtnClicked() {
    let username = emailIF.value;
    let password = passwordIF.value;

    if (isLogin) {
        if (username && password) {

        }
    } else {
        let confirmPassword = confirmPasswordDiv.value;

        if (username && password && confirmPassword && password === confirmPassword) {
            console.log("Error")
        }
    }


}


function onSwitchFormClicked() {
    isLogin = !isLogin;

    if (!isLogin) {
        confirmPasswordDiv.style.display = "block";
        switchForm.textContent = "Log In";
        switchFormLabel.textContent = "Already have account?";
        formHeader.innerText = "Create New Account";
        actionBtn.innerText = "Sign Up"
    } else {
        confirmPasswordDiv.style.display = "none";
        switchForm.textContent = "Sign Up";
        switchFormLabel.textContent = "Create an account?";
        formHeader.innerText = "Account Login";
        actionBtn.innerText = "Sign IN"
    }

}

actionBtn.addEventListener("click", onActionBtnClicked)
switchForm.addEventListener("click", onSwitchFormClicked)