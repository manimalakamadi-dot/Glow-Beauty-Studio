
// Mobile Hamburger Menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    console.log("Menu clicked");
});


// WhatsApp Appointment Booking
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customer-name").value;
    const phone = document.getElementById("customer-phone").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("booking-date").value;

    const whatsappNumber = "91XXXXXXXXXX";

    const message =
        "Hello Glow Beauty Studio!\n\n" +
        "I want to book an appointment.\n\n" +
        "Name: " + name +
        "\nPhone: " + phone +
        "\nService: " + service +
        "\nDate: " + date;

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
});


// Gallery Image Popup

const galleryImages = document.querySelectorAll(".gallery-item img");

const imagePopup = document.getElementById("image-popup");

const popupImage = document.getElementById("popup-image");

const closePopup = document.getElementById("close-popup");


// Close popup when background is clicked

imagePopup.addEventListener("click", function(event) {

    if (event.target === imagePopup) {

        imagePopup.style.display = "none";

    }

});


// Open popup when image is clicked

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        imagePopup.style.display = "flex";

        popupImage.src = image.src;

    });

});

// Close popup when X is clicked

closePopup.addEventListener("click", function() {

    imagePopup.style.display = "none";

});


// Discount Offer Popup

const offerPopup = document.getElementById("offer-popup");
const closeOffer = document.getElementById("close-offer");

// Show popup after 3 seconds

setTimeout(function() {
    offerPopup.style.display = "flex";
}, 3000);

// Close popup

closeOffer.addEventListener("click", function() {
    offerPopup.style.display = "none";
});


// Close offer popup when background is clicked

offerPopup.addEventListener("click", function(event) {

    if (event.target === offerPopup) {

        offerPopup.style.display = "none";

    }

});



// Back to Top Button

const backToTop = document.getElementById("back-to-top");

// Show button when page is scrolled

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

// Scroll to top when button is clicked

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// Dark / Light Theme Toggle

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

});

// ANIMATED COUNTERS

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter) {

    const target = Number(counter.getAttribute("data-target"));

    let count = 0;

    const updateCounter = function() {

        const increment = Math.ceil(target / 100);

        if (count < target) {
            count += increment;
            counter.textContent = Math.min(count, target);

            setTimeout(updateCounter, 30);
        } else {
            counter.textContent = target + "+";
        }
    };

    updateCounter();

});

// CLOSE MOBILE MENU AFTER CLICKING A LINK

const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});

// PREVENT PAST BOOKING DATES

const bookingDateInput = document.getElementById("booking-date");

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const currentDate = `${year}-${month}-${day}`;

bookingDateInput.min = currentDate;