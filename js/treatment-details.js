const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
console.log(productId);

const product = products.find(({ id }) => id == productId);
console.log(product);

const itemContentTreatmentDetails = document.querySelector('.item-content-treatment-details');

itemContentTreatmentDetails.innerHTML = `
      <div class="container">
        <div class="h2-wrapper">
          <h2>${product.name}</h2>
        </div>
        <div class="item-content--img">
          <img src="${product.image}"
            alt="${product.name}">
        </div>
        ${product.treatments}
        <p class="item-content--description treatment-content--description">${product.description}</p>
        <a href="https://timma.no/salong/alena-beauty" class="btn btn-treatment">Bestill time</a>
      </div>
`;

