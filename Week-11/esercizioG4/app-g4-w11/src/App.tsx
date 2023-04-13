import React from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="appHeader">
          <MyNav />
        </header>

        <main className="appMain">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<ArticlePage />} />
          </Routes>
        </main>

        <footer className="appFooter"></footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
