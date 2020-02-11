var err = [];
var cashederr = [];
var errClass = document.getElementsByClassName("errors")[0];
var errUl = document.getElementById("error-messages");

// get all buttons
var summit = document.getElementById("saveForm");
var addSkill = document.getElementById("addSkill");
var addExperance = document.getElementById("addExperance");
var addEducation = document.getElementById("addEducation");

// get all form sections
var skillsNodes = document.getElementsByClassName("skill");
var experanceNodes = document.getElementsByClassName("experance");
var educationNodes = document.getElementsByClassName("education");
var languagesNodes = document.getElementsByClassName("checkbox");

// arrays to save all sections data to add them in local storage
var skills = [];
var languages = [];
var experances = [];
var educations = [];

// Events
summit.addEventListener("click", formSubmit);
addSkill.addEventListener("click", addNewSkill);
addExperance.addEventListener("click", addNewEX);
addEducation.addEventListener("click", addNewEducation);

function setEmpty(parent) {
    var inputs = parent.getElementsByTagName("input");
    [].slice.call(inputs).forEach(input => {
        input.value = ''
    });
    if (parent.getElementsByTagName("textarea")[0]) {
        parent.getElementsByTagName("textarea")[0].value = '';
    }
}

// function to add new skill Section
function addNewSkill(e) {
    e.preventDefault();
    var parent = document.getElementsByClassName("skills-container")[0];
    var skill = document.getElementsByClassName("skill")[0];
    var newSkill = skill.cloneNode(true);
    newSkill.getElementsByClassName("skillInput")[0].value = ''
    parent.appendChild(document.createElement("hr"));
    parent.appendChild(newSkill);
}

// function to add new experance Section
function addNewEX(e) {
    e.preventDefault();
    var parent = document.getElementsByClassName("experances-container")[0];
    var experance = document.getElementsByClassName("experance")[0];
    var newExperance = experance.cloneNode(true);
    setEmpty(parent);
    parent.appendChild(document.createElement("hr"));
    parent.appendChild(newExperance);
}

// function to add new education Section
function addNewEducation(e) {
    e.preventDefault();
    var parent = document.getElementsByClassName("educations-container")[0];
    var education = document.getElementsByClassName("education")[0];
    var newEducation = education.cloneNode(true);
    setEmpty(parent);
    parent.appendChild(document.createElement("hr"));
    parent.appendChild(newEducation);
}

function getFormElementsData() {

    // contact_informations
    var fullName = document.getElementById("fullName").value;
    var infoJobTitle = document.getElementById("infoJobTitle").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var city = document.getElementById("city").value;
    var summary = document.getElementById("summary").value;
    // skills
    [].slice.call(skillsNodes).forEach(skill => {
        if (skill.getElementsByClassName("skillInput")[0].value) {
            var newSkill = {
                name: skill.getElementsByClassName("skillInput")[0].value,
                level: skill.getElementsByTagName("select")[0].value
            }
            skills.push(newSkill);
        }
    });

    // work_experance
    [].slice.call(experanceNodes).forEach(experance => {
        if (experance.getElementsByClassName("companyName")[0].value) {
            var newExperance = {
                companyName: experance.getElementsByClassName("companyName")[0].value,
                jobTitle: experance.getElementsByClassName("jobTitle")[0].value,
                startDate: experance.getElementsByClassName("startDate")[0].value,
                endDate: experance.getElementsByClassName("endDate")[0].value,
                description: experance.getElementsByClassName("description")[0].value
            }
            experances.push(newExperance);
        }
    });

    // Education
    [].slice.call(educationNodes).forEach(education => {
        if (education.getElementsByClassName("schoolName")[0].value) {
            var newEducation = {
                schoolName: education.getElementsByClassName("schoolName")[0].value,
                educationDegree: education.getElementsByClassName("educationDegree")[0].value,
                startDate: education.getElementsByClassName("startDate")[0].value,
                endDate: education.getElementsByClassName("endDate")[0].value
            }
            educations.push(newEducation);
        }
    });

    //languages
    [].slice.call(languagesNodes).forEach(lang => {
        if (lang.checked) {
            languages.push(lang.value)
        }
    });

    var CVData = {
        fullName: fullName,
        jobTitle: infoJobTitle,
        email: email,
        phoneNumber: phoneNumber,
        city: city,
        summary:summary,
        skills: skills,
        educations: educations,
        experances: experances,
        languages: languages
    }
    return CVData;
}

// funtion submit the form and save data in local storage
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

    // save data in local storage
    if (!err.length) {
        localStorage.setItem("cvData", JSON.stringify(getFormElementsData()));
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