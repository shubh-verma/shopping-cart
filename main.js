let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "sdfewfd",
    name: "Casual Shirt",
    price: 45,
    decs: "loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-1.jpg",
  },

  {
    id: "ghgfewfd",
    name: "Office Shirt",
    price: 100,
    decs: "loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-2.jpg",
  },

  {
    id: "erefewfd",
    name: "T Shirt",
    price: 50,
    decs: "loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-3.jpg",
  },

  {
    id: "qbfbfewfd",
    name: "Mens Suit",
    price: 300,
    decs: "loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-4.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      return `
        <div class="item">
                <img width="220"src="images/img-1.jpg" alt="">
                <div class="details">
                    <h3>Casual Shirt</h3>
                    <p>leorem sdgmnfgl fdfd fefefef fdfegrg hthgh hhrghhrt ghrhtrhgrthrthrt 
                    </p>
                    <div class="price-quantity">
                        <h2>$ 45</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-lg"></i>
                            <div class="quantity">0</div>
                            <i class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .join(""));
};
generateShop();
