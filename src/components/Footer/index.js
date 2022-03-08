
import React from "react";
import { SocialIcon } from "react-social-icons";


function Footer() {
  return (
    <div>
      <footer>
        <ul className="footer">
          <h4>
            <SocialIcon url="https://www.linkedin.com/in/thomas-maher-0b3615217/" />
          </h4>
          <h4>
            <SocialIcon url="https://github.com/trm621" />
          </h4>
          
            <h4>Copyright Tom Maher 2022</h4>
          
        </ul>
      </footer>
    </div>
  );
}

export default Footer;