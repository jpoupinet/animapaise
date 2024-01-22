import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import { HTMLContent } from '../components/Content';
import ServiceTemplate from './ServiceTemplate';

const Service = ({ data }) => {
  const { markdownRemark: service } = data;

  return (
    <Layout>
      <ServiceTemplate
        content={service.html}
        contentComponent={HTMLContent}
        photoHaut={service.frontmatter.photoHaut}
        videoHaut={service.frontmatter.videoHaut}
        nomService={service.frontmatter.nomService}
        lienComplementaire={service.frontmatter.lienComplementaire}
        titreLienComplementaire={service.frontmatter.titreLienComplementaire}
        tarifs={service.frontmatter.tarifsService}
        imagesBasDePage={service.frontmatter.imagesBasDePage}
      />
    </Layout>
  )
};

Service.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Service;

export const pageQuery = graphql`
  query ServiceById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        photoHaut {
          childImageSharp {
            gatsbyImageData(
              width: 2500
              quality: 64
              placeholder: TRACED_SVG
              layout: FULL_WIDTH
            )
          }
        }
        videoHaut {
          publicURL
        }
        nomService
        lienComplementaire
        titreLienComplementaire
        tarifsService {
          titre
          sousTitre
          image {
            childImageSharp {
              gatsbyImageData(
                width: 300
                quality: 64
                placeholder: TRACED_SVG
              )
            }
          }
          dureePrix
          description
        }
        imagesBasDePage {
          image {
            childImageSharp {
              gatsbyImageData(
                width: 600
                height: 500
                quality: 64
                placeholder: TRACED_SVG
              )
            }
          }
          survolImage
        }
      }
    }
  }
`;
