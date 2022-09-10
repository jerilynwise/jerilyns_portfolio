import './App.css';
import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio'
import ContactForm from './components/Contact';
import Resume from './components/Resume';


function App() {
  const [selected, changePage] = useState('About');

    const showPage = () => {
      switch (selected) {
        case 'About':
          return <About />;
        case 'Portfolio':
          return <Portfolio />;
        case 'Contact':
          return <ContactForm />
        case 'Resume':
          return <Resume />

          default: 
          return <About />
      }
    }

  return (
      <div>
        <h1>Jerilyn Wise</h1>
        <Nav
            selected = {selected}
            changePage = {changePage} 
        />
        <main>
          <div>{showPage(selected)}</div>
        </main>

      </div>
  );
}

export default App;