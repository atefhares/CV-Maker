import User from "../js/User.js";
let userEmail = localStorage.getItem("currentLoggedInUserId");
let currentLoggedInUserObj = Object.assign(new User, JSON.parse(localStorage.getItem(userEmail)));
var cvData = currentLoggedInUserObj.data;

var fname=cvData.fullName;
document.getElementsByClassName("name")[0].innerHTML = fname;

var job=cvData.jobTitle;
document.getElementsByClassName("tagline")[0].innerHTML = job;

var phoneNumber=cvData.phoneNumber;
document.getElementById("phone").innerHTML = phoneNumber;
document.getElementById("phone").setAttribute("href",`tel:${phoneNumber}`)
var email=cvData.email;
document.getElementById("mail").innerHTML = email;
document.getElementById("mail").setAttribute("href",`mailto:${email}`)

var city=cvData.city;
document.getElementById("add").textContent = city;

var summary=cvData.summary;
if(summary === ""){
    document.getElementsByClassName('summary-section')[0].style.display = 'none'
}
else{
    document.getElementById("summary").textContent=summary;
}

   // this for skills
var skills=document.getElementById("skills");
var levelskill=document.getElementById("levelskill");
var skillsarr= cvData.skills;
for(var i=0;i<skillsarr.length;i++){
    skills.innerHTML+=`<tr style="color:gray;"><td style="color:gray;padding:10px;width: 150px;font-size: 17px">${skillsarr[i].name}</td><td style=" color:#8095FF;padding:10px;width: 150px;font-size: 17px">${skillsarr[i].level}</td></tr><br>`;
    //skills.innerHTML+=`<div style="color:gray;padding:10px;display:block;width: 150px;font-size: 17px">${skillsarr[i].name}</div>`;
    //levelskill.innerHTML+=`<div style=" color:#8095FF;padding:10px;display:block;width: 150px;font-size: 17px">${skillsarr[i].level}</div>`;
}

// this for Interests
var Interests=document.getElementById("Interests");
var Interestsarr= cvData.interests;
for(var i=0;i<Interestsarr.length;i++){
    Interests.innerHTML+=`<b style="color:white;font-size: 17px">${Interestsarr[i].name}</b><br>`;
}

// this for education
var education=document.getElementsByClassName("item")[0];
var educationarr= cvData.educations;
if(educationarr.length == 0){
    document.getElementById('eeducation').style.display = 'none'
}
for(var i=0;i<educationarr.length;i++){

    education.innerHTML+=`<h5 style="margin-left:10px;color:#FFFFFF;font-size:20px;">${educationarr[i].educationDegree}</h5>`;
    education.innerHTML+=`<div style="margin-left:10px;color:rgba(255, 255, 255, 0.6);font-size:18px">${educationarr[i].schoolName}</div>`;
    if(educationarr[i].startDate === "" || educationarr[i].endDate === ""  )
    {
        var z = " ";   
    }
    else{
        var z = "-";
    }
    education.innerHTML+=`<i style="margin-left:10px;color:rgba(255, 255, 255, 0.6);font-size:16px">${educationarr[i].startDate} ${z} ${educationarr[i].endDate}</i><br><br>`;
}

// this for experiance
var Experiences=document.getElementById("Experiences");
var Experiencesarr= cvData.experances;
if(Experiencesarr.length == 0){
    document.getElementById('WExperiences').style.display = 'none'
}
for(var i=0;i<Experiencesarr.length;i++){
    Experiences.innerHTML+=`<h4 style="margin-left:10px;color:#000000;">${Experiencesarr[i].jobTitle}</h4>`;
    Experiences.innerHTML+=`<p style="margin-left:10px;color:#97AAC3;font-size: 20px"> ${Experiencesarr[i].companyName}</p>`;
    if(Experiencesarr[i].startDate === "" || Experiencesarr[i].endDate === "")
    {
        var x = " ";   
    }
    else{
        var x = "-";
    }
    Experiences.innerHTML+=`<p style="margin-left:400px;color:#97AAC3;margin-top:-40px;"> ${Experiencesarr[i].startDate} ${x} ${Experiencesarr[i].endDate}</p><br>`;
    Experiences.innerHTML+=`<p style="margin-left:10px;margin-right:25px;color:gray;">${Experiencesarr[i].description}</p><br>`;
}

// this for languages
var languages=document.getElementById("languages");
var languagesarr= cvData.languages;
for(var i=0;i<languagesarr.length;i++){
    
    languages.innerHTML+=`<h6 style="margin-left:10px;color:#FFFFFF;">${languagesarr[i].name}</h6>`;
}


document.getElementById("print").addEventListener("click", function(){ 
    document.getElementById('print').style.display = 'none'
    window.print(); 
}); 
