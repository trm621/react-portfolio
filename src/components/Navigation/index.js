import React from 'react'

function Navigation(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

    return(
    <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">
                Portfolio
            </a>
          </li>
          <li className={"mx-2"}>
          <a data-testid="contact" href="#contact">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about">
              Resume
            </a>
          </li>
        </ul>
    )
}
    

export default Navigation