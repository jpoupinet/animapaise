import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import SportPageTemplate from './SportPageTemplate';

const AgilityPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SportPageTemplate
        imageIntro={post.frontmatter.imageIntro}
        survolImageIntro={post.frontmatter.survolImageIntro}
        titrePage={post.frontmatter.titrePage}
        content={post.html}
        contentComponent={HTMLContent}
        prerequis={post.frontmatter.prerequis}
        tarifs={post.frontmatter.tarifs}
        sousTexteTarifs={post.frontmatter.sousTexteTarifs}
        imagesBasDePage={post.frontmatter.imagesBasDePage}
        liensCreditPhoto={post.frontmatter.liensCreditPhoto}
      />
    </Layout>
  )
};

AgilityPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AgilityPage;

export const pageQuery = graphql`
  query AgilityPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "agility-page" } }) {
      html
      frontmatter {
        imageIntro {
          childImageSharp {
            gatsbyImageData(
              width: 2500
              quality: 64
              placeholder: TRACED_SVG
            )
          }
        }
        survolImageIntro
        titrePage
        prerequis {
          texte
        }
        tarifs {
          titre
          sousTitre
          tarifs {
            texte
          }
        }
        sousTexteTarifs
        imagesBasDePage {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 400
                height: 300
                quality: 64
                placeholder: TRACED_SVG
              )
            }
          }
          survolImage
        }
        liensCreditPhoto {
          texte
          lien
        }
      }
    }
  }
`;
