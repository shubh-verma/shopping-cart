let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "sdfewfd",
    name: "Casual Shirt",
    price: 45,
    desc: "loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-1.jpg",
  },

  {
    id: "ghgfewfd",
    name: "Office Shirt",
    price: 100,
    desc: "gsdlg kgf loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-2.jpg",
  },

  {
    id: "erefewfd",
    name: "T Shirt",
    price: 50,
    desc: "peo loremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-3.jpg",
  },

  {
    id: "qbfbfewfd",
    name: "Mens Suit",
    price: 300,
    desc: "dfdg oremvsdgg gweg gwg rgerg gerg htj herh jerhe hhergeh hetjt",
    img: "images/img-4.jpg",
  },
];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
        <div id = product-id-${id}class="item">
                <img width="220"src= ${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price}</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-lg"></i>
                            <div id = ${id} class="quantity">0</div>
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
