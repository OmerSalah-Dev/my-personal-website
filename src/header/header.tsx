import { useState, useEffect } from "react";
import "./header.css";
import logo from "./images/logo.png";

function Header() {
  const [active, setActive] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".scroll-target");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 160) {
          currentSection = section.getAttribute("id") || "home";
        }
      });
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="nav-main-container">
        <div className="dev-main-container">
          <div className="header-brand">
            <a href="#home">
              <img className="logo-image" src={logo} alt="Logo" />
            </a>
            <span className="nav-first-name"> OMER </span>
            <span className="nav-second-name"> SALAH </span>
          </div>

          <div className="header-nav-links">
            <a
              className={`nav-link  ${active === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => setActive("home")}
            >
              Home
            </a>

            <a
              className={`nav-link  ${active === "about" ? "active" : ""}`}
              href="#about"
              onClick={() => setActive("about")}
            >
              About
            </a>
            <a
              className={`nav-link  ${active === "portfolio" ? "active" : ""}`}
              href="#portfolio"
              onClick={() => setActive("portfolio")}
            >
              Portfolio
            </a>

            <a
              className={`nav-link  ${active === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </div>
          <button
            className={`humburger-menu-container ${
              isMobileMenuOpen ? "is-open" : ""
            }`}
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu-icon lucide-menu"
            >
              <path className="line-top" d="M4 5h16" />
              <path className="line-middle" d="M4 12h16" />
              <path className="line-bottom" d="M4 19h16" />
            </svg>
          </button>
        </div>

        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "is-open" : ""}`}
        >
          <div className="mobile-menu-content">
            <a
              className={`nav-link ${active === "home" ? "active" : ""}`}
              href="#home"
              onClick={() => {
                setActive("home");
                toggleMobileMenu();
              }}
            >
              Home
            </a>

            <a
              className={`nav-link ${active === "about" ? "active" : ""}`}
              href="#about"
              onClick={() => {
                setActive("about");
                toggleMobileMenu();
              }}
            >
              About
            </a>
            <a
              className={`nav-link ${active === "portfolio" ? "active" : ""}`}
              href="#portfolio"
              onClick={() => {
                setActive("portfolio");
                toggleMobileMenu();
              }}
            >
              Portfolio
            </a>
            <a
              className={`nav-link ${active === "contact" ? "active" : ""}`}
              href="#contact"
              onClick={() => {
                setActive("contact");
                toggleMobileMenu();
              }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

