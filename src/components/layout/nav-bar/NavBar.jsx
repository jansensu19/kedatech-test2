import './NavBar.scss';
import { useState } from 'react';
import Logo from '/src/assets/svg/logo.svg';
import useSmoothScroll from '../../../hooks/useSmoothScroll';
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "About", target: "about" },
  { label: "Pricing", target: "pricing" },
  { label: "Contact", target: "contact" },
];

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollToElement } = useSmoothScroll();
  const [isUser, setIsUser] = useState(() => {
    return !!localStorage.getItem("globetech-user");
  });

  const logout = () => {
    localStorage.removeItem("globetech-user");
    setIsUser(false);
  }

  const handleNavClick = (target) => {
    const element = document.getElementById(target);

    if (element) {
      scrollToElement(element, 80, 700);
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <img src={Logo} alt="Logo" className="navbar-logo" />
        <h1 className="navbar-title">GlobeSystem</h1>
      </div>

      <div className="navbar-right">
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleNavClick(item.target)}
            className="nav-items"
          >
            <span>{item.label}</span>
          </div>
        ))}

        {isUser ? (
          <button className="logout-button" onClick={() => logout()}>Log Out</button>
        ) : (
          <NavLink className="login-button" to="/login" end>
            <button>Login</button>
          </NavLink>
        )}

      </div>

      {/* Mobile hamburger */}
      <button
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleNavClick(item.target)}
            className="mobile-nav-item"
          >
            {item.label}
          </div>
        ))}

        {isUser ? <button className="mobile-logout-button" onClick={() => logout()}>Log Out</button>
          : <NavLink className="mobile-login-button" to="/login" end>
            <button>Login</button>
          </NavLink>
        }
      </div>
    </div>
  )
}
