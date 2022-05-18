  
import React, { Component } from 'react';
import MoviesList from '../../components/movies-list/MoviesList';
import ProgressCircle from '../../components/progress-circle/ProgressCircle';

import "./styles.scss"
import axios from 'axios';

class Home extends Component {
    
    state = {
        movies: [],
        genres: {},
        loaded: false
    }

    componentDidMount(){
        axios.get('https://wookie.codesubmit.io/movies', {
            headers: {
                Authorization: 'Bearer Wookie2019'
            }
        })
        .then(response => {
            let movies = response.data.movies
            //console.log(movies)
            let genres = {}
            movies.forEach(movie => {
                const movie_genres = movie.genres
                movie_genres.forEach(genre => {
                    if (genres[genre] != null)
                        genres[genre].push(movie)
                    else
                        genres[genre] = [movie]     
                })
            });
            this.setState({movies: movies, genres: genres, loaded: true});
        })
        .catch(err => {
            console.log(err);
            this.setState({loaded: true});
        });
    }
    
    render() { 
        const genres_list = Object.entries(this.state.genres).map((e) => ( { 'name': e[0], 'movies': e[1]  } ));
        //console.log(genres_list)
        const genres_components = genres_list.map(genre => {
            return(
                <MoviesList 
                    key={genre.name} 
                    genre_name={genre.name}
                    genre_movies={genre.movies}
                />
            )
        });

        if(this.state.loaded){
            if(genres_list.length > 0){
                return(            
                    <div className="home-div">
                        {genres_components}            
                    </div>
                );
            }
            else{
                return(            
                    <div className="home-div">
                        An Error Occured!            
                    </div>
                );                
            }
        }else{
            return(
                <ProgressCircle />
            );
        }

    }
}
 
export default Home;