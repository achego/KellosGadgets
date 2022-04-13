import React from "react";
import Button from "../Button/Button";
import cs from "./NavBar.module.css";
import NavItem from "./NavItem/NavItem";

const NavBar = () => {
  return (
    <div className={cs.NavBar}>
      <div className={[cs.NavBarC, "container"].join(" ")}>
        <div className={cs.logo}>Kello</div>
        <nav>
          <ul>
            <NavItem>Home</NavItem>
            <NavItem>Galery</NavItem>
            <NavItem>Contact</NavItem>
          </ul>
          <Button className={cs.btn}>Get the app</Button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
