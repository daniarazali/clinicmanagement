document.addEventListener('DOMContentLoaded', () => {
    // Handle Patient Registration
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;

        const response = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, age })
        });
        const data = await response.json();
        document.getElementById('registration-message').textContent = data.message;
    });

    // Handle Appointment Scheduling
    const appointmentForm = document.getElementById('appointment-form');
    appointmentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const date = document.getElementById('date').value;
        const service = document.getElementById('service').value;

        const response = await fetch('/schedule', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date, service })
        });
        const data = await response.json();
        document.getElementById('appointment-message').textContent = data.message;
    });

    // Handle Consultation
    document.getElementById('prescription-btn').addEventListener('click', async () => {
        const response = await fetch('/consult', { method: 'POST' });
        const data = await response.json();
        document.getElementById('consultation-message').textContent = data.message;
    });

    document.getElementById('close-btn').addEventListener('click', async () => {
        const response = await fetch('/close', { method: 'POST' });
        const data = await response.json();
        document.getElementById('consultation-message').textContent = data.message;
    });

    // Handle Payment
    document.getElementById('payment-btn').addEventListener('click', async () => {
        const response = await fetch('/payment', { method: 'POST' });
        const data = await response.json();
        document.getElementById('payment-message').textContent = data.message;
    });
});
