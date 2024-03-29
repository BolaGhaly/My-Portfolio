import { GrGithub, GrLinkedin } from "react-icons/gr";
import GA_Event from "../utils/GA_Event";

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <a
          href="https://linkedin.com/in/bolaghaly"
          target="_blank"
          rel="noreferrer"
          className="footer-linkedin-logo"
          onClick={() =>
            GA_Event(
              "Footer - LinkedIn",
              "Footer LinkedIn Button Clicked",
              "Footer LinkedIn Button"
            )
          }
        >
          <GrLinkedin />
          <span>Bola Ghaly's Linkedin Profile</span>
        </a>
        <a
          href="https://github.com/BolaGhaly"
          target="_blank"
          rel="noreferrer"
          className="footer-github-logo"
          onClick={() =>
            GA_Event(
              "Footer - GitHub",
              "Footer GitHub Button Clicked",
              "Footer GitHub Button"
            )
          }
        >
          <GrGithub />
          <span>Bola Ghaly's GitHub Profile</span>
        </a>
      </div>
      <p>Copyright &copy; 2023 by Bola Ghaly. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
