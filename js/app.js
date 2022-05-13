const categoryEl = document.querySelector(".category");
// const categoryDetailEl = document.querySelector(".category-detail");

// RENDER category
function renderCategories() {
  categories.forEach((category) => {
    categoryEl.innerHTML += `
            <div class="col-3 p-2 m-2 bg-white card-menu">
                <div class="row">
                    <div class="col-5">
                        <img src="${category.strCategoryThumb}" alt="${category.strCategory}" width="80px">
                    </div>
                    <div class="col-lg-7 mx-auto d-none offset-1 d-md-block offset-1 text-left">
                        <a href="menuCategoryDetail.html"><h6 class="mt-4">${category.strCategory}</h6></a>
                    </div>
                </div>
            </div>
        `;
  });
}
renderCategories();

// Render Categories Detail -> Choose Pasta
// function renderCategoriesDetail() {
//   categoriesDetail.forEach((catDetail) => {
//     categoryDetailEl.innerHTML += `
//             <div class="col-6 mb-5">
//                 <div class="row">
//                     <div class="col-3">
//                         <img src="${catDetail.img}" alt="${catDetail.strNamaMenu}" width="150">
//                     </div>
//                     <div class="col-9">
//                         <h5 class="text-uppercase">${catDetail.strNamaMenu}</h5>
//                         <p class="mt-4" style="font-family: 'David Libre', serif;">${catDetail.strCap}</p>
//                         <p class="text-uppercase details text-end mt-3"><a href="details.html" class="text-decoration-none text-dark">details</a></p>
//                 </div>
//                 </div>
//             </div>
//         `;
//   });
// }
// renderCategoriesDetail();
