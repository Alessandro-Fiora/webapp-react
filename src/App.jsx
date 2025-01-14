import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import MovieIndexPage from "./pages/movies/MovieIndexPage";
import MovieShowPage from "./pages/movies/MovieShowPage";
import NotFoundPage from "./pages/movies/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          {/* STRUCTURE PAGES */}
          <Route index Component={HomePage}></Route>

          {/* MOVIE PAGES */}
          <Route path="/movies">
            <Route index Component={MovieIndexPage}></Route>
            <Route path=":id" Component={MovieShowPage}></Route>
          </Route>

          {/* ERROR PAGES */}
          <Route path="*" Component={NotFoundPage}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
