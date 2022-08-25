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
      role="navigation"
      aria-label="navigation"
    >
      {/* <div className="container"> */}
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
          onKeyDown={() => toggleHamburger()}
          role="button"
          tabIndex={0}
          aria-label="Bouton Menu"
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
        <div className="navbar-start has-text-centered ml-3">
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link is-arrowless" to="/mediation">MÉDIATION ANIMALE</Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/mediation/collegues">
                Mes collègues à quatre pattes
              </Link>
              <Link className="navbar-item" to="/mediation/prestations-ma">
                Nos prestations et ateliers
              </Link>
              <Link className="navbar-item" to="/mediation/peccram">
                Programme PECCRAM
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/comportement">
            COMPORTEMENT CANIN
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <Link className="navbar-link is-arrowless" to="/activites">
              ACTIVITÉS ET SPORTS CANINS
            </Link>
            <div className="navbar-dropdown">
              <Link className="navbar-item" to="/activites/oberythmee">
                Obérythmée
              </Link>
              <Link className="navbar-item" to="/activites/agility">
                Agility loisir
              </Link>
              <Link className="navbar-item" to="/activites/hoopers">
                Hoopers
              </Link>
              <Link className="navbar-item" to="/activites/medical-training">
                Medical-training
              </Link>
              <Link className="navbar-item" to="/activites/shaping">
                Shaping
              </Link>
            </div>
          </div>
          <Link className="navbar-item" to="/a-propos">
            À PROPOS
          </Link>
          <Link className="navbar-item" to="/articles">
            ARTICLES
          </Link>
          <Link className="navbar-item" to="/contact">
            CONTACT
          </Link>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;