import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content'
import AProposPageTemplate from './AProposPageTemplate';

const AProposPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AProposPageTemplate
        imageIntro={post.frontmatter.imageIntro}
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
};

AProposPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AProposPage;

export const pageQuery = graphql`
  query AProposPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "a-propos-page" } }) {
      html
      frontmatter {
        imageIntro {
          childImageSharp {
            gatsbyImageData(
              width: 1000
              quality: 64
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  }
`;
