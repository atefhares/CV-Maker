import User from "../js/User";
let userEmail = localStorage.getItem("currentLoggedInUserId");
let currentLoggedInUserObj = Object.assign(new User, JSON.parse(localStorage.getItem(userEmail)));
var cvData = currentLoggedInUserObj.data;
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

var summary=cvData.summary;
document.getElementById("summary").textContent=summary;

// this for skills
var skills=document.getElementById("skills");
var levelskill=document.getElementById("levelskill");
var skillsarr= cvData.skills;
for(var i=0;i<skillsarr.length;i++){

    skills.innerHTML+=`<tr style="color:gray;"><td>${skillsarr[i].name}</td><td>${skillsarr[i].level}</td></tr><br>`;
    //levelskill.innerHTML+=`<i style="margin-left:10px;color:#0DD95C;">${skillsarr[i].level}</i><br>`;
}

// this for Interests
var Interests=document.getElementById("Interests");
var Interestsarr= cvData.interests;
for(var i=0;i<Interestsarr.length;i++){
    Interests.innerHTML+=`<b style="margin-left:10px;color:gray;word-break: break-all;">${Interestsarr[i].name}</b><br>`;
}

// this for education
var education=document.getElementById("education");
var degreearr= cvData.educations;
if(degreearr.length == 0){
    document.getElementById('eeducation').style.visibility = 'hidden'
}
for(var i=0;i<degreearr.length;i++){
    education.innerHTML+=`<h6 style="margin-left:5px;color:gray;font-size:18px;word-break: break-all;">${degreearr[i].educationDegree}</h6>`;
    education.innerHTML+=`<div style="margin-left:5px;color:red;font-size:16px;word-break: break-all;">${degreearr[i].schoolName}</div><br>`;
    education.innerHTML+=`<i style="margin-left:5px;color:gray;font-size:14px;word-break: break-all;">${degreearr[i].startDate} - ${degreearr[i].endDate}</i><br><br>`;
}

// this for experiance
var Experiences=document.getElementById("Experiences");
var Experiencesarr= cvData.experances;

if(Experiencesarr.length == 0){
    document.getElementById('WExperiences').style.visibility = 'hidden'
}
for(var i=0;i<Experiencesarr.length;i++){
   
        Experiences.innerHTML+=`<h4 style="margin-left:10px;color:gray;">${Experiencesarr[i].jobTitle}</h4>`;
        Experiences.innerHTML+=`<div style="width:100%"><p style="color:red;padding-left:10px;padding-left: 10px;float: left;margin-right: 10px"> ${Experiencesarr[i].companyName}</p><p style="margin-left:10px;color:gray;"> | ${Experiencesarr[i].startDate} - ${Experiencesarr[i].endDate}</p></div>`;
        Experiences.innerHTML+=`<p style="margin-left:50px;margin-right:25px;color:gray;word-break: break-all;">${Experiencesarr[i].description}</p><br><br><br>`;
}

// this for languages
var languages=document.getElementById("languages");
var languagesarr= cvData.languages;
for(var i=0;i<languagesarr.length;i++){
    
    languages.innerHTML+=`<h6 style="margin-left:10px;color:gray;word-break: break-all;">${languagesarr[i].name}</h6>`;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById("print").addEventListener("click", function(){ 
    document.getElementById('print').style.visibility = 'hidden'
    window.print(); 
}); 


