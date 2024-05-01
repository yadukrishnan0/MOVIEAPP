import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContent from "./components/auth/Logincomponent";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import { BiHome } from "react-icons/bi";
import Userlayout from "./Layout/Userlayout";
import Adminhome from "./pages/Adminhome";
import Addmovie from "./pages/Addmovie";
import Adminlayout from "./Layout/Adminlayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<LoginContent />} />
  
        <Route path="/" element={<Userlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>


        <Route path="/" element={<Adminlayout />}>
        {/* <Route path="/adminhome" element={<Adminhome />} /> */}
        <Route path="/addmovie" element={<Addmovie />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
export default App;
