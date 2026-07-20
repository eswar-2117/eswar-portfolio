// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Header shadow while scrolling
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Project card animation
const cards = document.querySelectorAll(".project");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
    });

});

// Resume button (replace with your resume path)
const resumeBtn = document.querySelector(".btn");

resumeBtn.addEventListener("click", function(e){

    e.preventDefault();

    window.open("assets/resume/Eswar_Krishna_Resume.pdf","_blank");

});