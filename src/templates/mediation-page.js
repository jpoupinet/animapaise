import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import MediationPageTemplate from './MediationPageTemplate';

const MediationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout title="Anim'Apaise - Médiation animale">
      <MediationPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        titrePage={post.frontmatter.titrePage}
        imageIntro={post.frontmatter.imageIntro}
        titreCartes={post.frontmatter.titreCartes}
        cartes={post.frontmatter.cartes}
        citation={post.frontmatter.citation}
      />
    </Layout>
  )
};

MediationPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MediationPage;

export const pageQuery = graphql`
  query MediationPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "mediation-page" } }) {
      html
      frontmatter {
        titrePage
        imageIntro {
          childImageSharp {
            gatsbyImageData(
              width: 1600
              quality: 64
              placeholder: TRACED_SVG
            )
          }
        }
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
        citation {
          texte
          auteur
        }
      }
    }
  }
`;
