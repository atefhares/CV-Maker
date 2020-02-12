
var cvData = JSON.parse(localStorage.getItem('cvData'));

var fname=cvData.fullName;
document.getElementsByClassName("resume-name mb-0 text-uppercase")[0].innerHTML = fname;

var job=cvData.jobTitle;
document.getElementsByClassName("resume-tagline mb-3 mb-md-0")[0].innerHTML = job;

var phoneNumber=cvData.phoneNumber;
document.getElementsByTagName("a")[0].innerHTML = phoneNumber;
document.getElementsByTagName("a")[0].setAttribute("href",`tel:${phoneNumber}`)
var email=cvData.email;
document.getElementsByTagName("a")[1].innerHTML = email;
document.getElementsByTagName("a")[1].setAttribute("href",`mailto:${email}`)

var city=cvData.city;
document.getElementById("add").textContent = city;
// this for skills
var skills=document.getElementById("skills");
var skillsarr= cvData.skills;
for(var i=0;i<skillsarr.length;i++){
    skills.innerHTML+=`<b style="margin-left:10px;color:gray;">${skillsarr[i].name}</b><i style="margin-left:10px;color:#0DD95C;">${skillsarr[i].level}</i><br>`;
}
// this for education
var education=document.getElementById("education");
var degreearr= cvData.educations;
for(var i=0;i<degreearr.length;i++){

    education.innerHTML+=`<h5 style="margin-left:10px;color:#0DD95C;font-size:25px;">${degreearr[i].educationDegree}</h5>`;
    education.innerHTML+=`<i style="margin-left:10px;color:red;">${degreearr[i].schoolName}</i><br>`;
    education.innerHTML+=`<i style="margin-left:10px;color:gray;">${degreearr[i].startDate} - ${degreearr[i].endDate}</i><br><br>`;
}

// this for experiance
var Experiences=document.getElementById("Experiences");
var Experiencesarr= cvData.experances;
for(var i=0;i<Experiencesarr.length;i++){
    
    Experiences.innerHTML+=`<h4 style="margin-left:10px;color:#0DD95C;">${Experiencesarr[i].jobTitle}</h4>`;
    Experiences.innerHTML+=`<p style="margin-left:370px;color:red;"> ${Experiencesarr[i].companyName}</p>`;
    Experiences.innerHTML+=`<p style="margin-left:10px;color:gray;"> | ${Experiencesarr[i].startDate} - ${Experiencesarr[i].endDate}</p><br>`;
    Experiences.innerHTML+=`<p style="margin-left:50px;margin-right:25px;color:gray;">${Experiencesarr[i].description}</p><br><br><br>`;
}

// this for languages
var languages=document.getElementById("languages");
var languagesarr= cvData.languages;
for(var i=0;i<languagesarr.length;i++){
    
    languages.innerHTML+=`<h6 style="margin-left:10px;color:gray;">${languagesarr[i]}</h6>`;
}