import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import MediationPageTemplate from './MediationPageTemplate';

// const MediationPage = ({ data }) => {
const MediationPage = () => {
  // const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <MediationPageTemplate
      />
    </Layout>
  )
};

// MediationPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default MediationPage;

// export const pageQuery = graphql`
//   query MediationPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "mediation-page" } }) {
//       frontmatter {
        
//       }
//     }
//   }
// `;
