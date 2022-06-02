import faker from "faker";

console.log("Cart");

const cartText = `<h4>You have ${faker.random.number()} items in your cart</h4>`;

document.querySelector("#dev-cart").innerHTML = cartText;
