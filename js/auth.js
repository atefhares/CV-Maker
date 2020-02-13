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

import User from './User.js'

//---------------------------------------------------------------------------------------------------------

let actionBtn = document.getElementById("actionBtn");
let nameIF = document.getElementById("nameIF");
let emailIF = document.getElementById("emailIF");
let passwordIF = document.getElementById("passwordIF");
let confirmPasswordIF = document.getElementById("confirmPasswordIF");
let switchForm = document.getElementById("switchForm");
let confirmPasswordDiv = document.getElementById("confirmPasswordDiv");
let switchFormLabel = document.getElementById("switchFormLabel");
let formHeader = document.getElementById("formHeader");
let errorLabel = document.getElementById("errorLabel");
let errorLabelDiv = document.getElementById("errorLabelDiv");
let fullNameDiv = document.getElementById("fullNameDiv");

//---------------------------------------------------------------------------------------------------------


function showErrorMessage(text) {
    errorLabelDiv.style.display = "block";
    errorLabel.innerText = text;
}

function hideErrorMessage() {
    errorLabelDiv.style.display = "none";
}

function onActionBtnClicked(e) {
    e.preventDefault();

    let email = emailIF.value;
    let password = passwordIF.value;

    if (!isLogin) {
        let name = nameIF.value;

        // Initial letter of each word is captial, at least 3 chars in each word
        if (name.trim().match(/^([\w]{3,})+\s+([\w\s]{3,})+$/i) == null) {
            showValidate(nameIF);
            return;
        }
    }

    if (email.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        showValidate(emailIF);
        return;
    }

    if (!password) {
        showValidate(passwordIF);
        return;
    }

    if (isLogin) {
        let retrievedObject = JSON.parse(localStorage.getItem(email));
        if (retrievedObject !== null) {
            if (retrievedObject.pass === password) {
                console.log("SignedIN!");
                // todo: move to home page
            } else {
                showErrorMessage("Wrong email or password!")
            }
        } else {
            showErrorMessage("Not registered!")
        }
    } else {
        let confirmPassword = confirmPasswordIF.value;


        if (password !== confirmPassword) {
            showValidate(confirmPasswordIF);
            return;
        }

        let currentUser = new User(name, email, password);
        localStorage.setItem(email, JSON.stringify(currentUser));

        nameIF.value = "";
        emailIF.value = "";
        passwordIF.value = "";
        confirmPasswordIF.value = "";

        // todo: move to home page
    }


}

function showValidate(input) {
    let thisAlert = input.parentElement;
    thisAlert.classList.add('alert-validate');
}

function hideValidate(input) {
    let thisAlert = input.parentElement;
    thisAlert.classList.remove('alert-validate');
    hideErrorMessage();
}

function clearFields() {
    nameIF.value = "";
    emailIF.value = "";
    passwordIF.value = "";
    confirmPasswordIF.value = "";
}

function buildAuthForm() {
    if (!isLogin) {
        fullNameDiv.style.display = "block";
        confirmPasswordDiv.style.display = "block";
        switchForm.textContent = "Log In";
        switchFormLabel.textContent = "Already have account?";
        formHeader.innerText = "Create New Account";
        actionBtn.innerText = "Sign Up"
    } else {
        fullNameDiv.style.display = "none";
        confirmPasswordDiv.style.display = "none";
        switchForm.textContent = "Sign Up";
        switchFormLabel.textContent = "Create an account?";
        formHeader.innerText = "Account Login";
        actionBtn.innerText = "Sign IN"
    }
}

function onSwitchFormClicked(e) {
    e.preventDefault();

    isLogin = !isLogin;

    clearFields();

    buildAuthForm();

}

//---------------------------------------------------------------------------------------------------------

actionBtn.addEventListener("click", onActionBtnClicked);
switchForm.addEventListener("click", onSwitchFormClicked);
emailIF.addEventListener("focus", ev => {
    hideValidate(emailIF)
});
passwordIF.addEventListener("focus", ev => {
    hideValidate(passwordIF)
});
confirmPasswordIF.addEventListener("focus", ev => {
    hideValidate(confirmPasswordIF)
});
nameIF.addEventListener("focus", ev => {
    hideValidate(nameIF)
});

//---------------------------------------------------------------------------------------------------------

function sha512(str) {
    return crypto.subtle.digest("SHA-512", new TextEncoder("utf-8").encode(str)).then(buf => {
        return Array.prototype.map.call(new Uint8Array(buf), x => (('00' + x.toString(16)).slice(-2))).join('');
    });
}

//---------------------------------------------------------------------------------------------------------
let isLogin = localStorage.getItem("isLogin") === "true";
console.log("isLogin: " + isLogin);
buildAuthForm();
