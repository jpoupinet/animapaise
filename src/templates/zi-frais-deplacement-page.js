import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import ZIFraisDeplacementPageTemplate from './ZIFraisDeplacementPageTemplate';

const ZIFraisDeplacementPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ZIFraisDeplacementPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
};

ZIFraisDeplacementPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ZIFraisDeplacementPage;

export const pageQuery = graphql`
  query ZIFraisDeplacementPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "zi-frais-deplacement-page" } }) {
      html
    }
  }
`;
