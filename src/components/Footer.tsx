import { GrGithub, GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer text-center">
      <div className="footer-icons">
        <a
          href="https://linkedin.com/in/bolaghaly"
          target="_blank"
          rel="noreferrer"
          className="footer-linkedin-logo"
        >
          <GrLinkedin />
          <span>Bola Ghaly's Linkedin Profile</span>
        </a>
        <a
          href="https://github.com/BolaGhaly"
          target="_blank"
          rel="noreferrer"
          className="footer-github-logo"
        >
          <GrGithub />
          <span>Bola Ghaly's GitHub Profile</span>
        </a>
      </div>
      <p>Copyright &copy; 2022 by Bola Ghaly. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
