// fetch the data
// https://kea-alt-del.dk/t7/api/categories
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then(res=>res.json())
  .then(gotData);


// loop through
function gotData(data) {
  //console.log(data);
  data.forEach(showCategory);
}
function showCategory(category) {
  console.log(category.category);
  // grab the template
  const myTemplate = document.querySelector("template").content;

  // clone the template
  const myClone = myTemplate.cloneNode(true);

  // change the content
  myClone.querySelector("a.category_link").href = "productlist.html?category="+category.category;
  myClone.querySelector("div").textContent = category.category;

  // grab the parent
  const daddy = document.querySelector("section");

  // append
  daddy.appendChild(myClone);
}


