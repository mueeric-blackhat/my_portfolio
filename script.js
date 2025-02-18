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

    if (toggleButton) {
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
    } else {
        console.error("Theme toggle button not found. Ensure there's an element with ID 'theme-toggle' in your HTML.");
    }
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


// Show project details
function showDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details) {
        details.classList.remove('hidden'); // Remove hidden class to display details
    }
}

// Hide project details
function hideDetails(projectId) {
    const details = document.getElementById(projectId);
    if (details) {
        details.classList.add('hidden'); // Add hidden class to hide details
    }
}



// Get the form and the confirmation message elements
const form = document.getElementById('contactForm');
const confirmationMessage = document.getElementById('confirmationMessage');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data (name, email, message)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';

    // Simple validation
    if (!name) {
        nameError.textContent = 'Please enter your name';
        isValid = false;
    }
    if (!email) {
        emailError.textContent = 'Please enter your email';
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email';
        isValid = false;
    }
    if (!message) {
        messageError.textContent = 'Please enter your message';
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        console.log('Form submitted', { name, email, message });

        // Display confirmation message
        confirmationMessage.style.display = 'block';

        // Reset form fields
        form.reset();
    }
});

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


