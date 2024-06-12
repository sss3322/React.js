import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Address from "./Address";
import Contact from "./Contact";
import Features from "./Features";
import Home from "./Home";
import MapCarousel from "./MapCarousel";
import React from 'react'
import Navrouter from "./Navrouter";
import Product from "./Axios/Home";
import Cart from "./Axios/Cart";

function Router2() {
  return (
    <div>
        <BrowserRouter>
        <Navrouter/>
        <Product/>
        <Routes>
          <Route path='/home' element={<><Home/><MapCarousel/></>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/address' element={<Address/>}></Route>
          <Route path='/features' element={<Features/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router2
