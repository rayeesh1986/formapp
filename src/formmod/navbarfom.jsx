import React, { Component } from "react";
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import { routes, productRoutes } from "./routers";
// import Home from './home';
// import Product from './product';
// import Contact from './contact';
// import Notfound from './notfound';
// import Productdetail from './productdetail';
// import Productlisting from './productlisting';

const Navbarform = () => {
  //console.log(RouteWithSubRoutes)

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">
                logo
              </Link>
              <div
                className="navbar-collapse"
                style={{ display: "flex" }}
                id="navbarNav"
              >
                <ul className="navbar-nav" style={{ flexDirection: "row" }}>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/products">
                      Products
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbarform;
