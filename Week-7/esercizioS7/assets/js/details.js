const detailRow = document.querySelector("#productsDetails .row");
const prods_URL = "https://striveschool-api.herokuapp.com/api/product/";
let prodId = new URLSearchParams(window.location.search).get("prodId");

let showDetail = async () => {
  let response = await fetch(prods_URL + prodId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmYwZmY4MWI0MjAwMTM5YjI3ZTAiLCJpYXQiOjE2NzkwNDQzNjcsImV4cCI6MTY4MDI1Mzk2N30.u7oWDcUld_6d0axdhYLCq2dNaa_0wpxUh2tXFsHXdbs",
    },
  });
  let prodData = await response.json();
  let prodDetail = document.createElement("div");
  prodDetail.classList.add("col-12");
  prodDetail.innerHTML = `<div class="card mb-3" style="max-width: 540px;"><div class="row g-0"><div class="col-md-4"><img src="${prodData.imageUrl}" class="img-fluid rounded-start" alt="..."></div><div class="col-md-8"><div class="card-body"><h5 class="card-title">${prodData.name}</h5><p class="card-text">${prodData.description}</p><p class="card-text"><small class="text-muted">${prodData.price}$</small></p></div></div></div></div>`;
  detailRow.appendChild(prodDetail);
};
showDetail();
