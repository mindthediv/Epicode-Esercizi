import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NetNav from "./components/NetNav";
import NetJumbo from "./components/NetJumbo";
import NetCarousel from "./components/NetCarousel";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NetNav />
        <NetJumbo />
        <Routes>
          <Route
            path="/tv-shows"
            element={
              <div>
                <h2 className="caroH2">Tv Shows</h2>
                <NetCarousel searchParam="TV+show" int={10000} />
              </div>
            }
          />
        </Routes>
        <h2 className="caroH2">Harry Potter</h2>
        <NetCarousel searchParam="Harry+Potter" int={5000} />
        <h2 className="caroH2">Lord Of The Rings</h2>
        <NetCarousel searchParam="Lord+of+the+rings" int={10000} />
        <h2 className="caroH2">Star Wars</h2>
        <NetCarousel searchParam="Star+Wars" int={8000} />
      </div>
    </BrowserRouter>
  );
}

export default App;
