import React from 'react';
import ProfilePic from '../../assets/profile-picture.jpg'

function About() {
    return (
      <div>
      <h1 className="welcomeAbout">About Me</h1>
      <section className="about my-5">
        
        <img className="profile-pic" src={ProfilePic} />
        <div id="about">
        
        <div className="my-2">
        <p className="blurb">
            Hi there! My name is Thomas Maher, but you can call me Tommy. I'm a full stack web developer operating out of Norwalk, CT. 
            I love gaming, watching scary movies, playing Dungeons and Dragons, and making people laugh. I spent the last few years working
            at Yahoo Inc. working on their DSP. Although relatively new to this field, I've really come to love it. Moving around data kind
            of makes me feel like a wizard and that's pretty cool in my eyes. Let's work together!
             See my work in the projects section!
        </p>
        </div>
        </div>
      </section>
      </div>
    );
  }

  export default About;