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
    const apiPic = await response.json();
    svgArray.forEach((el) => el.remove());

    console.log(apiPic);

    cardArray.forEach((el) => {
      let newImg = document.createElement("img");

      let photoArray = apiPic.photos[i];
      console.log(photoArray);
      newImg.setAttribute("src", photoArray.src.medium);
      i += 1;

      let cardChild1 = el.querySelector(".card-body");
      el.insertBefore(newImg, cardChild1);
    });
  } catch (error) {
    console.log(error);
  }
};

btnLoadImg.addEventListener("click", () => {
  getImgs("abstract");
});
btnLoad2.addEventListener("click", () => {
  getImgs("monochrome");
});
