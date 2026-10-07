const EventEmitter = require("events");

const shoppingApp = new EventEmitter();

// User Login Event
shoppingApp.on("userLoggedIn", (user) => {
    console.log(`Email Service: Welcome email sent to ${user}.`);
});

// Item Added to Cart Event
shoppingApp.on("itemAddedToCart", (item) => {
    console.log(`Inventory Service: Checking availability of ${item}.`);
});

// Order Placed Event
shoppingApp.on("orderPlaced", (orderId) => {
    console.log(`Billing Service: Payment processing started for order ${orderId}.`);
    console.log(`Inventory Service: Stock updated for order ${orderId}.`);
    console.log(`Email Service: Order confirmation sent for order ${orderId}.`);
    console.log(`Notification Service: Order notification sent for order ${orderId}.`);
});

// Payment Failed Event
shoppingApp.on("paymentFailed", (orderId) => {
    console.log(`Notification Service: Payment failure notification sent for order ${orderId}.`);
    console.log(`Email Service: Payment failure email sent for order ${orderId}.`);
});

// Order Shipped Event
shoppingApp.on("orderShipped", (orderId) => {
    console.log(`Notification Service: Shipping notification sent for order ${orderId}.`);
    console.log(`Email Service: Shipping confirmation sent for order ${orderId}.`);
});

// Triggering Events
console.log("Online Shopping Application\n");

shoppingApp.emit("userLoggedIn", "Mohd Arqam");
shoppingApp.emit("itemAddedToCart", "Wireless Headphones");
shoppingApp.emit("orderPlaced", "ORD101");
shoppingApp.emit("paymentFailed", "ORD102");
shoppingApp.emit("orderShipped", "ORD101");