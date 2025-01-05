// Sticky header function
window.onscroll = function() { 
    stickyHeader();
    scrollFunction();
};

const header = document.getElementById("header");
const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// Scroll-to-top button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Smooth scroll for anchor links
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Content reveal on scroll
const features = document.querySelectorAll('.feature');

function revealOnScroll() {
    features.forEach(feature => {
        const featureTop = feature.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (featureTop < windowHeight - 100) {
            feature.classList.add('visible');
        } else {
            feature.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Button hover effect (Dynamic)
const ctaButton = document.getElementById("cta-btn");

ctaButton.addEventListener("mouseenter", function() {
    ctaButton.style.backgroundColor = "hsl(192, 100%, 9%)";
    ctaButton.style.color = "white";
});

ctaButton.addEventListener("mouseleave", function() {
    ctaButton.style.backgroundColor = "hsl(322, 100%, 66%)";
    ctaButton.style.color = "white";
});
// Initialize Firebase Auth
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// Sign-Up Function
function signUpUser() {
    const auth = getAuth();
    const email = document.getElementById('email').value; // Add an email input in your HTML
    const password = document.getElementById('password').value; // Add a password input in your HTML

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up successfully
            const user = userCredential.user;
            alert("Sign-Up Successful!");
            console.log("User created:", user);
        })
        .catch((error) => {
            // Handle Errors
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Error: ${errorMessage}`);
        });
}

// Attach to the button
document.querySelector('.sign-up-btn').addEventListener('click', signUpUser);

