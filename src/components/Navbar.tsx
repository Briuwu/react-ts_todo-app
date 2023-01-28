import React, { useState } from "react";
import MoonIcon from "../images/icon-moon.svg";
import SunIcon from "../images/icon-sun.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  function handleToggle() {
    let theme = !toggle;
    setToggle((prev) => !prev);

    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  return (
    <nav className="nav">
      <h1 className="nav__logo">TODO</h1>
      <button onClick={handleToggle} className="nav__btn btn">
        <img src={toggle ? SunIcon : MoonIcon} alt="Select Theme" />
        <span className="visually-hidden">theme switch</span>
      </button>
    </nav>
  );
};

export default Navbar;
