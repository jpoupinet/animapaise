import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import SportPageTemplate from './SportPageTemplate';

const HoopersPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout title="Anim'Apaise - Hoopers">
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

HoopersPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HoopersPage;

export const pageQuery = graphql`
  query HoopersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "hoopers-page" } }) {
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
