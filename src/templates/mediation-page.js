import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content'
import MediationPageTemplate from './MediationPageTemplate';

const MediationPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <MediationPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        imageIntro={post.frontmatter.imageIntro}
        cartes={post.frontmatter.cartes}
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
        imageIntro {
          childImageSharp {
            gatsbyImageData(
              width: 1600
              quality: 64
              placeholder: TRACED_SVG
            )
          }
        }
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
