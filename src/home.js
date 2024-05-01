import React, {useState} from 'react';
import { Link, Routes, Route } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to='/'>Sign Out</Link></li>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/academic'>Academic</Link></li>
                </ul>
            </nav>

            <h2>Welcome message for home page</h2>
        </div>
    )
}
export default Home;