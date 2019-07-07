import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './components/templates/template'
import { BrowserRouter } from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Template>

    </Template>
    </BrowserRouter>
    </div>
  );
}

export default App;
