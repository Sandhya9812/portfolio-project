document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const status = document.getElementById("status");

    try {
        let response = await fetch("https://formspree.io/f/mwplkgpe", {
            method: "POST",
            body: new FormData(form),
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            status.innerHTML = "✅ Message sent successfully!";
            form.reset();
        } else {
            status.innerHTML = "❌ Error sending message. Try again!";
        }
    } catch (error) {
        status.innerHTML = "⚠️ Network error. Please try later.";
    }
});

