import React, { useState } from "react";

function Project({ category }) {
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
      {
        name: "Trail Talk",
        description: "A social media platfrom to share your experiences at national parks with others from around the world!",
        imgfile: require('../../assets/project-image-4.jpg'),
        link: 'https://pacific-shelf-58337.herokuapp.com/',
        github: 'https://github.com/trm621/national-park-social-app',
      },
      {
        name: "Beach Blog",
        description: "A blog to post about your favorite beaches!",
        imgfile: require('../../assets/main-project-image.jpg'),
        link: 'https://evening-retreat-41294.herokuapp.com/',
        github: 'https://github.com/trm621/uconn-project-two',
      },
      {
        name: "Binge Buddy",
        description: "A website built to help find the perfect dinner/movie pairing for movie night! Utilizes third party APIs to find recent films and recipes.",
        imgfile: require('../../assets/project-image-1.jpg'),
        link: 'https://trm621.github.io/movie-night-generator/',
        github: 'https://github.com/trm621/movie-night-generator',
      },
      {
        name: "Password Generator",
        description: "A simple application used to generate a strong password with arrays.",
        imgfile: require('../../assets/project-image-5.png'),
        link: 'https://trm621.github.io/password-generator/',
        github: 'https://github.com/trm621/password-generator',
      },
      {
        name: "Budget Tracker",
        description: "An application that utilizes service workers and MongoDB to help manage your budget and spending.",
        imgfile: require('../../assets/project-image-7.png'),
        link: 'https://fathomless-reaches-87217.herokuapp.com/',
        github: 'https://github.com/trm621/budget-tracker',
      },
      {
        name: "ReadMe Generator",
        description: "A Node application used to generate a professional ReadMe file.",
        imgfile: require('../../assets/project-image-6.jpg'),
        link: 'https://drive.google.com/file/d/16rbgJeUkvjxtn3FyfM9znjDt2WeErmDd/view?usp=sharing',
        github: 'https://github.com/trm621/readme-buddy',
      },
      {
        name: "Social Media Backend",
        description: "A fully functioning back-end for a social media platform.",
        imgfile: require('../../assets/project-image-8.jpg'),
        link: 'https://drive.google.com/file/d/1MuStxK9iuNjOXKDGQ_wu6186ACuk0QBy/view',
        github: 'https://github.com/trm621/nosql-social-media'
      }
    ]);
  
    const currentProjects = projects.filter(
      (project) => project.category === category
    );

    function buildProject(project) {
      return (
          <div className="card">
              <h2>{project.name}</h2>
              <img src={project.imgfile} alt={project.name} className="img-thumbnail"/>
              <p>{project.description}</p>
              <ul>
                  <li className="linkText" ><a href={project.link} target="_blank">Click here to check out the project!</a></li>
                  <li className="linkText"><a href={project.github} target="_blank">Click here to view the GitHub Repository.</a></li>
              </ul>
          </div>
      )
  }

  return (
      <div className="row">
          {projects.map(buildProject)}
      </div>
  )
}

export default Project;