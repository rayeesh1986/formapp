import React, {Component} from 'react';
import Liked from './liked';

class MovieTable extends Component {
    renderPath = path =>{
        const sortColumn = {...this.props.sortColumn};
        if(sortColumn.path === path){
            if(sortColumn.order === 'asc'){
               
                 sortColumn.order = 'desc';

            }else{
                 sortColumn.order = 'asc';
            }
        }
        else{
            sortColumn.path = path;
            sortColumn.order = 'asc'; 
        }

        this.props.sortData(sortColumn);
    }
    render() { 
        const {movies, onDelete, onLiked} = this.props;
        return (
            <React.Fragment>
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={()=>this.renderPath('title')} scope="col">Title</th>
                        <th onClick={()=>this.renderPath('genre.name')} scope="col">Genre</th>
                        <th onClick={()=>this.renderPath('numberInStock')} scope="col">Stock</th>
                        <th onClick={()=>this.renderPath('dailyRentalRate')} scope="col">Rate</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => 
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td> <Liked liked={movie.liked} onClick={() => onLiked(movie)}/></td>
                            <td><button className="btn btn-danger" onClick={() => onDelete(movie)}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            </React.Fragment>
         );
    }
}
 

export default MovieTable;