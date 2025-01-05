import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-bg"></div>
      <Container>
        <Row>
          <Col xl={12}>
            <div className="footer-upper text-center">
              <div className="footer-logo">
                <span style={{ fontSize: "35px", color: "white" }}>
                  Raza Ali
                </span>
              </div>
              <ul className="footer-widget__social">
                <li>
                  <a
                    href="https://www.linkedin.com/in/raza-ali-155088206/"
                    target="_blank"
                  >
                    <FaLinkedin className="text-5xl mr-5" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/razabhatti546" target="_blank">
                    <FaGithub className="text-5xl ml-5" />
                  </a>
                </li>
              </ul>
              {/* <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>

                  <li>
                    <a href="#">Publications</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Tools & Technologies</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="site-footer__bottom">
        <Container className="text-center">
          <p>
            <a href="mailto:razaaligcu@gmail.com">razaaligcu@gmail.com</a>
          </p>

          {/* © copyright {year} by <a href="#">Layerdrops.com</a> */}
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
