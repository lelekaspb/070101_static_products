const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const category = urlParams.get("category");
console.log(id);

const url = "https://kea-alt-del.dk/t7/api/products/"+id;
// fetch the data
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

// populate the page

function showProduct(product) {
  console.log(product);  
  document.querySelector("ol a.category").textContent = product.category;
  document.querySelector("ol a.category").href = "productlist.html?category="+ product.category;
  document.querySelector(".brand").textContent = product.brandname;
  document.querySelector("article .articletype").textContent =
    product.articletype;
  document.querySelector(".breadcrumbs .product_name").textContent =
    product.productdisplayname;
  document.querySelector("article .product_name").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.product_image"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.product_image").alt = product.productdisplayname;
  document.querySelector("article .price").textContent = product.price;
  if (product.discount == null) {
    console.log("equals to null");
    document.querySelector("article").classList.remove("on_sale");
  } else {
    console.log("not null, so on sale");
    document.querySelector("article").classList.add("on_sale");
    document.querySelector(".sale_price").textContent = `${Math.floor(
      product.price - product.price * (product.discount / 100)
    )} dkk`;
  }
  if (product.soldout == true) {
    document.querySelector("section").classList.add("sold_out");
  }
}

