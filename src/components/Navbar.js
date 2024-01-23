import React, { useState, useEffect } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
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
          <Link className="navbar-item" to="/a-propos">
            À PROPOS
          </Link>
          <div className="navbar-item has-dropdown is-hoverable">
            <span className="navbar-link is-arrowless">SERVICES</span>
            <div className="navbar-dropdown">
              <StaticQuery
                query={graphql`
                  query {
                    allMarkdownRemark(
                      filter: {frontmatter: {templateKey: {eq: "service"}}}
                    ) {
                      edges {
                        node {
                          frontmatter {
                            lienService
                            nomService
                            ordre
                          }
                        }
                      }
                    }
                  }
                `}
                render={data =>
                  data.allMarkdownRemark.edges
                    .sort((a, b) => a.node.frontmatter.ordre - b.node.frontmatter.ordre)
                    .map((page, i) => 
                      <Link
                        className="navbar-item"
                        to={`/${page.node.frontmatter.lienService}`}
                        key={`lienNavbarPage${i}`}
                      >
                        {page.node.frontmatter.nomService}
                      </Link>
                    )
                }
              />
            </div>
          </div>
          <Link className="navbar-item" to="/contact">
            CONTACT
          </Link>
          <Link className="navbar-item" to="/articles">
            ARTICLES
          </Link>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;