import faker from "faker";

console.log("Products");

let products = "<ol>";

for (let i = 0; i < 3; i++) {
  const name = faker.commerce.productName();
  products += `<li>${name}</li>`;
}

products += "</ol>";

document.querySelector("#dev-products").innerHTML = products;
