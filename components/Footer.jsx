import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Gaming Dice 2022 || All rights reserved</p>
      <p>Coded by Sandip Deb</p>
      <p className="icons">
        <a
          href="https://www.linkedin.com/in/sandip-deb-8b76b2157/"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/SandipDeb05"
          target={"_blank"}
          rel={"noopener noreferrer"}
        >
          <AiFillGithub />
        </a>
      </p>
    </div>
  );
};

export default Footer;
