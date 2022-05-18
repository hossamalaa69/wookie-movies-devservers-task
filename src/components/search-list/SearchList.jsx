import React, { Component } from 'react';
import "./styles.scss"
import MovieItem from "../movie-item/MovieItem"

class SearchList extends Component {

    render(){
        const movies_components = this.props.movies.map(movie => {
            return(
                <MovieItem 
                    key={movie.id} 
                    movie={movie}
                />
            )
        });
        return (
            <div className='search-list-div'>
                <div className='search-header'>
                    Search results for: <strong>{this.props.query}</strong> 
                </div>
                <div className='movies-search-list'>
                    {movies_components}
                </div>
            </div>
        );
    }

};

export default SearchList;