import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";




class Product extends Component {
    state = {  }
    
    
    
    
    render() { 
/* 
        const RouteWithSubRoutes = (route) => (
            <Route path={route.path} render={(props) => (
                <route.component {...props} routes={route.routes}/>
            )}/>
        ) */

       


        
        return ( 
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Product Component</h1>
                            <Link to="/products/detail">Product details</Link>
                            <Link to="/products/listing">Product Listing</Link>
                           {/* 
                            {routes.map(route =>
                                <RouteWithSubRoutes key={route.path} />
                            )} */}
                   
                            {/* <table className="table">
                                <thead>
                                    <tr>
                                    <th scope="col">List</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.posts.map(p =>
                                        <tr key={p.id}>
                                        <th scope="row">{p.id}</th>
                                        <td>{p.title}</td>
                                        <td align="right">
                                            <button className="btn btn-info mr-2">Update</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                        </tr>
                                    )}
                                </tbody> 
                            </table>*/}
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Product;