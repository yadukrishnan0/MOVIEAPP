// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContent from "./components/auth/Logincomponent";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import Userlayout from "./Layout/Userlayout";
import Adminhome from "./pages/Adminhome";
import Addmovie from "./pages/Addmovie";
import Adminlayout from "./Layout/Adminlayout";
import { MovieDataProvider } from "./Redux/Moviecontext";
import MoviewDetails from "./pages/MoviewDetails";
function App() {
  return (
    <BrowserRouter>
      <MovieDataProvider>
        <Routes>
          <Route path="/signup" element={<LoginContent />} />
          <Route path="/" element={<Userlayout />}>
            <Route path="/home" element={<Home />} />
            <Route path='/moviedetails/:movieid' element={<MoviewDetails/>}/>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="/" element={<Adminlayout />}>
            <Route path="/adminhome" element={<Adminhome />} />
            <Route path="/addmovie" element={<Addmovie />} />
          </Route>
        </Routes>
      </MovieDataProvider>
    </BrowserRouter>
  );
}

export default App;