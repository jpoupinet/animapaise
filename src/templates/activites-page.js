import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import ActivitesPageTemplate from './ActivitesPageTemplate';

const ActivitesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout title="Anim'Apaise - Activités et sports canins">
      <ActivitesPageTemplate
        imageIntro={post.frontmatter.imageIntro}
        titrePage={post.frontmatter.titrePage}
        content={post.html}
        contentComponent={HTMLContent}
        titreCartes={post.frontmatter.titreCartes}
        cartes={post.frontmatter.cartes}
      />
    </Layout>
  )
};

ActivitesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ActivitesPage;

export const pageQuery = graphql`
  query ActivitesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "activites-page" } }) {
      html
      frontmatter {
        imageIntro {
          childImageSharp {
            gatsbyImageData(
              width: 2500
              quality: 64
              placeholder: TRACED_SVG
            )
          }
        }
        titrePage
        titreCartes
        cartes {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                quality: 64
                placeholder: TRACED_SVG
              )
            }
          }
          texte
          lien
        }
      }
    }
  }
`;
