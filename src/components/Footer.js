import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

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
      <div className="block has-text-white">
        <div className="columns">
          <div className="column is-4 has-text-centered">
            <section className="menu">
              <ul className="menu-list">
                <li>
                  <Link className="navbar-item" to="/a-propos">
                    À propos
                  </Link>
                </li>
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
                        <li key={`lienFooterPage${i}`}>
                          <Link
                            className="navbar-item"
                            to={`/${page.node.frontmatter.lienService}`}
                          >
                            {page.node.frontmatter.nomService}
                          </Link>
                        </li>
                      )
                  }
                />
                <li>
                  <a className="navbar-item" href="https://animapaise.teachizy.fr/" target="_blank">
                    Formations en ligne
                  </a>
                </li>
                <li>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="navbar-item" to="/articles">
                    Articles
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
            <div className="block">
              <Link to="/mentions-legales">Mentions légales</Link>
            </div>
            <div className="block">
              <Link to="/cgv">CGV</Link>
            </div>
          </div>
          <div className="column is-4 social has-text-centered">
            <a
              title="facebook"
              target="_blank"
              rel="noreferrer"
              href="https://facebook.com/animapaise"
            >
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            <a
              title="instagram"
              target="_blank"
              rel="noreferrer"
              href="https://instagram.com/anim_apaise"
            >
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="block container has-text-centered is-size-7">
        <p>Site réalisé par Julien Poupinet</p>
      </div>
    </footer>
  );
};

export default Footer;
