import React from "react";
import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((item) => (
        <ActiveLink key={item.text} href={item.href} text={item.text}>
          {item.text}
        </ActiveLink>
      ))}
    </nav>
  );
};

export default Navbar;
