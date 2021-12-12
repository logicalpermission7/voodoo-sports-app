import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className="navbar">
            <h1>SpreadBook</h1>
            <div className="links">
                <Link to="/data">DATA</Link>
                <Link to="/news">NEWS</Link>
                <Link to="/calculator">MOP</Link>

            </div>
        </div>
    )
}
export default Nav;