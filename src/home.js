import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <header>
                <h1>Florida Tech Support App</h1>
                <nav>
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/academic'>Academic</Link></li>
                        <li><Link to='/social'>Social</Link></li>
                        <li><Link to='/health'>Health</Link></li>
                        <li><Link to='/'>Sign Out</Link></li>
                    </ul>
                </nav>
            </header>
            <body>
                <h2>Goal</h2>
                <p>We want to provide new students at Florida Tech with information about certain resources such as:
                    <ul>
                        <li><p>Social Events</p></li>
                        <li><p>Academic Services</p></li>
                        <li><p>Health Services</p></li>
                    </ul>
                    to improve their experience integrating in a new campus environment.
                </p>
                <h2>How to Use</h2>
                <p>To use this application:
                    <ol>
                        <li><p>Click the tabs in the navigation bar.</p></li>
                        <li><p>View the events related to those services.</p></li>
                    </ol>
                </p>
            </body>
        </div>
    )
}
export default Home;