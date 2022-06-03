import faker from "faker";

console.log("Products");

const DEV_SELECTOR = "#dev-products";

const mount = (el) => {
  let products = "<ol>";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<li>${name}</li>`;
  }

  products += "</ol>";

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector(DEV_SELECTOR);

  if (el) {
    mount(el);
  }
}

export { mount };
