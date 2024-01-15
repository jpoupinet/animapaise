import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import PreviewCompatibleBgImage from '../components/PreviewCompatibleBgImage';
import CarteArticle from '../components/CarteArticle';

const IndexPageTemplate = ({
  services,
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
      <section className="services">
        {services.map((serv, i) =>
          <div key={`service${i}`}>
            <PreviewCompatibleBgImage
              bgImageClass="hero is-large"
              imageInfo={{ image: serv.photo }}
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
                  className="title is-1 has-text-white"
                  style={{ width: `${width <= 768 ? 100 : 40}%`, textShadow: '1px 1px 2px black' }}
                >
                  {serv.titre}
                </h2>
                <div className="block">
                  <Link to={serv.lien} className="button is-primary is-large">
                    {serv.titreLien}
                  </Link>
                </div>
              </div>
            </PreviewCompatibleBgImage>
            <section
              className="section container is-size-5"
              style={{
                paddingTop: `${width >= 768 ? '7rem' : '3rem'}`,
                paddingBottom: `${width >= 768 ? '7rem' : '3rem'}`
              }}
            >
              <ReactMarkdown>{serv.description}</ReactMarkdown>
            </section>
          </div>
        )}
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
