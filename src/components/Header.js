import React from "react";
import Image from "../images/Avatar-MakerSVG.svg";


const Header = () => {
  return (
    <header className="header">
      <img src={Image} alt="my avatar" />

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        similique vitae ratione nulla eos, harum provident? Exercitationem nihil
        aut tempore, voluptas quas et. Laboriosam placeat dicta dolores at
        corrupti delectus illo nesciunt quos quas iste quod iusto nostrum
        molestiae odio, enim nam, magnam iure, consequuntur rem odit. Voluptas
        neque pariatur facere? Nihil fugiat voluptates omnis nobis, esse velit
        cupiditate atque at, odio earum quidem, architecto modi? Sint
        praesentium numquam quae quam natus? Velit, totam. Quod rem ullam,
        molestiae voluptatum quam suscipit itaque sit voluptates soluta
        aspernatur error at porro facere, ipsum pariatur consequatur hic autem
        temporibus. Aliquid vel minima est.
      </p>
      <button>
        <a href="/TASKS - DELETE BEFORE UPLOAD" download>Resume</a>
      </button>
    </header>
  );
};


export default Header;