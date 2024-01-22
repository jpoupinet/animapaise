import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import ArticleTemplate from './ArticleTemplate';

const Article = ({ data }) => {
  const { markdownRemark: article } = data;

  return (
    <Layout>
      <ArticleTemplate
        content={article.html}
        contentComponent={HTMLContent}
        titre={article.frontmatter.title}
        date={article.frontmatter.date}
        auteur={article.frontmatter.auteur}
        description={article.frontmatter.description}
        image={article.frontmatter.featuredimage}
        tags={article.frontmatter.tags}
      />
    </Layout>
  )
};

Article.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Article;

export const pageQuery = graphql`
  query ArticleById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "fr")
        auteur
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(
              width: 2500
              quality: 64
              placeholder: TRACED_SVG
              layout: FULL_WIDTH
            )
          }
        }
        tags
      }
    }
  }
`;
