document.querySelector('.contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
    });

    const alertBox = document.getElementById('form-alert');
    if (response.ok) {
        form.reset();
        showFormAlert('Thank you for reaching out! We\'ll get back to you soon. 🍽️', 'success');
    } else {
        showFormAlert('Sorry, there was an error. Please try again or call us directly.', 'error');
    }
});

function showFormAlert(message, type) {
    const alertBox = document.getElementById('form-alert');
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    alertBox.className = 'form-alert ' + type;
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 5000);
}

// Add modern restaurant-style alert CSS
(function() {
    const style = document.createElement('style');
    style.textContent = `
    .form-alert {
        position: relative;
        margin: 1.5rem 0 1rem 0;
        padding: 1.2rem 2rem;
        border-radius: 1rem;
        font-size: 1.1rem;
        font-family: 'Lato', sans-serif;
        font-weight: 600;
        box-shadow: 0 4px 16px rgba(0,0,0,0.07);
        transition: opacity 0.3s;
        z-index: 10;
        text-align: center;
    }
    .form-alert.success {
        background: linear-gradient(90deg, #e0ffe6 0%, #b7f5c5 100%);
        color: #22643a;
        border: 1.5px solid #7be495;
    }
    .form-alert.error {
        background: linear-gradient(90deg, #fff0f0 0%, #ffd6d6 100%);
        color: #a12b2b;
        border: 1.5px solid #ffb3b3;
    }
    `;
    document.head.appendChild(style);
})();