import React from 'react';
import {Link} from "react-router-dom";
import "./Link Styling.css";
const Health = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li class = "nav"><Link to='/home'>Home</Link></li>
                </ul>
            </nav>
            <h1>
                Health Tab!
            </h1>
        </div>
    )
}
export default Health;