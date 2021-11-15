import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="navbar">
            <h1>Game Day Data</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>

            </div>
        </div>
    )
}
export default Nav;