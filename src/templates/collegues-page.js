import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import ColleguesPageTemplate from './ColleguesPageTemplate';

const ColleguesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ColleguesPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        titrePage={post.frontmatter.titrePage}
        presentations={post.frontmatter.presentations}
        blurbs={post.frontmatter.blurbs}
      />
    </Layout>
  )
};

ColleguesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ColleguesPage;

export const pageQuery = graphql`
  query ColleguesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "collegues-page" } }) {
      html
      frontmatter {
        titrePage
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
    }
  }
`;
