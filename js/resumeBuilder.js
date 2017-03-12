var bio = {
    "name": "Mayank Chauhan",
    "role": "Web Developer",
    "contacts": {
        "email": "mayank.chauhan15@gmail.com",
        "mobile": "9015138234",
        "github": "mak-chan",
        "twitter": "makchan15",
        "location": "Noida, India"
    },
    "biopic": "images/pp.jpg",
    "welcome": "Aspiring Full-Stack Web Developer. Currently studying Information Technology at JSSATEN.",
    "skills": ["Python", "C", "HTML", "CSS", "Javascript", "PHP"]
};

var education = {
    "schools": [{
            "name": "JSSATE",
            "location": "Noida",
            "degree": "B.Tech.",
            "major": "Information Technology",
            "dates": "2016-2020"
        },
        {
            "name": "VPS",
            "location": "Noida",
            "degree": "Grade XII",
            "major": "PCM with Computer Science",
            "dates": "2016"
        }
    ],
    "online-courses": [{
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://www.udacity.com/courses/ud804"
        },
        {
            "title": "Front End Development Certification",
            "school": "Free Code Camp",
            "dates": "2017",
            "url": "https://www.freecodecamp.com/mak-chan"
        }
    ]
};

var projects = [{
    "title": "Personal Website on Github Pages",
    "description": "<a href='https://www.mak-chan.github.io'>Link</a> \n Made using HTML, CSS, Javascript and Bootscript.",
    "date": "2017"
}];


bio.display = function() {
    var name = HTMLheaderName.replace("%data%", "Mayank Chauhan");
    var role = HTMLheaderRole.replace("%data%", "Web Developer");
    var picture = HTMLbioPic.replace("%data%", bio.biopic);
    var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);

    $("#header").prepend(role).prepend(name).append(picture + welcome);

    var email = HTMLemail.replace("%data%", bio.contacts.email);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#footerContacts").append(email + mobile + github + twitter);

    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
};

education.display = function() {

    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        var name = HTMLschoolName.replace("%data%", education.schools[i].name);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var city = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var major = HTMLschoolMajor.replace("%data%", education.schools[i].major);
        $(".education-entry").append(name + degree + dates + city + major);
    }

    $(".education-entry").append(HTMLonlineClasses);

    for (var i = 0; i < education["online-courses"].length; i++) {
        var title = HTMLonlineTitle.replace("%data%", education["online-courses"][i].title);
        var school = HTMLonlineSchool.replace("%data%", education["online-courses"][i].school);
        var dates_ = HTMLonlineDates.replace("%data%", education["online-courses"][i].dates);
        var url = HTMLonlineURL.replace("%data%", education["online-courses"][i].url);
        $(".education-entry").append(title + school + dates_ + url);
    }
};


projects.display = function() {

    $("#projects").append(HTMLprojectStart);

    for (var i = 0; i < projects.length; i++) {
        var title = HTMLprojectTitle.replace("%data%", projects[i].title);
        var time = HTMLprojectDates.replace("%data%", projects[i].date);
        var des = HTMLprojectDescription.replace("%data%", projects[i].description);
        $(".project-entry").append(title + time + des);
    }
};

$("#button").append(internationalizeButton);
$("#mapDiv").append(googleMap);

projects.display();
education.display();
bio.display();


function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}




$(".navbar-collapse ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -70
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});