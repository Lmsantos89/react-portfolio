import { useTranslation } from "react-i18next";
import logo from "../assets/Ls.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [t, i18n] = useTranslation("global");
  const [selectedOption, setSelectedOption] = useState("fr");

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    handleChangeLanguage(value);
  };

  return (
    <nav className="flex items-center justify-between py-6">
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
        <select
          className="bg-transparent font-light text-center"
          value={selectedOption}
          onChange={handleChange}
        >
          <option className="font-light" value="fr">
            FR
          </option>
          <option className="font-light" value="en">
            EN
          </option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
