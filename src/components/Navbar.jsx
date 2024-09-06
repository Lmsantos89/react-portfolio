import logo from "../assets/Ls.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 fixed top-0 left-0 w-full">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo"></img>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/lmsantos89/"
          target="_blank"
          rel="noopener"
        >
          <FaLinkedin />
        </a>
        <FaGithub />
      </div>
    </nav>
  );
};

export default Navbar;
