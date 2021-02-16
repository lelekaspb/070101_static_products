const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
console.log(category);

// https://kea-alt-del.dk/t7/api/products
const url = "https://kea-alt-del.dk/t7/api/products?category=" + category;

fetch(url)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  //console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  //console.log(product);
  //grab the template
  const myTemplate = document.querySelector("#smallProductTemplate").content;

  //clone it
  const myClone = myTemplate.cloneNode(true);

  //change content
  myClone.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  myClone.querySelector("h4").textContent = product.productdisplayname;
  myClone.querySelector(".price span").textContent = product.price;
  myClone.querySelector("article > a").href = `product.html?id=${product.id}`;

  if (product.discount) {
    console.log("not null, so on sale");
    myClone.querySelector("article").classList.add("on_sale");
    myClone.querySelector(".sale_price").textContent = `${Math.floor(
      product.price - product.price * (product.discount / 100)
    )} dkk`;
  }

  if (product.soldout == true) {
    myClone.querySelector("article").classList.add("sold_out");
  }

  //grab parent
  const daddy = document.querySelector("main");

  //append
  daddy.appendChild(myClone);
}

document.querySelector("a.last_crumb").textContent = category;
