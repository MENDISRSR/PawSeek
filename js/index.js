//Nav Bar
const navbar = document.querySelector("nav");
window.addEventListener("scroll", ()=>
    {
        navbar.classList.toggle("sticky", window.scrollY > 0);
    }
);

//Menu Toggle
const menu = document.querySelector(".menu");
const toggleMenu = () => menu.classList.toggle("active"); //The menu either shows or hides, depending on its current state.

document.querySelector(".menu-btn").addEventListener("click", toggleMenu); //When the menu button is clicked, the toggleMenu function is called.
document.querySelector(".close-btn").addEventListener("click", toggleMenu); //When the close button is clicked, the toggleMenu function is called.

//When the user clicks outside the menu, the menu closes.
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !event.target.matches(".menu-btn")) {
        menu.classList.remove("active");
    }
});

//
document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
});


// // LENIS FOR SMOOTH SCROLLING
// const lenis = new Lenis();

// // Use only GSAP's ticker for smooth integration
// gsap.ticker.add((time) => {
//     lenis.raf(time * 1000);
//     ScrollTrigger.update();
// });
// gsap.ticker.lagSmoothing(0);

// // Remove the custom raf loop:
// // function raf(time) {
// //     lenis.raf(time);
// //     requestAnimationFrame(raf);
// // }
// // requestAnimationFrame(raf);

// // Keep ScrollTrigger update event if needed
// lenis.on("scroll", ScrollTrigger.update);

// SCROLL REVEAL
const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 200,
    esaing: "ease-in-out",
});
gsap.to("nav", {
    opacity: 1,
    duration: 2,
});
sr.reveal(".hero-headlines h1");
sr.reveal(".hero-headlines p", { delay: "500" });
sr.reveal(".hero-headlines-buttons", { delay: "1000" });
sr.reveal(".hero-image", { 
    delay: "1500",
    opacity: "0",
    duration: "1",
    stagger: "0.5", 
});

sr.reveal(".requirements-headlines h1");
sr.reveal(".requirements-headlines p", { delay: "500" });
sr.reveal(".requirements img", { delay: "500"});
sr.reveal(".r-item-container", { delay: "1000" });

sr.reveal(".pets-headlines");
sr.reveal(".pets-headlines h3" );

sr.reveal(".aboutUs-headlines ");
sr.reveal(".aboutUs img");

sr.reveal(".testimonials h1", { delay: "500" });
sr.reveal(".testimonials h6");
sr.reveal(".testimony-item", { delay: "1000" });
sr.reveal(".footer-band");
sr.reveal(".footer-links", { delay: "500", origin: "left" }); 
sr.reveal(".footer-contact-info", { delay: "500", origin: "left" }); 
sr.reveal(".copyright", {delay: "600"});

// Befor add pet details