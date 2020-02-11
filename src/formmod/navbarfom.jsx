import React from "react";
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import { routes } from "./routers";
// import Home from './home';
// import Product from './product';
// import Contact from './contact';
// import Notfound from './notfound';
// import Productdetail from './productdetail';
// import Productlisting from './productlisting';

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
);

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
                <ul className="navbar-nav" style={{ "flex-direction": "row" }}>
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

            {/* <ul>
                        {routes.map(route =>
                        <li></li>
                    )}
                    </ul> */}
          </div>
        </div>
      </div>

      <Switch>
        {routes.map(route => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}

        {/*  {routes.map(r =>
                    <Route key={r.id} exact={r.exact}  path={r.path} component={r.component} /> 
                )} */}
        {/*  <Redirect to={"/not-found"} /> */}

        {/*  <Route exact path={"/"} component={Home}/>
                <Route exact path={"/products"} component={Product} />
                <Route path={"/contact"} component={Contact} />
                <Route path={"/products/detail"} component={Productdetail} />
                <Route path={"/products/listing"} component={Productlisting} />
                <Route path={"/not-found"} component={Notfound} /> */}
        <Redirect to={"/not-found"} />
      </Switch>
    </React.Fragment>
  );
};

export default Navbarform;
