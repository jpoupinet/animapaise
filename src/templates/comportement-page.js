import React from 'react';
// import PropTypes from 'prop-types';
// import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ComportementPageTemplate from './ComportementPageTemplate';

// const ComportementPage = ({ data }) => {
const ComportementPage = () => {
  // const { frontmatter } = data.markdownRemark

  return (
    <Layout title="Anim'Apaise - Comportement canin">
      <ComportementPageTemplate
      />
    </Layout>
  )
};

// ComportementPage.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.shape({
//       frontmatter: PropTypes.object,
//     }),
//   }),
// };

export default ComportementPage;

// export const pageQuery = graphql`
//   query ComportementPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "comportement-page" } }) {
//       frontmatter {
        
//       }
//     }
//   }
// `;
