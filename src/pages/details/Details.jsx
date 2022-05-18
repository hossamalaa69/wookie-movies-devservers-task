  
import React, { useEffect, useState } from 'react';
import "./styles.scss"
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProgressCircle from '../../components/progress-circle/ProgressCircle';
import { ReactComponent as Star } from './star.svg';


function Details() {
    const { movie_id } = useParams();    
    

    const [movie, setMovie] = useState(null);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getMovieAxios()
    });

    const getMovieAxios = () => {
        axios.get(`https://wookie.codesubmit.io/movies/${movie_id}`, {
            headers: {
                Authorization: 'Bearer Wookie2019'
            }
        })
        .then(response => {
            //console.log(response.data)
            setMovie(response.data);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
            console.log("Eroooor")
            setLoaded(true);
            setMovie(null);
        });
    }

    if(loaded){
        console.log("Loaded")
        console.log(movie);

        if(movie !== null){
            const numberOfStars = Array(5).fill(0);
            const roundedRating = Math.round(movie.imdb_rating / 2);        
            return(         
                <div className='div-details'>
                    <div className='div-details-img'>
                        <img 
                            src={movie.poster} 
                            alt="Poster" 
                            className="detials-poster" 
                        />
                    </div>
                    <div className='div-details-text'>
                        <div className='title-rate-div'>
                            <div className='div-title'>
                                {movie.title} ({movie.imdb_rating})
                            </div>
                            <div>
                                {numberOfStars.map((star, index) => {
                                    return (
                                    <Star
                                        key={index}
                                        style={{
                                        fill: roundedRating > index ? '#F6CA2A' : '#DDDDDD',
                                        }}
                                        className="star-component"
                                    />
                                    );
                                })}
                            </div>
                        </div>
                        <br/>
                        <div className='div-year-len'>
                            {movie.released_on.substring(0, 4)} | {movie.length} | {movie.director}
                        </div>
                        <br/>
                        <div>
                            <strong>Cast: </strong> {movie.cast.join(", ")}
                        </div>
                        <br/>
                        <div className='div-overview'>
                            {movie.overview}
                        </div>
                    </div>
                </div>
            );    
        }
        else{
            return(
                <div>Not found!</div>
            );
        }
    }
    else {
        return(
            <ProgressCircle />
        )
    }
}
 
export default Details;


// backdrop: "https://wookie.codesubmit.io/static/backdrops/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg"
// cast: (3) ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart']
// classification: "13+"
// director: "Christopher Nolan"
// genres: (3) ['Action', 'Crime', 'Drama']
// id: "d6822b7b-48bb-4b78-ad5e-9ba04c517ec8"
// imdb_rating: 9
// length: "2h 32min"
// overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker."
// poster: "https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg"
// released_on: "2008-07-16T00:00:00"
// slug: "the-dark-knight-2008"
// title: "The Dark Knight"