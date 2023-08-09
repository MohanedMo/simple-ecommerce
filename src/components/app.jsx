import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import AllProducts from "./allproducts";
import ErrorPage from "./error-page";
import ProductDetails from "./productdetails";
import Cart from "./cart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route
            path="/products"
            element={
              <AllProducts/>
            }
          >
          </Route>
            <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route
            path="/cart"
            element={
              <Cart/>
  }
          />
  <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </React.Fragment>
    );
  }
}
export default App;
