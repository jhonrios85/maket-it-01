import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppClass from './AppClass'

/*
Component type function
Component presentational
Component without state
Component Dumb (Brutos) only render something
*/
function App() {
  return (
    <div className="App">
      <h1>Mi primera aplicación</h1>
      <p>Esta es mi primera aplicación en React, está padrísimo!</p>
      <AppClass name='jhonRios'/>
    </div>
  );
}

export default App;
