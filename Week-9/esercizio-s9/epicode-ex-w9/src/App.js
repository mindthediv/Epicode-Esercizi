import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NetNav from "./components/NetNav";
import NetJumbo from "./components/NetJumbo";
import NetCarousel from "./components/NetCarousel";

function App() {
  return (
    <div className="App">
      <NetNav />
      <NetJumbo />
      <h2 className="caroH2">Harry Potter</h2>
      <NetCarousel searchParam="Harry+Potter" int={5000} />
      <h2 className="caroH2">Lord Of The Rings</h2>
      <NetCarousel searchParam="Lord+of+the+rings" int={10000} />
      <h2 className="caroH2">Star Wars</h2>
      <NetCarousel searchParam="Star+Wars" int={8000} />
    </div>
  );
}

export default App;
