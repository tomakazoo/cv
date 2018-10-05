import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Tomislav Babic.</h1>
      <h3>
        I'm a passionate <span>software developer</span>, 
        <span> architect</span> and <span>innovative IT professional</span> offering great experience leveraging software
        engineering and DevOps methodologies to deliver highly effective and creative solutions to business and
        technology challenges. Let's
        <a className="smoothscroll" href="#about">
          {" "}
          start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
