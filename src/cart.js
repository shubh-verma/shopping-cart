let label = document.getElementById("label");
let shoppingCart = document.getElementById("shooping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  //console.log(basket.map((x) => x.item).reduce((x, y) => x + y, 0));
};

calculation();

let generateCartItems = () => {
  if (basket.length !== 0) {
  } else {
    shoppingCart.innerHTML = ``;
    label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href = "index.html">
            <button calss="HomeBtn"> Back to Home</button>
        </a>
        `;
  }
};
