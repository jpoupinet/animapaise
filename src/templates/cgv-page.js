import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import CGVPageTemplate from './CGVPageTemplate';

const CGVPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <CGVPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
};

CGVPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CGVPage;

export const pageQuery = graphql`
  query CGVPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "cgv-page" } }) {
      html
    }
  }
`;
