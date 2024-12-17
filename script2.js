window.onload = function() {  
    var storedUsername = getCookie('username');  
    var loginToken = getCookie('login'); 
  
    if (!storedUsername || !loginToken) {  
       
        window.location.href = 'login.html'; 
    } else {  
        alert("welcome back"+storedUsername);
        console.log('Welcome back, ' + storedUsername);  
    }  
};  
  
function getCookie(name) {  
    var cookies = document.cookie.split(";");  
    for (var i = 0; i < cookies.length; i++) {  
        var cookie = cookies[i].trim();  
        if (cookie.startsWith(name + "=")) {  
            return cookie.substring(name.length + 1);  
        }  
    }  
    return null;  
}



let cart = [];  
  
function addToCart608(courseName, price) {  
    const quantity = document.getElementById(`${courseName}-quantity`).value;  
    if (quantity > 0) {  
        cart.push({ name: courseName, price: price, quantity: quantity });  
        displayCart608();  
         
    } else {  
        alert('error');  
    }  
}  
  
// Function to display the cart items on the page  
function displayCart608() {  
    // Get the element where cart items will be displayed  
    const cartItemsElement = document.getElementById('cart-items');  
  
    // Clear the current content of the cart items element  
    cartItemsElement.innerHTML = '';  
  
    // Iterate over each item in the cart  
    cart.forEach(item => {  
        // Create a new div element to represent a cart item  
        const cartItemElement = document.createElement('div');  
  
        // Add the 'cart-item' class to the cart item element  
        cartItemElement.classList.add('cart-item');  
  
        // Set the inner HTML of the cart item element with the item details  
        cartItemElement.innerHTML = `  
            <h3>${item.name}</h3>  
            <p>unit price: ${item.price}</p>  
            <p>quantity: ${item.quantity}</p>  
            <p>Price: ${item.price * item.quantity}</p>  
            <button id="remove" onclick="removeFromCart608('${item.name}')">Remove</button>  
        `;  
  
        // Append the cart item element to the cart items element  
        cartItemsElement.appendChild(cartItemElement);  
    });  
}  
  
// Function to remove an item from the cart  
function removeFromCart608(courseName) {  
    // Filter the cart to remove the item with the specified name  
    cart = cart.filter(item => item.name !== courseName);  
  
    // Update the display of the cart  
    displayCart608();  
  
    // Recalculate the total price after removing the item  
    calculateTotalPrice608();  
}  
  
// Function to clear the cart  
function clearCart608() {  
    // Empty the cart array  
    cart = [];  
  
    // Update the display of the cart  
    displayCart608();  
  
    // Set the total price to 0  
    document.getElementById('totalPrice').textContent = '0';  
}  
  
// Function to calculate the total price of the cart  
function calculateTotalPrice608() {  
    // Use the reduce function to calculate the total price of all items in the cart  
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);  
  
    // Set the total price on the page, formatted to 2 decimal places  
    document.getElementById('totalPrice').textContent = total.toFixed(2);  
}  
  
// Add an event listener to the 'calculate-total-price-button' to calculate the total price  
document.getElementById('calculate-total-price-button').addEventListener('click', calculateTotalPrice608);  
  

