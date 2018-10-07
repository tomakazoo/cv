import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>University of Belgrade, Faculty of Mechanical Engineering</h3>
          <h5 className="info">
            Master in Industrial Engineering
            <span>&bull;</span>
            <em className="date">December 1996</em>
          </h5>

          <p>
          The Master in Industrial Engineering curriculum is programmed to provide the skills required by modern industrial engineers, 
          including analysis of product design to determine the optimum manufacturing process, selection of equipment and design of layout, 
          design and installation of systems for controlling production, inventory, quality or cost, job design and methods improvement, 
          design of material handling systems, manpower utilization and work measurement and operations research. 
          In addition to disciplinary content, the curriculum also encourages to attain expertise in the use of modern information technologies and 
          take part in professional and extracurricular activities. In response to current trends, the study module of Industrial Engineering produces engineers 
          who can utilize advanced equipment and information technology in a broad range of fields from product development 
          to the construction of intelligent information services.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>University of Belgrade, Faculty of Mechanical Engineering</h3>
          <h5 className="info">
            Bachelor of Science in Mechanical Engineering (Industrial Engineering)
            <span>&bull;</span>
            <em className="date">September 1994</em>
          </h5>

          <p>
            Industrial engineering is concerned with the development, improvement, 
            and implementation of integrated systems of people, money, knowledge, information, equipment, energy, 
            materials, analysis and synthesis, as well as the mathematical, physical and social sciences together with the principles 
            and methods of engineering design to specify, predict, and evaluate the results to be obtained from such systems 
            or processes
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
