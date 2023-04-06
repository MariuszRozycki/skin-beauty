const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const product = products.find(({ id }) => id == productId);
const productTreatments = product.treatments;
const itemContentTreatmentDetails = document.querySelector('.item-content-treatment-details');
let flag = true;

itemContentTreatmentDetails.innerHTML = `
        <div class="container">
          <div class="item-content--img">
            <img src="${product.image}"
              alt="${product.name}">
          </div>
          <div class="h2-wrapper">
            <h2>${product.name}:</h2>
          </div>
          <ul class="treatments-list"></ul>
          <a href="https://timma.no/salong/alena-beauty" class="btn btn-treatment">Bestill time</a>
        </div>
  `;

const treatmentList = document.querySelector(".treatments-list");

productTreatments.forEach(item => {
  treatmentList.innerHTML += `
  <li class="treatment-name" data-id=${item.dataId}>${item.treatmentName} <span class="open-icons" data-id=${item.dataId}><i class="fas fa-chevron-circle-down"></i></span></li>
  <li>
    <p class="treatment-content--description" data-id=${item.dataId}>${item.treatmentDescription}
    <span class="close-btn" data-id=${item.dataId}><i class="fas fa-chevron-circle-up"></i> HIDE DESCRIPTION</span>
    </p>
  </li>
  `;
});

const treatmentNameButtons = document.querySelectorAll(".treatment-name");
const treatementDescriptions = document.querySelectorAll(".treatment-content--description");
const opens = document.querySelectorAll(".open-icons");
const closeBtns = document.querySelectorAll(".close-btn");

for (const treatmentNameButton of treatmentNameButtons) {
  treatmentNameButton.addEventListener('click', () => {
    treatmentNameButton.classList.toggle("treatment-name-clicked");
    for (const singleDesc of treatementDescriptions) {
      if (treatmentNameButton.getAttribute("data-id") === singleDesc.getAttribute("data-id")) {
        singleDesc.classList.toggle("animate-more-description");
        for (const closeBtn of closeBtns) {
          if (closeBtn.getAttribute("data-id") === singleDesc.getAttribute("data-id") && treatmentNameButton.getAttribute("data-id")) {
            closeBtn.onclick = () => {
              singleDesc.classList.remove("animate-more-description");
              treatmentNameButton.classList.remove("treatment-name-clicked");
            }
          }
        }
      };
    }
  });
}