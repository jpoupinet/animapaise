import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import SportPageTemplate from './SportPageTemplate';

const ShapingPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SportPageTemplate
        imageIntro={post.frontmatter.imageIntro}
        titrePage={post.frontmatter.titrePage}
        content={post.html}
        contentComponent={HTMLContent}
        prerequis={post.frontmatter.prerequis}
        tarifs={post.frontmatter.tarifs}
        sousTexteTarifs={post.frontmatter.sousTexteTarifs}
        imagesBasDePage={post.frontmatter.imagesBasDePage}
      />
    </Layout>
  )
};

ShapingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ShapingPage;

export const pageQuery = graphql`
  query ShapingPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "shaping-page" } }) {
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
        prerequis {
          texte
        }
        tarifs {
          texte
        }
        sousTexteTarifs
        imagesBasDePage {
          image {
            childImageSharp {
              gatsbyImageData(
                height: 270
                quality: 64
                placeholder: TRACED_SVG
                transformOptions: {
                  fit: CONTAIN
                }
              )
            }
          }
        }
      }
    }
  }
`;