import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(){
    return(
        <div className="not-found">
            <h1>Sorry, Not Sorry!</h1><br/>
            <h2>This Page Cannot Be Found...</h2><br/><br/>
            <p><Link to="/">Back To The Home Page</Link></p>
            
        </div>
    )
}
export default NotFound;