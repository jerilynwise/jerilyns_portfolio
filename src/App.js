import './App.css';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <ContactForm></ContactForm>
        <About></About>
        <Portfolio></Portfolio>
      </main>
      
    </div>
  );
}

export default App;