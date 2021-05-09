import React from 'react';
import { Link } from 'gatsby';

import logo from '../../static/img/logo.svg';
import facebook from '../../static/img/facebook.svg';
import instagram from '../../static/img/instagram.svg';

const Footer = () => {
  return (
    <footer className="footer has-background-primary has-text-white">
      <div className="container has-text-centered">
        <img
          src={logo}
          alt="Animapaise logo"
          style={{ width: '18em', height: '18em' }}
        />
      </div>
      <div className="has-text-white">
        <div className="columns">
          <div className="column is-4 has-text-centered">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link className="navbar-item" to="/mediation">
                    Médiation animale
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/comportement-education">
                    Comportement canin
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/activites-sports">
                    Activités et sports canins
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/a-propos">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/blog">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </section>
          </div>
          <div className="column is-4 has-text-centered contact-info">
            <div className="block">
              <a href="tel:0783049090">07 83 04 90 90</a>
            </div>
            <div className="block">
              <a href="mailto:contact@animapaise.fr">contact@animapaise.fr</a>
            </div>
            <div className="block">Siret : 841.866.254.00029</div>
          </div>
          <div className="column is-4 social has-text-centered">
            <a title="facebook" target="_blank" href="https://facebook.com/animapaise">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a title="instagram" target="_blank" href="https://instagram.com/anim_apaise">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
