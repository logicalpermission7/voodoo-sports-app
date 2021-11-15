import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="navbar">
            <h1>VDSports</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/About">MLB</Link>

            </div>
        </div>
    )
}
export default Nav;