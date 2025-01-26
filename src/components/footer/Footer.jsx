import { Container, Nav } from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        {/* Logo or Brand Link */}
        <a
          href="/"
          className="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img src="/logo.svg" width={50} height={50} alt="Polaris Logo" />
        </a>

        {/* Navigation Links */}
        <Nav className="col-md-8 justify-content-center">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Categories", path: "/categories" },
            { name: "Blogs", path: "/blogs" },
            { name: "News", path: "/news" },
            { name: "Contact", path: "/contact" },
          ].map((link, index) => (
            <Nav.Item key={index}>
              <Nav.Link as={NavLink} to={link.path} className="px-2 text-body-secondary">
                {link.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Social Media Icons */}
        <div className="col-md-2 d-flex justify-content-end">
          {[
            { icon: <FaFacebook />, link: "#" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaInstagram />, link: "#" },
            { icon: <FaGithub />, link: "#" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="px-2 text-body-secondary"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="col-md-12 text-center mt-2 mb-0 text-body-secondary">
          &copy; 2025 Polaris, All rights reserved
        </p>
      </footer>
    </Container>
  );
};

export default Footer;
