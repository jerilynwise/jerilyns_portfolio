import React from 'react';
import PDF from '../../documents/Resume.pdf'

function Resume() {
  return (
    <section className='wrapper'>

      <div>  
            <a className='button' id='profile pic' href={PDF} target='_blank' rel="noreferrer">Download Resume</a>
        </div>   

        <section id="this-is-me" class="this-is-me">
                    <div class="preview">
                        <h3>Skills</h3>
                        <ul>
                    <li>HTML, CSS, Github</li>
                    <li>Javascript, Advanced CSS</li>
                    <li>Web, Third-Party and Server-Side APIs</li>
                    <li>Node.js, OOP, Express.js, SQL</li>
                    <li>ORM, MVC,NoSQL, PWA</li>
                    <li>React, MERN</li>
                </ul>
                    </div>
            </section>
    </section>
  );
}

export default Resume;
