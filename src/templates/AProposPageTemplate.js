import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const AProposPageTemplate = ({
  imageIntro,
  content,
  contentComponent,
  presentation,
  diplomesCertificats,
  formationsStages,
  experiences,
}) => {
  const PageContent = contentComponent || Content;

  const [width, setWidth] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

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
    <section className="section a-propos">
      <section className="section a-propos-intro">
        <div className="columns">
          <div className="column is-6 p-0 pb-3 is-flex is-align-items-center">
            <div className="container has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{ alt: 'Image a propos', image: imageIntro }}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="container has-text-centered">
              <h1 className="title is-2">Sophie Bourdon</h1>
              <PageContent className="content p-6" content={content} />
            </div>
          </div>
        </div>
      </section>
      
      <div className="block presentation-a-propos">
        {
          width > 768 ?
            <div
              className="columns is-gapless"
              style={{
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              <div className="column has-background-primary is-flex is-align-items-center">
                <div className="block has-text-white p-5">
                  <p className="has-text-centered">{presentation.description}</p>
                </div>
              </div>
              <div className="column is-flex is-one-quarter" style={{ maxHeight: '10em' }}>
                <PreviewCompatibleImage
                  imageInfo={{ alt: 'Presentation', image: presentation.image }}
                />
              </div>
            </div>
            :
            <div
              className="columns is-gapless mx-3"
              style={{
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}
            >
              <div className="column is-flex" style={{ maxHeight: '10em' }}>
                <PreviewCompatibleImage
                  imageInfo={{ alt: 'Presentation', image: presentation.image }}
                  imageStyle={{ width: '100%' }}
                />
              </div>
              <div className="column has-background-primary">
                <div className="block has-text-white p-5">
                  <p className="has-text-justified">{presentation.description}</p>
                </div>
              </div>
            </div>
        }
      </div>

      <section className="section">
        <div className="container">
          <div className="tabs is-centered mb-6">
            <ul>
              <li className={activeTab === 1 ? 'is-active' : ''} onClick={() => handleTabClick(1)}>
                <a>
                  <span>Diplômes / Certificats</span>
                </a>
              </li>
              <li className={activeTab === 2 ? 'is-active' : ''} onClick={() => handleTabClick(2)}>
                <a>
                  <span>Formations / Stages</span>
                </a>
              </li>
              <li className={activeTab === 3 ? 'is-active' : ''} onClick={() => handleTabClick(3)}>
                <a>
                  <span>Expériences</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            {activeTab === 1 && (
              <div className="liste-a-propos is-active">
                <ul>
                  {
                    diplomesCertificats.map((form, i) => (
                      <li key={`form${i}`}>
                        <div className="columns">
                          <div className="column is-3">
                            <span className="has-text-weight-semibold">{form.annee} : </span>
                          </div>
                          <div className="column">
                            <p>{form.description}</p>
                            <p className="is-italic has-text-grey">{form.organisme}</p>
                          </div>
                        </div>
                      </li>
                    ))
                    }
                </ul>
              </div>
            )}

            {activeTab === 2 && (
              <div className="liste-a-propos is-active">
                <ul>
                  {
                    formationsStages.map((form, i) =>
                      <li key={`form${i}`}>
                        <div className="columns">
                          <div className="column is-3">
                            <span className="has-text-weight-semibold">{form.annee} : </span>
                          </div>
                          <div className="column">
                            <p>{form.description}</p>
                            <p className="is-italic has-text-grey">{form.organisme}</p>
                          </div>
                        </div>
                      </li>
                    )
                  }
                </ul>
              </div>
            )}

            {activeTab === 3 && (
              <div className="liste-a-propos is-active">
                <ul>
                  {
                    experiences.map((exp, i) => (
                      <li key={`exp${i}`}>
                        <div className="columns">
                          <div className="column is-3">
                            <span className="has-text-weight-semibold">{exp.annee} : </span>
                          </div>
                          <div className="column">
                            <p>{exp.description}</p>
                            <p className="is-italic has-text-grey">{exp.organisme}</p>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

    </section>
  )
};

AProposPageTemplate.propTypes = {
  imageIntro: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AProposPageTemplate;
