import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import PrestationsMAPageTemplate from './PrestationsMAPageTemplate';

const PrestationsMAPage = ({ data }) => {
  const { edges: prestations } = data.allMarkdownRemark;

  return (
    <Layout>
      <PrestationsMAPageTemplate
        prestations={prestations}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
};

PrestationsMAPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default PrestationsMAPage;

export const pageQuery = graphql`
  query PrestationsMAPageTemplate {
    allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "prestation-ma"}}}
    ) {
      edges {
        node {
          html
          frontmatter {
            titre
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  quality: 64
                  placeholder: TRACED_SVG
                )
              }
            }
            prix
          }
        }
      }
    }
  }
`;
