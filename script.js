//================ MOBILE MENU =================//

let menuBtn = document.querySelector(".menu-btn");
let navbar = document.querySelector(".navbar");


menuBtn.onclick = () => {

    navbar.classList.toggle("active");

    menuBtn.innerHTML = navbar.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

};



//================ CLOSE MENU ON CLICK =================//

document.querySelectorAll(".navbar a").forEach(link => {

    link.onclick = () => {

        navbar.classList.remove("active");

        menuBtn.innerHTML =
        '<i class="fa-solid fa-bars"></i>';

    }

});




//================ TYPING EFFECT =================//

const text = [
    "AI Developer",
    "Data Scientist",
    "MERN Stack Developer",
    "Machine Learning Engineer"
];


let index = 0;
let charIndex = 0;

let typingElement = document.querySelector(".typing");


function typeEffect(){

    if(charIndex < text[index].length){

        typingElement.textContent += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index = 0;

        }

        setTimeout(typeEffect,500);

    }

}


typeEffect();




//================ SCROLL ACTIVE NAVBAR =================//


let sections = document.querySelectorAll("section");

let navLinks = document.querySelectorAll(".navbar a");


window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                '.navbar a[href*="' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

};




//================ SCROLL REVEAL ANIMATION =================//


const revealElements =
document.querySelectorAll(
".skill-box, .service-box, .project-card, .certificate-box, .timeline-content"
);



window.addEventListener("scroll",()=>{


    revealElements.forEach(element=>{


        let position =
        element.getBoundingClientRect().top;



        if(position < window.innerHeight - 100){


            element.style.opacity="1";

            element.style.transform="translateY(0)";


        }


    });


});




//================ BACK TO TOP =================//

let topBtn = document.querySelector(".top-btn");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){

        topBtn.style.display="flex";

    }

    else{

        topBtn.style.display="none";

    }


});




//================ CONTACT FORM =================//

let form =
document.querySelector(".contact-form");


form.addEventListener("submit",(e)=>{


    e.preventDefault();


    alert(
        "Thank you! Your message has been received."
    );


    form.reset();


});
// EmailJS Contact Form

(function(){

    emailjs.init("h0kVyW5voLIC9YuTk");

})();


document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();


    emailjs.sendForm(
        "service_nz436ka",
        "template_6n0nydi",
        this
    )
    .then(function(){

        alert("Message sent successfully!");

        document
        .getElementById("contact-form")
        .reset();


    }, function(error){

        alert("Message failed!");

        console.log(error);

    });


});
