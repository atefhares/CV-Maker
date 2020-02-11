var err = [];
var cashederr = [];
var errClass = document.getElementsByClassName("errors")[0];
var errUl = document.getElementById("error-messages");
var summit = document.getElementById("saveForm");
var addSkill = document.getElementById("addSkill");

summit.addEventListener("click", formSubmit);
addSkill.addEventListener("click", addNewSkill);

function addNewSkill(e) {
    e.preventDefault();
    var parent = document.getElementsByClassName("skills-container")[0];
    var skill = document.getElementsByClassName("skill")[0];
    var newSkill = skill.cloneNode(true);
    newSkill.getElementsByClassName("skillInput")[0].value = ''
    parent.appendChild(document.createElement("hr"));
    parent.appendChild(newSkill);
}

function formSubmit(e) {
    e.preventDefault();
    validateName();
    validateInfoJobTitle();
    validateEmail();
    validatePhoneNumber();
    validateSkill();
    checkLanguage();
    if (err.length > 0) {
        errClass.style.display = "block";
    }
    errUl.innerHTML = "";
    for (let index = 0; index < err.length; index++) {
        errUl.innerHTML += "<li style='color:red'>" + err[index] + "</li>"
    }

    err = [];
}

function validateName() {
    var input = document.getElementById("fullName");
    if (input.value === "") {
        err.push("plz, Enter ur name");
    }
}

function validateInfoJobTitle() {
    var input = document.getElementById("infoJobTitle");
    if (input.value === "") {
        err.push("plz, Enter ur Job Title");
    }
}

function validateEmail() {
    var input = document.getElementById("email");
    if (input.value === "") {
        err.push("plz, Enter ur email");
    }
}

function validatePhoneNumber() {
    var input = document.getElementById("phoneNumber");
    if (input.value === "") {
        err.push("plz, Enter ur Phone Number");
    }
}

function validateCity() {
    var input = document.getElementById("city");
    if (input.value === "") {
        err.push("plz, Enter ur city");
    }
}

function validateSkill() {
    var input = document.getElementsByClassName("skillInput")[0];
    if (input.value === "") {
        err.push("plz, Enter At least one Skill");
    }
}

function checkLanguage() {
    var inputs = document.getElementsByClassName("checkbox");
    var count = 0;
    for (let index = 0; index < inputs.length; index++) {
        if (inputs[index].checked === true) {
            count++;
        }
    }
    if (count == 0) {
        err.push("plz, choose at least one language");
    }
}