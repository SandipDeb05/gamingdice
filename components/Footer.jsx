import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Sandip Store 2022 || All rights reserved</p>
      <p>Coded by Sandip Deb</p>
      <p className="icons">
        <a href="https://www.linkedin.com/in/sandip-deb-8b76b2157/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/SandipDeb05">
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
