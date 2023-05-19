const treatmentsContainer = document.querySelector('.wrapper-items--treatments');

function renderAllProducts() {
  for (let product of products) {

    treatmentsContainer.innerHTML += `
  <div class="item-content item-content-treatment">
    <div class="grid-container">
      <div class="item-content--img">
        <img src="${product.image}"
          alt="${product.name}">
      </div>
      <div class="h2-wrapper">
        <h2>${product.name}</h2>
        <p>${product.excerpt}</p>
      </div>
      <a href="../treatment-details/index.html?id=${product.id}" class="btn btn-treatment">Les mer</a>
    </div>
  </div>
  `;
  }
}

renderAllProducts();