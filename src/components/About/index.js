import aboutMe from "../../assets/about_me/jerilyn.jpg"
import React from 'react';

function About() {
  return (

    <section class="wrapper">
        <section>
            <img id="profile-pic" src={aboutMe} alt= 'woman with short hair smiling'/>
        </section>
        <section id="this-is-me" class="this-is-me">
                <div class="preview">
                    <h3>This Is Me</h3>
                    <p>I am a system analyst working with DesignWorks Collective in Nashville, TN. My background is in warehouse management systems with a heavy focus on Scale and Netsuite. I am curently taking classes 
                        to become a Fullstack Developer.
                    </p>
                </div>
        </section>
    </section>
  );
}

export default About;
