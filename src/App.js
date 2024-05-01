import './App.css';
import Navigation from './navigation.js';
import {Link} from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navigation/>
      </header>
    </div>
  );
}

export default App;
