import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MovieIndexPage from "./pages/movies/MovieIndexPage";
import MovieShowPage from "./pages/movies/MovieShowPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          {/* STRUCTURE PAGES */}
          <Route index Component={HomePage}></Route>
          <Route path="/about" Component={AboutPage}></Route>

          {/* MOVIE PAGES */}
          <Route path="/movies">
            <Route index Component={MovieIndexPage}></Route>
            <Route path=":id" Component={MovieShowPage}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
