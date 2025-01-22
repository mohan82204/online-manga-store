document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect user information
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;

    // Create a summary message or process order
    alert(`Order placed successfully!\n\nName: ${name}\nNumber: ${number}\nAddress: ${address}\nEmail: ${email}`);

    // Clear form (optional)
    this.reset();
});
