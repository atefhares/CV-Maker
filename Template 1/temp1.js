import User from "../js/User.js";
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
if(summary === ""){
    document.getElementsByClassName('resume-intro')[0].style.display = 'none'
}
else{

    document.getElementById("summary").textContent=summary;
}

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
var educationarr= cvData.educations;
if(educationarr.length == 0){
    document.getElementById('eeducation').style.display = 'none'
}
for(var i=0;i<educationarr.length;i++){
    education.innerHTML+=`<h6 style="margin-left:5px;color:gray;font-size:18px;word-break: break-all;">${educationarr[i].educationDegree}</h6>`;
    education.innerHTML+=`<div style="margin-left:5px;color:red;font-size:16px;word-break: break-all;">${educationarr[i].schoolName}</div><br>`;
    if(educationarr[i].startDate === "" || educationarr[i].endDate === ""  )
    {
        var z = " ";   
    }
    else{
        var z = "-";
    }
    education.innerHTML+=`<i style="margin-left:5px;color:gray;font-size:14px;word-break: break-all;">${educationarr[i].startDate} ${z} ${educationarr[i].endDate}</i><br><br>`;
}

// this for experiance
var Experiences=document.getElementById("Experiences");
var Experiencesarr= cvData.experances;

if(Experiencesarr.length == 0){
    document.getElementById('WExperiences').style.display = 'none'
}

for(var i=0;i<Experiencesarr.length;i++){
    
    Experiences.innerHTML+=`<h4 style="margin-left:10px;color:gray;">${Experiencesarr[i].jobTitle}</h4>`;
    if(Experiencesarr[i].startDate === "" || Experiencesarr[i].endDate === "")
    {
        var x = " ";
        var y = " ";
    }
    else{
        var x = "-";
        var y = "|";
    }
        Experiences.innerHTML+=`<div style="width:100%"><p style="color:red;padding-left:10px;padding-left: 10px;float: left;margin-right: 10px"> ${Experiencesarr[i].companyName}</p><p class="date" style="margin-left:10px;color:gray;">${y} ${Experiencesarr[i].startDate} ${x} ${Experiencesarr[i].endDate}</p></div>`;
        Experiences.innerHTML+=`<p  style="margin-left:10px;color:gray;word-break: break-all;">${Experiencesarr[i].description}</p><br><br><br>`;
}

// this for languages
var languages=document.getElementById("languages");
var languagesarr= cvData.languages;
for(var i=0;i<languagesarr.length;i++){
    
    languages.innerHTML+=`<h6 style="margin-left:10px;color:gray;word-break: break-all;">${languagesarr[i].name}</h6>`;
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById("print").addEventListener("click", function(){ 
    document.getElementById('print').style.display = 'none'
    window.print(); 
}); 


