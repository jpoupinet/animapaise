import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Features from '../components/Features';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Presentation from '../components/Presentation';
import CarteArticle from '../components/CarteArticle';

const IndexPageTemplate = ({
  mainpitch,
  intro,
  presentations,
  featuredArticles,
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
                {
                  width && width <= 768 ?
                    <div className="container has-text-centered">
                      <PreviewCompatibleImage
                        imageInfo={{ alt: '', image: mainpitch.image }}
                      />
                    </div>
                    :
                    <div className="container">
                      <h2 className="title is-2">{mainpitch.title}</h2>
                      <div className="block">
                        <p className="is-size-5">{mainpitch.description}</p>
                      </div>
                    </div>
                }
              </div>
              <div className="column"></div>
              <div className="column is-two-fifths">
                {
                  width && width <= 768 ?
                    <div className="container">
                      <h2 className="title is-2">{mainpitch.title}</h2>
                      <div className="block">
                        <p className="is-size-5">{mainpitch.description}</p>
                      </div>
                    </div>
                    :
                    <div className="container has-text-centered">
                      <PreviewCompatibleImage
                        imageInfo={{ alt: '', image: mainpitch.image }}
                      />
                    </div>
                }
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-primary">
        <div className="container">
          <div className="block has-text-white">
            <h2 className="title is-1 has-text-white">{intro.heading}</h2>
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
              lien={pres.lien}
              titreLien={pres.titreLien}
              positionPhoto={(i % 2 === 0 || width <= 768) ? 'gauche' : 'droite'}
            />
          )}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="block mb-6">
            <h2 className="title is-2">
              Anim'Apaise c'est aussi du partage d'expériences et de connaissances
            </h2>
          </div>
          <div className="columns is-multiline">
            {
              featuredArticles.map((article) =>
                <div className="column is-4" key={article.id}>
                  <CarteArticle
                    titre={article.title}
                    description={article.description}
                    image={article.featuredimage}
                    date={article.date}
                    lien={article.slug}
                  />
                </div>
              )
            }
          </div>
        </div>
      </section>
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
  featuredArticles: PropTypes.object,
};

export default IndexPageTemplate;
