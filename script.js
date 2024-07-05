function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}

var typed = new Typed(".typing-text", {
    strings: ["Frontend Developer", "Competitive Programmer", "CPP Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});