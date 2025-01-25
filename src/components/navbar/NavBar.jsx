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
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              InnoCrew
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
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
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
