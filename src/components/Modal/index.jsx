import React from "react";

const Modal = ({ onClose, currentProject }) => {
  const { name, description, category, imgfile, link, github } =
    currentProject;

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <h3 className="modalTitle">
          {name} example of {category} project
        </h3>
        <img src={imgfile} alt="current category" />
        <p>Description: {description}</p>
        <p>
          <a href={link} target="_blank" rel="noreferrer">
            Click here to view the project!
          </a>
        </p>
        <p>
          <a href={github} target="_blank" rel="noreferrer">
            Click here to view the GitHub repo!
          </a>
        </p>
        <button type="button" onClick={onClose}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Modal;