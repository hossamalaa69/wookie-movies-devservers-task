import React, { Component } from 'react';
import "./styles.scss"
import MovieItem from "../movie-item/MovieItem"

class MoviesList extends Component {

    render(){
        //console.log(this.props.genre_name)
        //console.log(this.props.genre_movies)

        const movies_components = this.props.genre_movies.map(movie => {
            return(
                <MovieItem 
                    key={movie.id} 
                    movie={movie}
                />
            )
        });
        return (
            <div className='genre-div'>
                <h3 className='genre-header'>{this.props.genre_name}</h3>
                <div className='movies-scroller'>
                    {movies_components}
                </div>
            </div>
        );
    }

};

export default MoviesList;