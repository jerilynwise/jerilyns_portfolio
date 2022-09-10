import React from 'react';


function Nav(props) {
    const links = ['About', 'Portfolio', 'Contact', 'Resume']
  return (
        <div className='navBar'>
            <ul className='links'>
                {links.map((links) => (
                    <li className={props.selected === links ? "highlight" : "links"} key={links}>
                        <a href={'#' + links.toLowerCase()}
                            onClick={() => props.changePage(links)}
                            className={props.selected === links  ? 'highlight' : 'links'}>
                        {links}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
  );
}

export default Nav;