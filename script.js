// Sticky header function
window.onscroll = function () {
    handleStickyHeader();
    handleScrollToTopButton();
    revealOnScroll();
};

// Sticky header functionality
const header = document.getElementById("header");
const stickyOffset = header ? header.offsetTop : 0;

function handleStickyHeader() {
    if (header) {
        if (window.pageYOffset > stickyOffset) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
}

// Scroll-to-top button functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

function handleScrollToTopButton() {
    if (scrollToTopBtn) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }
}

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Smooth scroll for anchor links
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Content reveal on scroll functionality
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

// Button hover effect (Dynamic)
const ctaButton = document.getElementById("cta-btn");

if (ctaButton) {
    ctaButton.addEventListener("mouseenter", function () {
        ctaButton.style.backgroundColor = "hsl(192, 100%, 9%)";
        ctaButton.style.color = "white";
    });

    ctaButton.addEventListener("mouseleave", function () {
        ctaButton.style.backgroundColor = "hsl(322, 100%, 66%)";
        ctaButton.style.color = "white";
    });
}

// Firebase Auth Integration
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

function signUpUser() {
    const auth = getAuth();
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (emailInput && passwordInput) {
        const email = emailInput.value;
        const password = passwordInput.value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User signed up successfully
                alert("Sign-Up Successful!");
                console.log("User created:", userCredential.user);
                // Optionally redirect to another page
                window.location.href = "chatroom.html";
            })
            .catch((error) => {
                // Handle errors
                const errorMessage = error.message;
                alert(`Error: ${errorMessage}`);
            });
    } else {
        alert("Please ensure email and password fields are present.");
    }
}

// Attach sign-up functionality to the button
const signUpBtn = document.querySelector('.sign-up-btn');
if (signUpBtn) {
    signUpBtn.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission if button is inside a form
        signUpUser();
    });
}
