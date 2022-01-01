import React from "react";
import Image from "../images/Avatar-MakerSVG.svg";


const Header = () => {
  return (
    <header className="header">
      {/* <img src={Image} alt="my avatar" /> */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        similique vitae ratione nulla eos, harum provident? Exercitationem nihil
        aut tempore, voluptas quas et.
      </p>
      <button>
        <a href="/TASKS - DELETE BEFORE UPLOAD" download>Resume</a>
      </button>
    </header>
  );
};


export default Header;