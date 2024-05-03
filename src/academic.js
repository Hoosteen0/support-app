import React from 'react';
import {Link} from "react-router-dom";
import Events from './events.js';

const Academic = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                </ul>
            </nav>
            <h1>
                Academic Tab!
            </h1>
            <Events/>
        </div>
    )
}
export default Academic;

