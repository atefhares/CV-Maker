var cvData = JSON.parse(localStorage.getItem('cvData'));

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
document.getElementById("summary").textContent=summary;

   // this for skills
var skills=document.getElementById("skills");
var levelskill=document.getElementById("levelskill");
var skillsarr= cvData.skills;
for(var i=0;i<skillsarr.length;i++){
    
    skills.innerHTML+=`<div style="color:gray;padding:10px;display:block;width: 150px;font-size: 17px">${skillsarr[i].name}</div>`;
    levelskill.innerHTML+=`<div style=" color:#FDA246;padding:10px;display:block;width: 150px;font-size: 17px">${skillsarr[i].level}</div>`;
}

// this for Interests
var Interests=document.getElementById("Interests");
var Interestsarr= cvData.interests;
for(var i=0;i<Interestsarr.length;i++){
    Interests.innerHTML+=`<b style="margin-left:10px;color:white;font-size: 17px">${Interestsarr[i].name}</b><br>`;
}

// this for education
var education=document.getElementsByClassName("item")[0];
var degreearr= cvData.educations;
for(var i=0;i<degreearr.length;i++){

    education.innerHTML+=`<h5 style="margin-left:10px;color:#FFFFFF;font-size:20px;">${degreearr[i].educationDegree}</h5>`;
    education.innerHTML+=`<div style="margin-left:10px;color:rgba(255, 255, 255, 0.6);font-size:18px">${degreearr[i].schoolName}</div>`;
    education.innerHTML+=`<i style="margin-left:10px;color:rgba(255, 255, 255, 0.6);font-size:16px">${degreearr[i].startDate} - ${degreearr[i].endDate}</i><br><br>`;
}

// this for experiance
var Experiences=document.getElementById("Experiences");
var Experiencesarr= cvData.experances;
for(var i=0;i<Experiencesarr.length;i++){
    Experiences.innerHTML+=`<h4 style="margin-left:10px;color:#000000;">${Experiencesarr[i].jobTitle}</h4>`;
    Experiences.innerHTML+=`<p style="margin-left:30px;color:#97AAC3;font-size: 20px"> ${Experiencesarr[i].companyName}</p>`;
    Experiences.innerHTML+=`<p style="margin-left:400px;color:#97AAC3;margin-top:-40px;"> ${Experiencesarr[i].startDate} - ${Experiencesarr[i].endDate}</p><br>`;
    Experiences.innerHTML+=`<p style="margin-left:50px;margin-right:25px;color:gray;">${Experiencesarr[i].description}</p><br>`;
}

// this for languages
var languages=document.getElementById("languages");
var languagesarr= cvData.languages;
for(var i=0;i<languagesarr.length;i++){
    
    languages.innerHTML+=`<h6 style="margin-left:10px;color:#FFFFFF;">${languagesarr[i]}</h6>`;
}


document.getElementById("print").addEventListener("click", function(){ 
    document.getElementById('print').style.visibility = 'hidden'
    window.print(); 
}); 
