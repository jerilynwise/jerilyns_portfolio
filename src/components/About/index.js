import aboutMe from "../../assets/about_me/jerilyn.jpg"
import React from 'react';

function About() {
  return (
    <section className="my-5">
      <img src={aboutMe} className="my-2" style={{ width: "25%" }} alt="cover" />
      <div className="about_me">      
        <h1 id="about">Jerilyn Wise</h1>
            <p>I am a quality engineer consultant working with Accenture in Nashville, TN. 
                    My background is in warehouse management systems with a heavy focus on Scale and Netsuite.
                    I am curently taking classes to become a Fullstack Developer.</p>
        </div>

    </section>

  );
}

export default About;
