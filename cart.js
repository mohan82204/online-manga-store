// Load and display cart items on the cart section
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');
    cartList.innerHTML = "";  // Clear previous list
    let total = 0;

    // Display each item in the cart
    if (cart.length === 0) {
        cartList.innerHTML = "<li>Your cart is empty.</li>";
    } else {
        cart.forEach((item, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${item.bookName} - $${item.price}`;
            
            // Create and add the Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.style.marginLeft = '10px'; // Space between text and remove button
            removeButton.onclick = () => removeFromCart(index);  // Call remove function
            
            li.appendChild(removeButton);
            cartList.appendChild(li);

            total += item.price;
        });
    }

    // Update total price
    totalPriceElement.textContent = total.toFixed(2);
}

// Remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
    loadCart(); // Reload the cart to reflect changes
}

// Load the cart when the page is loaded
window.onload = loadCart;
