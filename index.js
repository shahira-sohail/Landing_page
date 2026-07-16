const Hamburger = document.getElementById("Hamburger");
const navLinks = document.getElementById("nav-links");

Hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link){
    link.addEventListener("click" , function(e) {
        e.preventDefault();

        navLinks.classList.remove("active");

        const scrollSmooth = document.querySelector(this.getAttribute("href"));
        scrollSmooth.scrollIntoView({behavior: "smooth"});
    });
});
