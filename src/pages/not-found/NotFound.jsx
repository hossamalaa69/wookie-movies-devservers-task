import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.scss"


function NotFound(){
    return(
        <div className='div-not-found'>
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default NotFound;