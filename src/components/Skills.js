import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand csharp" />
            <em>C#</em>
          </li>
          <li>
            <span className="bar-expand photoshop" />
            <em>.NET Framework</em>
          </li>
          <li>
            <span className="bar-expand mssql" />
            <em>MS SQL</em>
          </li>
          <li>
            <span className="bar-expand oracle" />
            <em>Oracle</em>
          </li>          
          <li>
            <span className="bar-expand illustrator" />
            <em>Javascript</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>CSS</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>HTML5</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Nodejs</em>
          </li>
          <li>
            <span className="bar-expand csharp" />
            <em>Agile Methodologies</em>
          </li>
          <li>
            <span className="bar-expand oracle" />
            <em>Event Sourcing</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>Microservices</em>
          </li>          
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
