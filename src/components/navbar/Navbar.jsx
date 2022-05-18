import React, { useState } from 'react';
import "./styles.scss"
import LogoImage from "./logo2.png"
import { ReactComponent as SearchIcon } from './search.svg';
import { useNavigate } from "react-router-dom";


function Navbar() {

    const [query, setQuery ] = useState('');

    let navigate = useNavigate();


    const updateState = (e) => {
        //console.log(e.target.value);
        setQuery(e.target.value);
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const query_temp = query;
        //console.log("Submitted on: ", query_temp);    
        setQuery('');
        
        if(query_temp !== ''){
            //console.log("Request on: ", query_temp);
            navigate(`/search/${query_temp}`);
        }
    }


    return(            
        <div className="navbar">
            <a className="title" href='/'>
                <img src={LogoImage} alt="Logo" className="logo-img"></img>
                <div className="name-div">
                    <div>Wookie</div> 
                    <div>Movies</div>
                </div>
            </a>
            <div className='search-div'>
                <form className='form-search' onSubmit={onFormSubmit}>
                    <SearchIcon className='search-img' onClick={onFormSubmit} />
                    <input type="text" autoComplete="off" onChange={updateState} value={query}/>
                </form>
            </div>
        </div>);

}
export default Navbar;