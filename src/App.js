import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Menu from "./component/Menu";
import Home from "./component/Home";
import Create from "./component/Create"
import Update from "./component/Update";
import Pnf from "./component/Pnf";

function App(props) {
  return (
    <BrowserRouter>
            <Menu/>
            <ToastContainer theme={'colored'} position={'top-right'} />
          <Routes>
            <Route path={`/`} element={<Home/>} />
            <Route path={`/create`} element={<Create/>} />
            <Route path={`/Update/:id`} element={<Update/>} />
            <Route path={`/*`} element={<Pnf/>} />
          </Routes>   
               
    </BrowserRouter>
  )
}

export default App