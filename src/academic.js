import React from 'react';
import {Link} from "react-router-dom";

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
        </div>
    )
}
export default Academic;

