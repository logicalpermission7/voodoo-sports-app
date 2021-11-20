import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="navbar">
            <h1>SpreadBook</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/MLB">MLB</Link>
                <Link to="/CAL">MOPC</Link>

            </div>
        </div>
    )
}
export default Nav;