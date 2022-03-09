import React from 'react';
import ProfilePic from '../../assets/profile-picture.jpg'

function About() {
    return (
      <section className="about my-5">
        <h1 >About Me</h1>
        <div id="about">
        <img className="profile-pic" src={ProfilePic} />
        <div className="my-2">
        <p>
            How are you today? My name is Thomas Maher. My friends call me Tom. I'm a full stack web developer operating out of Norwalk, CT. I love gaming, watching scary movies, playing Dungeons and Dragons, and making people laugh. See my
            work in the projects section!
        </p>
        </div>
        </div>
      </section>
    );
  }

  export default About;