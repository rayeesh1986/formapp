import React, {Component} from 'react';
import axios from 'axios';
import Navbarform from './navbarfom';



const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
class Movieapi extends Component {
    state = { 
        posts:[]
    }
    
    async componentDidMount(){
        const {data:posts } = await axios.get(apiEndpoint);
        this.setState({posts});
    }
    render() {

        
        return ( 
            <React.Fragment>
                <Navbarform />
            </React.Fragment>
         );
    }
}
 
export default Movieapi;