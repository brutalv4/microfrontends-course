import faker from "faker";

console.log("Cart");

const DEV_SELECTOR = "#dev-cart";

const mount = (el) => {
  const cartText = `<h4>You have ${faker.random.number()} items in your cart</h4>`;
  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector(DEV_SELECTOR);

  if (el) {
    mount(el);
  }
}

export { mount };
