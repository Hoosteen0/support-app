import React from 'react';
import {Link} from "react-router-dom";

const Health = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                </ul>
            </nav>
            <h1>
                Health Tab!
            </h1>
        </div>
    )
}
export default Health;