export { row1, row2, row3, n_cover, pushCover, pushCover6x3 };

const row1 = document.getElementById("row1");
const row2 = document.getElementById("row2");
const row3 = document.getElementById("row3");
let n_cover = 1;

let pushCover = (el) => {
  // col
  let movCover = document.createElement("div");
  movCover.setAttribute("class", "col-6 col-md-4 col-xl-2");
  movCover.setAttribute("id", `cover-${n_cover}`);

  //   :hover
  let movHover = document.createElement("div");
  movHover.setAttribute("class", "vid_hover d-none");
  // :icons
  let playHover = document.createElement("i");
  playHover.setAttribute("class", "bi bi-play-circle-fill");
  let infoHover = document.createElement("i");
  infoHover.setAttribute("class", "bi bi-info-circle-fill");
  movHover.appendChild(playHover);
  movHover.appendChild(infoHover);
  // :p
  let pHover = document.createElement("p");
  pHover.innerText = "Short text plot or episode preview ";
  movHover.appendChild(pHover);
  // IMG
  let cov = document.createElement("img");
  cov.setAttribute("class", "w-100");
  cov.setAttribute("src", `https://placekitten.com/${900 + n_cover}`);
  cov.setAttribute("alt", "cover pic");
  cov.style = "aspect-ratio: 16/9";
  //appendChild
  movCover.appendChild(movHover);
  movCover.appendChild(cov);
  el.appendChild(movCover);
  n_cover += 1;
};

let pushCover6x3 = () => {
  for (let i = 0; i < 6; i++) {
    pushCover(row1);
  }
  for (let i = 0; i < 6; i++) {
    pushCover(row2);
  }
  for (let i = 0; i < 6; i++) {
    pushCover(row3);
  }
};
