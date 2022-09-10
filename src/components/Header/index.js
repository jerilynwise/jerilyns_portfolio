import '../../App.css';
import React, {useState} from 'react';
import About from '../About';
import Nav from '../Nav';
import Portfolio from '../Portfolio'
import ContactForm from '../Contact';
import Resume from '../Resume';


function Header() {
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
        <header className='header-box'>
            <h1 id='header'>Jerilyn Wise</h1>
        </header>
        <section id='navigation' className='navigation'>
        <nav className='nav'>
        <Nav
            selected = {selected}
            changePage = {changePage} 
        />
        </nav>
        </section>
        <main>
          <div>{showPage(selected)}</div>
        </main>

      </div>
  );
}

export default Header;