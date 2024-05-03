import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './login.js';
import Home from './home.js';
import Academic from './academic.js';
import Social from './social.js';
import Health from './health.js';

export default function Navigation() {
    return (
        <Routes>
            <Route path='/' exact element={ <Login/> }/>
            <Route path='/home' element={ <Home/> }/>
            <Route path='/academic' element={ <Academic/> }/>
            <Route path='/social' element={<Social/>}/>
            <Route path='/health' element={<Health/>}/>
        </Routes>
    )
}