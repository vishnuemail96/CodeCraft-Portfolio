import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-8">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/vishnu-s-b93583227/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vishnuemail96" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/vichu_96_/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:vishnu.cse21@mamcet.com" target="_blank" rel="noopener noreferrer">
          <SiGmail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
