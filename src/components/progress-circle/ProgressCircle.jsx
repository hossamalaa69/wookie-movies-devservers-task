import React, { Component } from 'react';
import "./styles.scss"


class ProgressCircle extends Component {
    render() { 
        return(   
            <div className='progress-div'>
                <progress className="pure-material-progress-circular"/>
            </div>
        );
    }
}
 
export default ProgressCircle;