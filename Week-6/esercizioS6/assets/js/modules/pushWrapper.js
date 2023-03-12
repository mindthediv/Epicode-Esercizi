// import { row1, row2, row3 } from "./components";
import { pushCoverx6 } from "./pushCover.js";
export { pushWrap };
let n_covWrap = 1;

let pushWrap = (el) => {
  let wrapper = document.createElement("div");
  wrapper.setAttribute("class", "covWrap d-flex w-100 justify-content-between");
  wrapper.setAttribute("id", `covWrap${n_covWrap + "-" + el.id}`);
  pushCoverx6(wrapper);
  el.appendChild(wrapper);
  n_covWrap += 1;
};
