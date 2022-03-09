import React, { useState } from "react";

function Project({ category }) {
    const [currentProject, setCurrentProject] = useState();
    const [projects] = useState([
      {
        name: "Trail-Talk",
        description: "A social media platfrom to share experiences in national parks with others from around the world!",
        imgfile: require('../../assets/project-image-4.jpg'),
        link: 'https://pacific-shelf-58337.herokuapp.com/',
        github: 'https://github.com/trm621/uconn-project-two',
      },
      {
        name: "Beach-Blog",
        description: "A blog to post about your favorite beaches!",
        imgfile: require('../../assets/main-project-image.jpg'),
        link: 'https://evening-retreat-41294.herokuapp.com/',
        github: 'https://github.com/trm621/uconn-project-two',
      },
      {
        name: "Binge-Buddy",
        description: "A website built to help find the perfect dinner/movie pairing for movie night!",
        imgfile: require('../../assets/project-image-1.jpg'),
        link: 'https://trm621.github.io/movie-night-generator/',
        github: 'https://github.com/trm621/movie-night-generator',
      },
      {
        name: "Password-Generator",
        description: "A simple application to generate a strong password.",
        imgfile: require('../../assets/project-image-5.png'),
        link: 'https://trm621.github.io/password-generator/',
        github: 'https://github.com/trm621/password-generator',
      },
      {
        name: "Bugdet-Tracker",
        description: "An application to help manage your budget and spending",
        imgfile: require('../../assets/project-image-7.png'),
        link: 'https://fathomless-reaches-87217.herokuapp.com/',
        github: 'https://github.com/trm621/budget-tracker',
      },
      {
        name: "ReadMe-Generator",
        description: "A node application used to generate a professional ReadMe file.",
        imgfile: require('../../assets/project-image-6.jpg'),
        link: 'https://github.com/trm621/readme-buddy',
        github: 'https://github.com/trm621/readme-buddy',
      }
    ]);
  
    const currentProjects = projects.filter(
      (project) => project.category === category
    );

  
    return (
      <div className="project-container">
      <div className="card">
        {currentProjects.map((image, i) => (
          <img
            src={image.imgfile}
            alt={image.name}
            className="img-thumbnail project"
            
          />
        ))}
        
      </div>
    </div>
    );
  };
  

export default Project;