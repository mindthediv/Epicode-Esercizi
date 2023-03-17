/////////////////////////////////
// TOTALMENTE DA RIAPPROCCIARE //
/////////////////////////////////
const myApiKey = "xUCVsn0uVXXtttTKtNLU83kSyPtmXkvllfGGIogt7YBpVFRzuijcf2mN";
// { inserisci {authorization: '$myApiKey' } negli header della query
const btnLoadImg = document.getElementById("btnLoad");
const btnLoad2 = document.getElementById("btnload2");
const svgArray = document.querySelectorAll(".card-img-top");
const cardArray = document.querySelectorAll(".col-md-4 .card");
let i = 0;

const getImgs = async function (category) {
  const albumURL = `https://api.pexels.com/v1/search?query=${category}`;
  try {
    const response = await fetch(albumURL, {
      Method: "GET",
      headers: {
        Authorization:
          "xUCVsn0uVXXtttTKtNLU83kSyPtmXkvllfGGIogt7YBpVFRzuijcf2mN",
      },
    });
    const fetchData = await response.json();

    svgArray.forEach((el) => el.remove());

    cardArray.forEach((el) => {
      el.innerHTML =
        '<img src=""' +
        '<div class="card-body"><h5 class="card-title">Lorem Ipsum</h5><p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p><div class="d-flex justify-content-between align-items-center"><div class="btn-group"><button type="button" class="btn btn-sm btn-outline-secondary">View</button><button type="button" class="btn btn-sm btn-outline-secondary">Edit</button></div><small class="text-muted">9 mins</small></div></div>';
    });
  } catch (error) {
    console.log(error);
  }
};

btnLoadImg.addEventListener("click", () => {
  getImgs("abstract");
  i = 0;
});
btnLoad2.addEventListener("click", () => {
  getImgs("monochrome");
  i = 0;
});
