import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const SportPageTemplate = ({
  imageIntro,
  survolImageIntro,
  titrePage,
  content,
  contentComponent,
  prerequis,
  tarifs,
  sousTexteTarifs,
  imagesBasDePage,
  liensCreditPhoto,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Banniere */}
      <PreviewCompatibleImage
        imageInfo={{ alt: '', image: imageIntro, title: survolImageIntro }}
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
              {
                tarifs.map((tarif, i) =>
                  <div className="mb-3" key={`tarifs-${tarif.titre}-${i}`}>
                    <p className="is-underlined has-text-weight-bold mb-3">{tarif.titre}</p>
                    <div className="pl-5">
                      <ul className="liste-tarifs">
                        {
                          tarif.tarifs.map((t, i) =>
                            <li key={`tarif${i}`}>{t.texte}</li>
                          )
                        }
                      </ul>
                    </div>
                  </div>
                )
              }
              <p className="block mt-4 is-italic">{sousTexteTarifs}</p>
              <Link to="/cgv" className="is-underlined has-text-weight-bold">
                Conditions Générales de Vente
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Images bas de page */}
      <section className="section has-text-centered">
        <div className="container">
          <div className="images-bas-de-page columns is-justify-content-center is-gapless">
            {
              imagesBasDePage.map((img, i) =>
                <div className="column" key={`imgBasDePage${i}`}>
                  <PreviewCompatibleImage
                    imageInfo={{ alt: '', image: img.image, title: img.survolImage }}
                  />
                </div>
              )
            }
          </div>
        </div>
      </section>

      {/* Crédits photo */}
      <div className="container has-text-centered mb-3">
        {
          liensCreditPhoto.map((cred, i) =>
            <a
              href={cred.lien}
              className="is-size-6 is-italic mx-3"
              target="_blank"
              rel="noreferrer"
              key={`creditPhoto${i}`}
            >
              {cred.texte}
            </a>
          )
        }
      </div>
    </div>
  )
};

SportPageTemplate.propTypes = {
  imageIntro: PropTypes.object,
  survolImageIntro: PropTypes.string,
  titrePage: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  prerequis: PropTypes.array,
  tarifs: PropTypes.array,
  sousTexteTarifs: PropTypes.string,
  imagesBasDePage: PropTypes.array,
  liensCreditPhoto: PropTypes.array,
};

export default SportPageTemplate;
