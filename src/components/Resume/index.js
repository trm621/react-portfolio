import React from 'react';
import respdf from '../../assets/ThomasMaherResume.pdf'

function Resume() {
    return (
        <div>
            <ol className="proficiencies">
                Proficient In:
                <h6 className="technology">HTML</h6>
                <h6 className="technology">CSS</h6>
                <h6 className="technology">JavaScript</h6>
                <h6 className="technology">Third-Party/Server-Side APIs</h6>
                <h6 className="technology">Object Oriented Programming</h6>
                <h6 className="technology">Mongoose</h6>
                <h6 className="technology">MongoDB</h6>
                <h6 className="technology">Express.js</h6>
                <h6 className="technology">Node.js</h6>
                <h6 className="technology">Handlebars.js</h6>
                <h6 className="technology">React</h6>
                <h6 className="technology">MySQL</h6>
                <h6 className="technology">NoSQL</h6>

            </ol>
            <h1 className="resume"><a href= {respdf} target="_blank" rel="noreferrer"> Click to download my resume!</a></h1>
        </div>
    )
};


export default Resume;