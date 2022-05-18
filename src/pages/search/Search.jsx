  
import React, { useEffect, useState } from 'react';
import SearchList from '../../components/search-list/SearchList';
import ProgressCircle from '../../components/progress-circle/ProgressCircle';
import "./styles.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Search() {

    const { query } = useParams();    

    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getMoviesSearch()
    });
    
    const getMoviesSearch = () => {
        axios.get(`https://wookie.codesubmit.io/movies?q=${query.toLowerCase().trim()}`, {
            headers: {
                Authorization: 'Bearer Wookie2019'
            }
        })
        .then(response => {
            const movies = response.data.movies;
            //console.log(movies);
            setMovies(movies);
            setLoaded(true);
        })
        .catch(err => {
            console.log(err);
            setLoaded(true);
        });
    }

    if(loaded){
        if(movies.length > 0){
            return(         
                <div>
                    <SearchList 
                        query = { query }
                        movies={ movies }
                    />    
                </div>
            );
        }else{
            return(         
                <div>
                    No results for {query}    
                </div>
            );
        }

    }
    else {
        return(
            <ProgressCircle />
        )
    }
}
 
export default Search;
