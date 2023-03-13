// prettier-ignore
import {row1, row2, row3, btnLft, covWrap_r1, covWrap_r2, covWrap_r3} from './modules/components.js';
import { pushCover, pushCover18x3, pushCoverx6 } from "./modules/pushCover.js";
import { pushWrap } from "./modules/pushWrapper.js";
pushCover18x3(covWrap_r1, covWrap_r2, covWrap_r3);

covWrap_r1.childNodes.forEach((el) => console.log(el));

let infScroll = () => {
  if (covWrap_r1.scrollLeft > 480) {
    let covSlice = covWrap_r1.childNodes.splice(0, 3);
  }
};
