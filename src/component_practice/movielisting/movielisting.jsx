import React, {Component} from 'react';
import {getMovies} from '../../services/fakeMovieService';
import {getGenres} from '../../services/fakeGenreService';
import Pagination from './pagination';
import Paginate from './utils/paginate';
import Listgroup from './utils/listgroup';
import MovieTable from './movieTable';
import _ from 'lodash';



class Movielisting extends Component{

    state = {
        movies:[],
        genres:[],
        pageSize:3,
        currentPage:1,
        sortColumn: { path:'title', order:'asc'}
        
    }

    handleChange = (numData) => {
        this.setState({currentPage: numData})
       // console.log("handle on page change", numData);
    }

    handleDelete = (m) => {

        const movies = this.state.movies.filter(movie => movie._id !== m._id);
        this.setState({movies})
       // console.log("handle delete", movies);
    }

    handleLiked = (l) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(l);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
       
    }

    handleChangeClick = (genName) =>{
       // console.log("handle click change", genName);
        //const movies = this.state.movies.filter(m => m._id !== genName._id);
        //console.log(genName);
        this.setState({selectedItem: genName, currentPage:1});
    }

    componentDidMount(){
        const genreData = [{_id:"", name:"All Genres"}, ...getGenres()];
        this.setState({movies:getMovies(), genres:genreData});
    }

    onSorting= (sortColumn) =>{
        this.setState({ sortColumn})
    }
    
    render(){
        const {movies:allMovies, pageSize, currentPage, selectedItem, genres, sortColumn} = this.state;
        const filtered = selectedItem && selectedItem._id ? allMovies.filter(m => m.genre._id === selectedItem._id):allMovies;

        const sortFun = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

        const movies = Paginate(/* movies */ /* filtered */ sortFun, currentPage,  pageSize);
        //console.log(selectedItem)
       // const movieLen = allMovies.length;
    if(filtered === 0){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h6 className="pt-3 pb-3">{filtered.length} Movie is available in database</h6>
                    </div>
                </div>
            </div>
        )
    }else{
            return(
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <Listgroup 
                                    genresMov ={genres} 
                                    onChangeClick={this.handleChangeClick}
                                    onselectedItem={selectedItem}    
                                />
                            </div>
                            <div className="col-9">
                                <h6 className="pt-3 pb-3">{filtered.length} Movies is available in database</h6>
                                
                                <MovieTable 
                                    movies = {movies} 
                                    sortColumn={sortColumn}
                                    onDelete = {this.handleDelete}
                                    onLiked = {this.handleLiked}
                                    sortData = {this.onSorting}
                                   
                                />

                                <Pagination  
                                    countItem={filtered.length} 
                                    pageSize={pageSize}
                                    onPageChange={this.handleChange}
                                    currentPage={currentPage}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
    }

}

export default Movielisting;