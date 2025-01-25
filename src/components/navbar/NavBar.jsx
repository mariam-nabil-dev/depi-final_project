<<<<<<< Updated upstream
import { IoHomeOutline } from "react-icons/io5";
import { BsInfoSquare } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineContacts } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./navbar.css";

import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { Button, Container, Navbar, Offcanvas, Form } from "react-bootstrap";

const NavBar = () => {
  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <IoHomeOutline />,
    },
    {
      name: "About",
      path: "/about",
      icon: <BsInfoSquare />,
    },
    {
      name: "Categories",
      path: "/categories",
      icon: <BiCategoryAlt />,
    },
    {
      name: "Blogs",
      path: "/blogs",
      icon: <IoNewspaperOutline />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <MdOutlineContacts />,
    },
  ];
  return (
    <Navbar
      expand="lg"
      className="bg-secondaryBg mb-3 font-heading text-primaryText"
    >
      <Container
        fluid
        className="d-flex align-items-center justify-content-between"
      >
        <Navbar.Brand href="#" className="fw-medium">
          <img
            alt=""
            src="/logo.png"
            width="50"
            height="50"
            className="d-inline-block align-center"
          />{" "}
          InnoCrew
=======
import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
  Offcanvas,
} from "react-bootstrap";
import { FaGlobe, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navbar.css"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Categories", path: "/categories" },
  { name: "Blogs", path: "/blogs" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3" sticky="top">
      <Container fluid className="px-4">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="40"
            height="40"
            className="d-inline-block align-center"
          />{" "}
          <span className="font-paragraph fw-medium fs-4">Polaris</span>
>>>>>>> Stashed changes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
<<<<<<< Updated upstream
              InnoCrew
=======
              Polaris
>>>>>>> Stashed changes
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
<<<<<<< Updated upstream
              className="justify-content-center flex-grow-1 pe-3 gap-2 fs-6"
              defaultActiveKey="/"
            >
              {navLinks.map((link, index) => (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  to={link.path}
                  className="rounded-2 p-2 text-center"
                >
=======
              className="justify-content-center flex-grow-1 pe-3 gap-2"
              defaultActiveKey="/"
            >
              {navLinks.map((link, index) => (
                <Nav.Link key={index} as={NavLink} to={link.path} className="navbar-link">
>>>>>>> Stashed changes
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
<<<<<<< Updated upstream
            <Form className="d-flex search font-primary mt-4 mt-md-0">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 search-box"
                aria-label="Search"
              />
              <Button className="bg-transparent text-primaryText border-0 position-absolute end-0 me-3">
                <IoSearch />
              </Button>
            </Form>
=======

            <div className="d-flex align-items-center gap-4">
              {/* Profile Dropdown */}
              <NavDropdown title={<FaUser />} id="dropdown-profile" align="end">
                <NavDropdown.Item as={NavLink} to="/profile">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/settings">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
              </NavDropdown>

              {/* Language Dropdown */}
              <NavDropdown
                title={<FaGlobe />}
                id="dropdown-language"
                className=""
                align="end"
              >
                <NavDropdown.Item>Arabic (AR)</NavDropdown.Item>
                <NavDropdown.Item>English (EN)</NavDropdown.Item>
                <NavDropdown.Item>Español (ES)</NavDropdown.Item>
                <NavDropdown.Item>Français (FR)</NavDropdown.Item>
              </NavDropdown>

              {/* Theme Toggle Button */}
              <Button
                variant="link"
                onClick={toggleTheme}
                className="theme-toggle"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </Button>
            </div>
>>>>>>> Stashed changes
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
