const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const product = products.find(({ id }) => id == productId);

const productTreatments = product.treatments;
const singleTreatment = productTreatments.map(el => el.treatment);




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
          <ul class="treatments-list">
         ${singleTreatment}
          </ul>
          <a href="https://timma.no/salong/alena-beauty" class="btn btn-treatment">Bestill time</a>
        </div>
  `;


const treatmentNameButtons = document.querySelectorAll(".treatment-name");
let flag;

for (let treatmentNameButton of treatmentNameButtons) {
  treatmentNameButton.addEventListener('click', () => {
    flag = !flag;
    console.log(flag);
    const treatementDescriptions = document.querySelectorAll(".treatment-content--description");
    for (let singleDesc of treatementDescriptions) {
      if (singleDesc.getAttribute("data-id") === (treatmentNameButton.getAttribute("data-id"))) {
        singleDesc.classList.toggle("animate-more-description");
      };
    }
  });
}







