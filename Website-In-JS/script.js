document.addEventListener("DOMContentLoaded", function () {
  const cardsContainerElem = document.getElementById("cardsContainer");

  async function getProductData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      return data.products;
    } catch (error) {
      console.log("Something went wrong while fetching the data");
    }
  }
  //Product Data
  let result = getProductData();

  result.then((data) => {
    data.forEach((item) => {
      const cardElem = document.createElement("div");
      cardElem.classList.add("card");
      cardElem.innerHTML = `
        <img src="${item.images[0]}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p class="card-content">${item.description}</p>
        <p class="price">${item.price}</p>
        <div>
            <button>Add to Cart</button>
        </div>
        `;
      cardsContainerElem.appendChild(cardElem);
    });
  });
});
