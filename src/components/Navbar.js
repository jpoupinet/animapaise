import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import logo from '../../static/img/logo.svg';
import logoTexte from '../../static/img/logo-texte.svg';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [navbarActiveClass, setNavbarActiveClass] = useState('');

  const toggleHamburger = () => {
    setActive(!active);
  };

  useEffect(() => {
    active ? setNavbarActiveClass('is-active') : setNavbarActiveClass('');
  }, [active]);

  return (
    <nav
      className="navbar is-primary"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Accueil">
            <img
              src={logo}
              className="is-hidden-touch"
              alt="Animapaise logo"
              width="150"
              height="150"
            />
            <img
              src={logo}
              className="is-hidden-desktop"
              alt="Animapaise logo"
              width="80"
              height="80"
            />
            <img
              src={logoTexte}
              className="is-hidden-touch"
              alt="Animapaise logo"
              width="200"
              height="100"
            />
            <img
              src={logoTexte}
              className="is-hidden-desktop"
              alt="Animapaise logo"
              width="150"
              height="75"
            />
          </Link>
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navbarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${navbarActiveClass}`}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/mediation">
              MEDIATION ANIMALE
            </Link>
            <Link className="navbar-item" to="/comportement-education">
              COMPORTEMENT CANIN
            </Link>
            <Link className="navbar-item" to="/activites-sports">
              ACTIVITES ET SPORTS CANINS
            </Link>
            <Link className="navbar-item" to="/a-propos">
              A PROPOS
            </Link>
            <Link className="navbar-item" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;