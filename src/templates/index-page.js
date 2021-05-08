import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { BgImage } from 'gbimage-bridge';

import Layout from '../components/Layout';
import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Presentation from '../components/Presentation';

const IndexPageTemplate = ({
  mainpitch,
  intro,
  presentations,
  decouvrir,
}) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  return (
    <div>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container is-fluid is-flex">
            <div className="columns is-vcentered">
              <div className="column"></div>
              <div className="column is-two-fifths">
                <div className="container">
                  <h2 className="title is-2">{mainpitch.title}</h2>
                  <div className="block">{mainpitch.description}</div>
                </div>
              </div>
              <div className="column"></div>
              <div className="column is-two-fifths">
                <div className="container has-text-centered">
                  <PreviewCompatibleImage
                    imageInfo={{ alt: 'Animapaise logo', image: mainpitch.image }}
                  />
                </div>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-primary">
        <div className="container">
          <div className="block has-text-white">
            <h1 className="title is-1 has-text-white">{intro.heading}</h1>
            <p>{intro.description}</p>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </section>
      <section className="section">
        <div className="container">
          {presentations.map((pres, i) =>
            <Presentation
              key={`presentation${i}`}
              photo={pres.photo}
              titre={pres.titre}
              description={pres.description}
              positionPhoto={(i % 2 === 0 || width <= 768) ? 'gauche' : 'droite'}
            />
          )}
        </div>
      </section>
      <BgImage
        className="hero is-halfheight"
        image={decouvrir.image.childImageSharp.gatsbyImageData}
      >
        <div className="
          hero-body
          is-flex-direction-column
          is-justify-content-space-around
          is-align-items-flex-start
        ">
          <h2
            className="title is-2 has-text-white"
            style={{ width: '40%', textShadow: '1px 1px 2px black' }}
          >
            {decouvrir.title}
          </h2>
          <div className="block">
            <Link to="/" className="button is-primary is-large">{decouvrir.lien}</Link>
          </div>
        </div>
      </BgImage>
    </div>
  )
};

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  intro: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  presentations: PropTypes.array,
  decouvrir: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        presentations={frontmatter.presentations}
        decouvrir={frontmatter.decouvrir}
      />
    </Layout>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          description
          image {
            childImageSharp {
              gatsbyImageData(
                width: 800
                quality: 64
              )
            }
          }
        }
        intro {
          heading
          description
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(
                  width: 180
                  quality: 64
                  placeholder: TRACED_SVG
                )
              }
            }
            text
          }
        }
        presentations {
          photo {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                height: 800
                quality: 64
              )
            }
          }
          titre
          description
        }
        decouvrir {
          title
          lien
          image {
            childImageSharp {
              gatsbyImageData(
                quality: 64
              )
            }
          }
        }
      }
    }
  }
`;
