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
            How are you today? My name is Thomas Maher. My friends call me Tom. I'm a full stack web developer operating out of Norwalk, CT. I love gaming, watching scary movies, playing Dungeons and Dragons, and making people laugh. See my
            work in the projects section!
        </p>
        </div>
        </div>
      </section>
      </div>
    );
  }

  export default About;