import React from 'react';
import PropTypes from 'prop-types';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const SportPageTemplate = ({
  imageIntro,
  titrePage,
  content,
  contentComponent,
  prerequis,
  tarifs,
  sousTexteTarifs,
  imagesBasDePage,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Banniere */}
      <PreviewCompatibleImage
        imageInfo={{ alt: '', image: imageIntro }}
        imageStyle={{ display: 'inline-block', maxHeight: '20em', width: '100%' }}
      />

      <section className="section">
        <div className="container">

          {/* Titre page */}
          <h1 className="title is-3 has-text-centered">{titrePage}</h1>

          <div className="columns">
            {/* Body + Pré requis */}
            <div className="column is-8 p-6">
              <div style={{ fontSize: '1.1rem' }}>
                <PageContent className="content" content={content} />
              </div>
              <div className="block mt-6">
                <h3 className="title is-4">Pré-requis</h3>
                <ul className="liste-prerequis pl-5">
                  {
                    prerequis.map((pr, i) =>
                      <li key={`pr${i}`}>{pr.texte}</li>
                    )
                  }
                </ul>
              </div>
            </div>

            {/* Tarifs */}
            <div className="column is-4 p-6">
              <h3 className="title is-4">Tarifs</h3>
              <div className="pl-5">
                <ul className="liste-tarifs">
                  {
                    tarifs.map((tarif, i) =>
                      <li key={`tarif${i}`}>{tarif.texte}</li>
                    )
                  }
                </ul>
                <p className="block mt-4 is-italic">{sousTexteTarifs}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Images bas de page */}
      <section className="section has-text-centered">
        {
          imagesBasDePage.map((img, i) =>
            <PreviewCompatibleImage
              imageInfo={{ alt: '', image: img.image }}
              key={`imgBasDePage${i}`}
            />
          )
        }
      </section>
    </div>
  )
};

SportPageTemplate.propTypes = {
  imageIntro: PropTypes.object,
  titrePage: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  prerequis: PropTypes.array,
  tarifs: PropTypes.array,
  sousTexteTarifs: PropTypes.string,
  imagesBasDePage: PropTypes.array,
};

export default SportPageTemplate;