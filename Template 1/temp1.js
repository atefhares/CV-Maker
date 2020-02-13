
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

var summary=cvData.summary;
console.log(summary);
document.getElementById("summary").textContent=summary;

// this for skills
var skills=document.getElementById("skills");
var levelskill=document.getElementById("levelskill");
var skillsarr= cvData.skills;
for(var i=0;i<skillsarr.length;i++){
    skills.innerHTML+=`<b style="margin-left:10px;color:gray;">${skillsarr[i].name}</b><br>`;
    levelskill.innerHTML+=`<i style="margin-left:10px;color:#0DD95C;">${skillsarr[i].level}</i><br>`;
}

// this for Interests
var Interests=document.getElementById("Interests");
var Interestsarr= cvData.interests;
for(var i=0;i<Interestsarr.length;i++){
    Interests.innerHTML+=`<b style="margin-left:10px;color:gray;">${Interestsarr[i].name}</b><br>`;
}

// this for education
var education=document.getElementById("education");
var degreearr= cvData.educations;
for(var i=0;i<degreearr.length;i++){

    education.innerHTML+=`<h6 style="margin-left:5px;color:gray;font-size:18px;">${degreearr[i].educationDegree}</h6>`;
    education.innerHTML+=`<div style="margin-left:5px;color:red;font-size:16px;">${degreearr[i].schoolName}</div><br>`;
    education.innerHTML+=`<i style="margin-left:5px;color:gray;font-size:14px;">${degreearr[i].startDate} - ${degreearr[i].endDate}</i><br><br>`;
}

// this for experiance
var Experiences=document.getElementById("Experiences");
var Experiencesarr= cvData.experances;
for(var i=0;i<Experiencesarr.length;i++){
    
    Experiences.innerHTML+=`<h4 style="margin-left:10px;color:gray;">${Experiencesarr[i].jobTitle}</h4>`;
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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.getElementById("print").addEventListener("click", function(){ 
    document.getElementById('print').style.visibility = 'hidden'
    window.print(); 
}); 

