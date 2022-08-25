import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/yevhen-zhdanov-199923160/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Tureckiy-zart"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
        <FiDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
