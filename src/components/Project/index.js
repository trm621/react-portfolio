import React, { useState } from "react";
import Modal from "../Modal";

function Project({ category }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    // TO DO: Clean up tech used and project descriptions
    const [projects] = useState([
      {
        name: "Beach-Blog",
        description: "A blog to post about your favorite beaches!",
        imgfile: require('../../assets/main-project-image.jpg'),
        link: 'https://evening-retreat-41294.herokuapp.com/',
        github: 'https://github.com/trm621/uconn-project-two',
      }
    ]);
  
    const currentProjects = projects.filter(
      (project) => project.category === category
    );
  
    const toggleModal = (image, i) => {
      setCurrentProject({ ...image, index: i });
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div className="project">
        {isModalOpen && (
          <Modal onClose={toggleModal} currentProject={currentProject} />
        )}
        <div >
          {currentProjects.map((image, i) => (
            <img className="project-image"
              src={image.imgfile}
              alt={image.name}
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default Project;