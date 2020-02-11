import React, {Component} from 'react';
import {getMovies} from '../services/fakeMovieService';


class MovieList extends Component {
    state = { 
        movies: getMovies(),
    }

    onDelete = (id) => {
       let movies =  this.state.movies.filter(m_id => m_id._id !== id._id);
       this.setState({movies});
    } 
    render() {
        let len = this.state.movies.length;
        if( len === 0){
            return (
                <React.Fragment>
                    <div className="col">
                        <h6 className="m-0  pt-3 pb-3">There is {this.state.movies.length} movie in the Database.</h6>
                    </div>
                </React.Fragment>
            );
        }
        return (
            <React.Fragment>
               <div className="col">
                    <h6 className="m-0  pt-3 pb-3">{this.state.movies.length} movies list in the Database.</h6>
                </div>
                    <div className="col">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Generation</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.movies.map(movie =>
                                <tr key={movie._id}>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.numberInStock}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><button className="btn btn-danger" onClick={()=>this.onDelete(movie)}>Delete</button></td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default MovieList;