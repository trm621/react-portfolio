
import React from "react";
import { SocialIcon } from "react-social-icons";


function Footer() {
  return (
    <div>
      <footer class="bodycolumn">
        <ul>
          <li>
            <SocialIcon url="https://www.linkedin.com/in/thomas-maher-0b3615217/" />
          </li>
          <li>
            <SocialIcon url="https://github.com/trm621" />
          </li>
          <li>
            <h6>Copyright Tom Maher 2022</h6>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;