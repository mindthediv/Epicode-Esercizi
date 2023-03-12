export { pushCover, pushCoverx6, pushCover18x3 };

let n_cover = 0;
let pushCover = (el) => {
  // col
  let movCover = document.createElement("div");
  movCover.setAttribute("class", "col-12 col-md-4 col-xl-2 p-1");
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

let pushCoverx6 = (el) => {
  for (let i = 0; i < 6; i++) {
    pushCover(el);
  }
};

let pushCover18x3 = (el1, el2, el3) => {
  for (let i = 0; i < 18; i++) {
    pushCover(el1);
  }
  for (let i = 0; i < 18; i++) {
    pushCover(el2);
  }
  for (let i = 0; i < 18; i++) {
    pushCover(el3);
  }
};
