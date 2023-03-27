import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ButtonComponent class="btn" btnText="Click Me" />
    <ImageComponent
      src="https://placekitten.com/300"
      alt="a kitty kutie katy kat pic"
    />
  </>
);
