import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import AProposPageTemplate from './AProposPageTemplate';

const AProposPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AProposPageTemplate
        imageIntro={post.frontmatter.imageIntro}
        content={post.html}
        contentComponent={HTMLContent}
        presentation={post.frontmatter.presentation}
        diplomesCertificats={post.frontmatter.diplomesCertificats}
        formationsStages={post.frontmatter.formationsStages}
        experiences={post.frontmatter.experiences}
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
        presentation {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 500
                quality: 64
                placeholder: TRACED_SVG
              )
            }
          }
          description
        }
        diplomesCertificats {
          annee
          description
          organisme
        }
        formationsStages {
          annee
          description
          organisme
        }
        experiences {
          annee
          description
          organisme
        }
      }
    }
  }
`;
