import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import RouterView from './router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RouterView></RouterView>
      </BrowserRouter>
    </div>
  );
}

export default App;
