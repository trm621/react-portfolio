import React, {useEffect} from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers';

function Navigation({ currentPage, handlePageChange}) {

  return (
    <div>
    <nav className="col-6 navBar">
    <a href="#About" onClick={() => handlePageChange('About')}>
        About Me
    </a> 
    <a href="#Projects" onClick={() => handlePageChange('Projects')}>
        Projects
    </a> 
    <a href="#Contact" onClick={() => handlePageChange('Contact')}>
        Contact Me
    </a>
    <a href="#Resume" onClick={() => handlePageChange('Resume')} >
        Resume
    </a>
</nav>
</div>
  );
}
    

export default Navigation;