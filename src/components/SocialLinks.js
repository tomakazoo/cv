import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/tomislav.babic">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/Toma9869">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/u/0/105721205981303304250?tab=wX">
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/tomislav3627/?hl=fr">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/tomakazoo">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
