import React, {Component} from 'react';
import axios from 'axios';
const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';

class Apidata extends Component {
    state = {
        posts:[],
    }

    async componentDidMount(){
        const promise = axios.get(apiEndpoint);
        const {data: posts} = await promise;
        this.setState({posts});
        
    }

    
    render() { 
        console.log(this.state.posts)
        
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">USERID</th>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.posts.map(postsdata =>
                                <tr key={postsdata.id}>
                                    <td>{postsdata.userId}</td>
                                    <td>{postsdata.id}</td>
                                    <td>{postsdata.title}</td>
                                    <td>{postsdata.body}</td>
                                </tr>
                            )}
                           
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
         );
    }
}
 
export default Apidata;