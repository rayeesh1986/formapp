import React from 'react';

const Navbar = (props) =>{
    return(
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <span>Navbar</span>
                
                <span className="badge badge-primary ml-2">{props.LengthData}</span>
            </nav>
            {props.children}
        </React.Fragment>

    )
}

export default Navbar;


