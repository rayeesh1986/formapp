import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from "react-router-dom";
import MovieList from '../movielist/index';
import About from '../about/index';
import Loginform from '../login';
import Notfound from '../notfound';

const Navbar = (props) => {
    return (
        <Router>
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Logo</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Log in</Link>
                        </li>
                       {/*  <li className="nav-item">
                            <Link className="nav-link" to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact us</Link>
                        </li> */}
                        </ul>
                    </div>
                </nav>
            <Switch>
                <Route exact path={"/"} component={MovieList}/>
                <Route path={"/about"} component={About} />
                <Route path={"/login"} component={Loginform} />
                <Route path={"/not-found"} component={Notfound} />
                <Redirect to={"/not-found"} />
            </Switch>
            </React.Fragment>
        </Router>
     );
}
 
export default Navbar;