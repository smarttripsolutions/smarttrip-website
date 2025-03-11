document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.getElementById("search-form");
    const resultsContainer = document.getElementById("results");
    const contactForm = document.getElementById("contact-form");

    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const destination = document.getElementById("destination").value.trim();
        const checkIn = document.getElementById("check-in").value;
        const checkOut = document.getElementById("check-out").value;

        if (!destination || !checkIn || !checkOut) {
            showAlert("Please fill all fields.", "error");
            return;
        }

        const sampleData = [
            { name: "Hotel Paradise", price: "$100/night", rating: "4.5", image: "hotel1.jpg" },
            { name: "Sunset Resort", price: "$120/night", rating: "4.7", image: "hotel2.jpg" },
            { name: "Ocean View Inn", price: "$90/night", rating: "4.2", image: "hotel3.jpg" }
        ];

        displayResults(sampleData);
    });

    function displayResults(data) {
        resultsContainer.innerHTML = "";
        data.forEach(hotel => {
            const hotelElement = document.createElement("div");
            hotelElement.classList.add("hotel-result");
            hotelElement.innerHTML = `
                <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image" />
                <h3>${hotel.name}</h3>
                <p>Price: ${hotel.price}</p>
                <p>Rating: ${hotel.rating} ⭐</p>
                <button class="book-now">Book Now</button>
            `;
            resultsContainer.appendChild(hotelElement);
        });
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            showAlert("Please fill all fields.", "error");
            return;
        }

        showAlert("Thank you for reaching out! We will get back to you soon.", "success");
        contactForm.reset();
    });

    function showAlert(message, type) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${type}`;
        alertBox.innerText = message;
        document.body.appendChild(alertBox);

        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }

    window.addEventListener("resize", () => {
        document.body.style.backgroundColor = window.innerWidth < 768 ? "#f0f0f0" : "#ffffff";
    });

    // Responsive Navigation Menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
});
