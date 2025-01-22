// List of books with updated details from index.html
const books = [
    { id: 'book1', title: 'One Piece', price: 350, author: 'Eiichiro Oda' },
    { id: 'book2', title: 'Naruto Shippuden', price: 300, author: 'Masashi Kishimoto' },
    { id: 'book3', title: 'Dragon Ball', price: 400, author: 'Akira Toriyama' },
    { id: 'book4', title: 'Black Clover', price: 350, author: 'Yuki Tabata' },
    { id: 'book5', title: 'My Hero Academia', price: 250, author: 'Kohei Horikoshi' },
    { id: 'book6', title: 'Battle Through the Heavens', price: 400, author: 'Tian Can Tu Dou' },
    { id: 'book7', title: 'Eminence in Shadow', price: 350, author: 'Daisuke Aizawa' },
    { id: 'book8', title: 'Solo Leveling', price: 350, author: 'Chugong' },
    { id: 'book9', title: 'Kaiju No. 8', price: 250, author: 'Naoya Matsumoto' },
    { id: 'book10', title: 'Jujutsu Kaisen', price: 300, author: 'Gege Akutami' },
    { id: 'book11', title: 'Chainsaw Man', price: 350, author: 'Tatsuki Fujimoto' },
    { id: 'book12', title: 'Tokyo Ghoul', price: 300, author: 'Sui Ishida' }
];

// Cart Array
let cart = [];

// Function to add a book to the cart
function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    if (book) {
        cart.push(book);
        alert(`${book.title} has been added to your cart!`);
        saveCartToLocalStorage(); // Update the cart in localStorage
    }
}


// Function to remove a book from the cart
function removeFromCart(bookId) {
    cart = cart.filter(book => book.id !== bookId);
    updateCart();
}

// Function to update the cart display on the cart page
function updateCart() {
    const cartItemsList = document.getElementById('cart-items-list');
    cartItemsList.innerHTML = ''; // Clear the current cart items

    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p>Your cart is empty</p>';
    } else {
        cart.forEach(book => {
            const listItem = document.createElement('li');
            listItem.classList.add('cart-item');
            
            listItem.innerHTML = `
                <img src="images/${book.id}.jpg" alt="${book.title} Cover">
                <div class="cart-details">
                    <h3>${book.title}</h3>
                    <p>Author: ${book.author}</p>
                    <p>Price: ${book.price} RS</p>
                    <button class="remove-btn" onclick="removeFromCart('${book.id}')">Remove</button>
                </div>
            `;

            cartItemsList.appendChild(listItem);
        });
    }
}

// Store cart data to localStorage so it persists across pages
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Load cart data from localStorage
function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
}

// Event listener to handle page load and initialize cart
window.addEventListener('DOMContentLoaded', (event) => {
    loadCartFromLocalStorage();
});

// Save cart to localStorage whenever the cart is updated
window.addEventListener('beforeunload', saveCartToLocalStorage);
