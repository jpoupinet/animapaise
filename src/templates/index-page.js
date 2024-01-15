import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import IndexPageTemplate from './IndexPageTemplate';

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges: featuredArticles } = data.featuredArticles

  return (
    <Layout>
      <IndexPageTemplate
        services={frontmatter.services}
        featuredArticles={featuredArticles.map(({ node: art }) =>
          ({ ...art.frontmatter, slug: art.fields.slug, id: art.id })
        )}
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
        services {
          photo {
            childImageSharp {
              gatsbyImageData(
                width: 2350
                height: 1000
                quality: 64
              )
            }
          }
          titre
          description
          lien
          titreLien
        }
      }
    }
    featuredArticles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: {eq: "article"}
          featuredpost: {eq: true}
        }
      }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM YYYY", locale: "fr")
            description
            featuredpost
            featuredimage {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  height: 500
                  quality: 64
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
      }
    }
  }
`;
