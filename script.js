function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

var typed = new Typed(".typing-text", {
    strings: ["Data Analyst", "ML Enthusiast", "Frontend Developer", "JAVA Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
