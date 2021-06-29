import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import PreviewCompatibleBgImage from '../components/PreviewCompatibleBgImage';
import Presentation from '../components/Presentation';

const IndexPageTemplate = ({
  mainpitch,
  intro,
  presentations,
  decouvrir,
}) => {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  return (
    <div>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-vcentered">
              <div className="column"></div>
              <div className="column is-two-fifths">
                <div className="container">
                  <h2 className="title is-2">{mainpitch.title}</h2>
                  <div className="block">
                    <p className="is-size-5">{mainpitch.description}</p>
                  </div>
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
            <p style={{ fontSize: '1.1rem' }}>{intro.description}</p>
          </div>
          <Features gridItems={intro.blurbs} />
        </div>
      </section>
      <section className="section presentations">
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
      <PreviewCompatibleBgImage
        bgImageClass="hero decouvrir"
        imageInfo={{ image: decouvrir.image }}
      >
        <div
          className="
            hero-body
            is-flex-direction-column
            is-justify-content-space-around
            is-align-items-flex-start
          "
        >
          <h2
            className="title is-2 has-text-white"
            style={{ width: `${width <= 768 ? 100 : 40}%`, textShadow: '1px 1px 2px black' }}
          >
            {decouvrir.title}
          </h2>
          <div className="block">
            <Link to="/" className="button is-primary is-large">{decouvrir.lien}</Link>
          </div>
        </div>
      </PreviewCompatibleBgImage>
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

export default IndexPageTemplate;
