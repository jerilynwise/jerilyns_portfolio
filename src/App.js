import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      
    </div>
  );
}

export default App;