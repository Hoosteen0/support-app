import React from 'react';
import {Link} from "react-router-dom";

const Social = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                </ul>
            </nav>
            <h1>
                Social Tab!
            </h1>
        </div>
    )
}
export default Social;