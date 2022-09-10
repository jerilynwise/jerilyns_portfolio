import React from 'react';
import PDF from '../../documents/Resume.pdf'

function Resume() {
  return (
    <section className="my-5">
      <div className="resume">      
        <h1 id="resume_title">Skils</h1>
                <ul>
                    <li>HTML, CSS, Github</li>
                    <li>Javascript, Advanced CSS</li>
                    <li>Web, Third-Party and Server-Side APIs</li>
                    <li>Node.js, OOP, Express.js, SQL</li>
                    <li>ORM, MVC,NoSQL, PWA</li>
                    <li>React, MERN</li>
                </ul>
        <h1 id='resume_tile'>Download my Resume</h1>
            <a className='button' href={PDF} target='_blank' rel="noreferrer">Resume</a>
        </div>

    </section>

  );
}

export default Resume;
