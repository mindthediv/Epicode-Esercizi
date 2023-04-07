import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import MyNav from "./components/MyNav";
import FavList from "./components/FavList";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/favourites" element={<FavList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
