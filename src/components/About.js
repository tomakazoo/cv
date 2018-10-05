import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/me.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
        A highly versatile IT professional with over 22 years of comprehensive experience in software development, application development support, software quality assurance, system administration and database administration.
        A 18 years’ experience working within finance/banking environment, building excellent relations with business analysts and users by showing a commitment to understand their underlying businesses and so more effectively contribute to solving their systems requirements.
        Knowledgeable in applications of scrum, waterfall, and agile methodologies, and skilled in developing processes that facilitate continual progress and team achievement. 
        As a source and process manager (Scrum Master) I developed and lead the build team process (SCRUM) meetings where the team reviewed the work assignments, testing status and project burndown reports to ensure iteration and software delivery.
        As a member of the team I am a full stack polyglot software developer working with other team members on architecting implementing and leading software solutions spanning across web and desktop environments. 
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Tomislav Babic</span>
              <br />
              <span>
                53 Cité Charles de Gaulle
                <br /> Bascharage (Nidderkäerjeng), L-4951 Luxembourg
              </span>
              <br />
              <span>(352)621 542 744</span>
              <br />
              <span>tomislavb@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="#" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
