import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const ServiceTemplate = ({
  content,
  contentComponent,
  photoHaut,
  videoHaut,
  nomService,
  lienComplementaire,
  titreLienComplementaire,
  tarifs,
  imagesBasDePage,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet titleTemplate="%s - Anim'Apaise">
        <title>{`${nomService}`}</title>
        <meta
          name="description"
          content={`${nomService}`}
        />
      </Helmet>

      {
        photoHaut &&
        <PreviewCompatibleImage
          imageInfo={{ alt: '', image: photoHaut }}
          imageStyle={{ display: 'inline-block', maxHeight: '30rem', width: '100%' }}
        />
      }

      {
        videoHaut &&
        <video
          autoPlay muted loop playsInline
          style={{ maxHeight: '30rem', width: '100%', objectFit: 'cover' }}
        >
          <source src={videoHaut.publicURL} type="video/mp4" />
          Votre navigateur web est incompatible avec la vidéo.
        </video>
      }

      <section className="section">
        <div className="container">
          <h1 className="title is-2 has-text-centered">{nomService}</h1>
          <div
            className="container"
            style={{ fontSize: '1.1rem' }}
          >
            <PageContent className="article-content content p-6" content={content} />
            {
              lienComplementaire && (
                <div className="container has-text-centered">
                  <Link
                    to={lienComplementaire}
                    className="button is-primary"
                    style={{ whiteSpace: 'unset', height: 'auto' }}
                  >
                    {titreLienComplementaire}
                  </Link>
                </div>
              )
            }
          </div>
        </div>
      </section>

      <section
        className='section px-6 is-flex is-justify-content-center is-flex-wrap-wrap'
      >
        {
          tarifs.map((tarif, i) => (
            <div
              className='tarif p-6 mb-3 has-background-light'
              style={{ width: 'fit-content', maxWidth: '30rem' }}
              key={`tarif${i}`}
            >
              <h4 className='title has-text-centered is-4'>{tarif.titre}</h4>
              <h5 className='title has-text-centered is-5'>{tarif.sousTitre}</h5>

              <div className="has-text-centered">
                <PreviewCompatibleImage
                  imageInfo={{ alt: '', image: tarif.image }}
                />
              </div>
              
              <p className='mt-3 has-text-centered has-text-weight-bold'>{tarif.dureePrix}</p>

              <ReactMarkdown className='markdown my-5'>
                {tarif.description}
              </ReactMarkdown>
            </div>
          ))
        }
      </section>

      <section className="section has-text-centered">
        <div>
          <Link to="/cgv" className="is-underlined has-text-weight-bold">
            Conditions Générales de Vente
          </Link>
        </div>
        <div>
          <Link to="/zi-frais-deplacement" className="is-underlined has-text-weight-bold">
            Zone d'intervention et frais de déplacement
          </Link>
        </div>
      </section>

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
    </div>
  )
};

ServiceTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  photoHaut: PropTypes.object,
  nomService: PropTypes.string,
  lienComplementaire: PropTypes.string,
  titreLienComplementaire: PropTypes.string,
  tarifs: PropTypes.array,
  imagesBasDePage: PropTypes.array,
};

export default ServiceTemplate;
