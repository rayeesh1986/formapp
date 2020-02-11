import React, { Component } from "react";
import axios from "axios";
import Navbarform from "./navbarfom";
import { Switch, Route, NavLink, Link, Redirect } from "react-router-dom";
import { routes, productRoutes } from "./routers";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

const AppRoutes = route => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => <route.component {...props} />}
    />
  );
};

class Movieapi extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }
  render() {
    return (
      <React.Fragment>
        <Navbarform />
        <Switch>
          {routes.map(route => (
            <AppRoutes key={route.path} {...route} />
          ))}
        </Switch>
      </React.Fragment>
    );
  }
}

export default Movieapi;
