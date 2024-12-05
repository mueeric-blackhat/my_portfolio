document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Toggle night mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        
        // Update button text and icon
        if (body.classList.contains("dark-mode")) {
            toggleButton.textContent = "☀️ Light Mode";
        } else {
            toggleButton.textContent = "🌙 Night Mode";
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.getElementById("name");
    const nameText = "<MUE ERIC MUASYA";
    let i = 0;

    function typeEffect() {
        if (i < nameText.length) {
            nameElement.textContent += nameText.charAt(i);
            i++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        } else {
            nameElement.style.borderRight = "none"; // Remove cursor after typing
        }
    }

    nameElement.textContent = ""; // Clear content initially
    typeEffect();
});

// Get the form and the confirmation message elements
const form = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data (name, email, message)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (this is optional if you want)
    if (name && email && message) {
        // Simulate form submission (e.g., send the data to the server)
        console.log('Form submitted', { name, email, message });

        // Display confirmation message
        confirmationMessage.style.display = 'block';

        // Reset form fields (optional)
        form.reset();
    // } else {
    //     alert('Please fill out all fields');
    // }
});

