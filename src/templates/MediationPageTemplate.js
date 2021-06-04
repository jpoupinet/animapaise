import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const MediationPageTemplate = ({
  content,
  contentComponent,
  titrePage,
  imageIntro,
  titreCartes,
  cartes,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Intro */}
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <PreviewCompatibleImage
              imageInfo={{ alt: 'Image Mediation animale', image: imageIntro }}
            />
          </div>
          <div className="column is-8">
            <h1 className="title is-3 has-text-centered mb-0">{titrePage}</h1>
            <div className="container has-text-centered">
              <PageContent className="content p-6" content={content} />
            </div>
          </div>
        </div>
      </section>
      {/* Cartes */}
      <section className="section has-background-primary pt-4 mb-6">
        <div className="container">
          <h2 className="title is-3 has-text-centered has-text-white">{titreCartes}</h2>
          <div className="columns">
            {
              cartes.map((carte, i) =>
                <div className="column" key={`carte${i}`}>
                  <Link to={`/mediation/${carte.lien}`}>
                    <div className="card carte-mediation">
                      <div className="card-image">
                        <PreviewCompatibleImage
                          imageInfo={{ alt: 'Image carte Mediation animale', image: carte.image }}
                        />
                      </div>
                      <div className="card-footer">
                        <span className="card-footer-item">{carte.texte}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
};

MediationPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  imageIntro: PropTypes.object,
  cartes: PropTypes.object,
};

export default MediationPageTemplate;
