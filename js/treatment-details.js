const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const product = products.find(({ id }) => id == productId);
const productTreatments = product.treatments;
const itemContentTreatmentDetails = document.querySelector('.item-content-treatment-details');
let flag;





itemContentTreatmentDetails.innerHTML = `
        <div class="container">
          <div class="item-content--img">
            <img src="${product.image}"
              alt="${product.name}">
          </div>
          <div class="h2-wrapper">
            <h2>${product.name}</h2>
          </div>
          <ul class="treatments-list"></ul>
          <a href="https://timma.no/salong/alena-beauty" class="btn btn-treatment">Bestill time</a>
        </div>
  `;

const treatmentList = document.querySelector(".treatments-list");

productTreatments.forEach(item => {
  treatmentList.innerHTML += `
  <li class="treatment-name" data-id=${item.dataId}>${item.treatmentName} <span class="open-icons" data-id=${item.dataId}><i class="fas fa-chevron-circle-down"></i></span></li>
  <li><p class="treatment-content--description" data-id=${item.dataId}>${item.treatmentDescription}</p></li>
  `;
});

const treatmentNameButtons = document.querySelectorAll(".treatment-name");
const treatementDescriptions = document.querySelectorAll(".treatment-content--description");
const opens = document.querySelectorAll(".open-icons");

for (let treatmentNameButton of treatmentNameButtons) {
  treatmentNameButton.addEventListener('click', () => {
    treatmentNameButton.classList.toggle("treatment-name-clicked");
    for (let singleDesc of treatementDescriptions) {

      if (treatmentNameButton.getAttribute("data-id") === singleDesc.getAttribute("data-id")) {
        flag = !flag;
        singleDesc.classList.toggle("animate-more-description");

        for (let open of opens) {
          if (flag && open.getAttribute("data-id") === singleDesc.getAttribute("data-id")) {
            open.innerHTML = `<i class="fas fa-chevron-circle-up"></i>`
          }
          else {
            open.innerHTML = `<i class="fas fa-chevron-circle-down"></i>`
          }
        }
      };
    }
  });
}








