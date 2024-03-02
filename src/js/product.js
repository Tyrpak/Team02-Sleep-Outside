import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(newProduct) {
  let cartItems = getLocalStorage("so-cart");

  if (!cartItems) {
    cartItems = [];
  } else if (!Array.isArray(cartItems)) {
    cartItems = [cartItems];
  }
  
  cartItems.push(newProduct);
  
  setLocalStorage("so-cart", cartItems);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document.getElementById("addToCart")
document.addEventListener("click", addToCartHandler);
