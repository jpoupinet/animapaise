import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import IndexPageTemplate from './IndexPageTemplate';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        presentations={frontmatter.presentations}
        decouvrir={frontmatter.decouvrir}
        wrapperWindow={typeof window !== `undefined` ? window : null}
      />
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

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 64
              )
            }
          }
        }
        intro {
          heading
          description
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  quality: 64
                  placeholder: TRACED_SVG
                )
              }
            }
            text
          }
        }
        presentations {
          photo {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                height: 800
                quality: 64
              )
            }
          }
          titre
          description
        }
        decouvrir {
          title
          lien
          image {
            childImageSharp {
              gatsbyImageData(
                quality: 64
              )
            }
          }
        }
      }
    }
  }
`;
