import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ActivitesPageTemplate from './ActivitesPageTemplate';

// const ActivitesPage = ({ data }) => {
const ActivitesPage = () => {
  // const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ActivitesPageTemplate
      />
    </Layout>
  )
};

// ActivitesPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default ActivitesPage;

// export const pageQuery = graphql`
//   query ActivitesPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "activites-page" } }) {
//       frontmatter {
        
//       }
//     }
//   }
// `;
