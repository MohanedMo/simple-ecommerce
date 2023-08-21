import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./navbar";
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
          <Route
            path="/"
            element={
              <AllProducts/>
            }
          >
          </Route>
            <Route path="/:id" element={<ProductDetails/>}/>
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
