import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ArticlesPageTemplate from './ArticlesPageTemplate';

const ArticlesPage = ({ data }) => {
  const { edges: articles } = data.allMarkdownRemark;

  return (
    <Layout>
      <ArticlesPageTemplate
        articles={articles.map(({ node: art }) =>
          ({ ...art.frontmatter, slug: art.fields.slug, id: art.id})
        )}
      />
    </Layout>
  )
};

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ArticlesPage;

export const pageQuery = graphql`
  query ArticlesPageTemplate {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {templateKey: {eq: "article"}}}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            titre
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
