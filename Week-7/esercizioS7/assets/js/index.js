// PROD. TEMPLATE:
// {
//     "_id": "5d318e1a8541744830bef139", //SERVER GENERATED
//     "name": "app test 1",  //REQUIRED
//     "description": "somthing longer", //REQUIRED
//     "brand": "nokia", //REQUIRED
//     "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80", //REQUIRED
//     "price": 100, //REQUIRED
//     "userId": "admin", //SERVER GENERATED
//     "createdAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "updatedAt": "2019-07-19T09:32:10.535Z", //SERVER GENERATED
//     "__v": 0 //SERVER GENERATED
//     }

// EMBED AUTHORIZATION :
// fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
// headers: {
// "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmYwZmY4MWI0MjAwMTM5YjI3ZTAiLCJpYXQiOjE2NzkwNDQzNjcsImV4cCI6MTY4MDI1Mzk2N30.u7oWDcUld_6d0axdhYLCq2dNaa_0wpxUh2tXFsHXdbs"
// }
// })

const prodRow = document.querySelector("#productsGrid .row");
const prods_URL = "https://striveschool-api.herokuapp.com/api/product/";

const hideSpinner = () => {
  let spinnerEl = document.querySelector(".spinner-border");
  spinnerEl.classList.add("d-none");
};

const getProducts = async function () {
  try {
    let response = await fetch(prods_URL, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmYwZmY4MWI0MjAwMTM5YjI3ZTAiLCJpYXQiOjE2NzkwNDQzNjcsImV4cCI6MTY4MDI1Mzk2N30.u7oWDcUld_6d0axdhYLCq2dNaa_0wpxUh2tXFsHXdbs",
      },
    });
    console.log(response);
    if (response.ok) {
      let products = await response.json();
      hideSpinner();
      products.forEach((el) => {
        createCard(el.imageUrl, el.name, el._id, el.price);
      });
    } else {
    }
  } catch (error) {
    console.log(error);
  }
};
getProducts();

let createCard = (prodImg, prodName, prodId, prodPrice) => {
  let newCol = document.createElement("div");
  newCol.setAttribute("class", "col-12 col-md-4 col-xl-3");
  newCol.innerHTML = `<div class="card border-0" style="width: 70%; height: 500px"><img src="${prodImg}" class="card-img-top" alt="..."><div class="card-body"><div class="mb-2"><h5 class="card-title">${prodName}</h5><span class="badge bg-primary rounded-pill" style="font-size: 26px">${prodPrice}$</span></div><a href="./details.html?prodId=${prodId}" id="btnMore" class="btn btn-success me-2 border border-dark border-2">More</a><a href="./backoffice.html?prodId=${prodId}" id="btnModify" class="btn  me-2 border border-dark border-2">Modify</a></div></div>`;
  prodRow.appendChild(newCol);
};
