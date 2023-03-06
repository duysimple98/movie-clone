import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Contents from "./components/Contents/Contents";
import Menus from "./components/Menus/Menus";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import { useSelector } from "react-redux";
import SearchMovies from "./components/SearchMovies/SearchMovies";
import Home from "./components/Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Pages/Search";
import Footer from "./components/Footer/Footer";

function App() {
  const { MovieDetail } = useSelector((state) => state.infoMovies);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
