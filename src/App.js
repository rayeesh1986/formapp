import React from "react";
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import { routes } from "./formmod/routers";

import Navbar from "./navbar/index";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const AppRoutes = route => {
  console.log("route", route);
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => <route.component {...props} />}
    />
  );
};

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Navbar />
      </div>

      <Switch>
        {routes.map(route => (
          <AppRoutes key={route.path} {...route} />
        ))}
        <Redirect to={"/not-found"} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
