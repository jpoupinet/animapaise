import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const MediationPageTemplate = ({
  content,
  contentComponent,
  imageIntro,
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
            <div className="container has-text-centered">
              <PageContent className="content p-6" content={content} />
            </div>
          </div>
        </div>
      </section>
      {/* Cartes */}
      <section className="section is-medium has-background-primary mb-6">
        <div className="container">
          <div className="columns">
            {
              cartes.map((carte, i) =>
                <div className="column" key={`carte${i}`}>
                  <div className="card">
                    <div className="card-image">
                      <PreviewCompatibleImage
                        imageInfo={{ alt: 'Image carte Mediation animale', image: carte.image }}
                      />
                    </div>
                    <div className="card-footer">
                      <Link
                        to={`/mediation/${carte.lien}`}
                        className="card-footer-item"
                      >
                        {carte.texte}
                      </Link>
                    </div>
                  </div>
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
};

export default MediationPageTemplate;
