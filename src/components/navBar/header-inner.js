import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import logo from "@images/logo-1-1.png";
import NavLinksInner from "./nav-links-inner";

const HeaderInner = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      mobileMenu();
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    document.querySelectorAll(".side-menu__toggler").forEach((btn) => {
      btn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });
    });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };
  return (
    <>
      <header className={`site-header-one stricky `}>
        <Container fluid>
          <div className="site-header-one__logo">
            <a href="/">
              <img src={logo} width="129" alt="" />
            </a>
            <span className="side-menu__toggler">
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="main-nav__main-navigation">
            <NavLinksInner />
          </div>
          <div className="main-nav__right">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflwiqkZTMvQa0osHAQB5fHSe3p74F0-o3r6FJYSicjazG4Gg/viewform?usp=sf_link"
              className="thm-btn"
            >
              <span>Register Now</span>
            </a>
          </div>
        </Container>
      </header>

      {/* stricky menu cloned */}
      <header
        className={`site-header-one stricked-menu  ${
          sticky === true ? "stricky-fixed" : null
        }  `}
      >
        <Container fluid>
          <div className="site-header-one__logo">
            <a href="/">
              <img src={logo} width="129" alt="" />
            </a>
            <span className="side-menu__toggler">
              <i className="fa fa-bars"></i>
            </span>
          </div>
          <div className="main-nav__main-navigation">
            <NavLinksInner />
          </div>
          <div className="main-nav__right">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSflwiqkZTMvQa0osHAQB5fHSe3p74F0-o3r6FJYSicjazG4Gg/viewform?usp=sf_link"
              className="thm-btn"
            >
              <span>Register Now</span>
            </a>
          </div>
        </Container>
      </header>
    </>
  );
};

export default HeaderInner;
