import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss"

class MovieItem extends Component {

    handleHover(e, backdrop) {
        //e.target.src = backdrop;
        return;
    }
    handleUnhover(e, poster) {
        //e.target.src = poster;
        return;
    }

    render(){
        return (
            <Link to={`/details/${this.props.movie.slug}`} >
                <img 
                    src={this.props.movie.poster} 
                    alt="Poster" 
                    className="movie-poster" 
                    onMouseEnter={(e) =>this.handleHover(e, this.props.movie.backdrop)}
                    onMouseLeave={(e) =>this.handleUnhover(e, this.props.movie.poster)}
                    />
            </Link>
        );
    }
};

export default MovieItem;