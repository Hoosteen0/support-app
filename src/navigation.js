import React, {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login.js';
import Home from './home.js';
import Academic from './academic.js';

export default function Navigation() {
    return (
        <Routes>
            <Route path='/' exact element={ <Login/> }/>
            <Route path='/home' element={ <Home/> }/>
            <Route path='/academic' element={ <Academic/> }/>
        </Routes>
    )
}