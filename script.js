// Show alert on button click
function showAlert() {
    alert("Welcome to SmartTrip Solutions!");
}

// Contact Form Submission (AJAX)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("contact.php", {  // Change to Flask URL if using Python backend
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("formResponse").innerHTML = `<p>${data}</p>`;
    })
    .catch(error => console.error("Error:", error));
});
