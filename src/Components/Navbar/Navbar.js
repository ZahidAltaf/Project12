import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NavbarItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "ContactUs",
    link: "/contact",
  },
  {
    label: "Login",
    link: "/login",
  },
];
const Navbar = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        MyTask
      </Link>

      <Button variant="text">
        {NavbarItems.map((data) => (
          <Link to={data.link} className="nav-item" style={{ "--i": 0 }}>
            {data.label}
          </Link>
        ))}
      </Button>
    </header>
  );
};

export default Navbar;
