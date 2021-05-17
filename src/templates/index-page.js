import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

import logo from '../../static/img/logo.svg';
import logoTexte from '../../static/img/logo-texte.svg';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <section className="hero is-fullheight is-primary has-text-centered">
        <div className="hero-body container">
          <div className="columns is-flex is-flex-direction-column">
            <div className="column">
              <img
                src={logo}
                alt="Animapaise logo"
                style={{ width: '20em', height: '20em' }}
              />
            </div>
            <div className="column">
              <img
                src={logoTexte}
                alt="Animapaise logo"
                style={{ width: '30em', height: '10em' }}
              />
            </div>
          </div>
        </div>
        <h2 className="title is-2 p-3">Site en construction, à très vite !</h2>
      </section>
    </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;
