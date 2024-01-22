import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import dashify from 'dashify';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const ArticleTemplate = ({
  content,
  contentComponent,
  titre,
  date,
  auteur,
  description,
  image,
  tags,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      <Helmet titleTemplate="%s - Anim'Apaise">
        <title>{`${titre}`}</title>
        <meta
          name="description"
          content={`${description}`}
        />
      </Helmet>
      <PreviewCompatibleImage
        imageInfo={{ alt: '', image }}
        imageStyle={{ display: 'inline-block', maxHeight: '30rem', width: '100%' }}
      />
      <section className="section">
        <div className="container">
          <h1 className="title is-3 has-text-centered">{titre}</h1>
          <div className='has-text-centered'>
            <p className='is-italic'>{`par ${auteur}`}</p>
            <p className='has-text-weight-semibold'>Le {date}</p>
          </div>
          <div
            className="container"
            style={{ fontSize: '1.1rem' }}
          >
            <PageContent className="article-content content p-6" content={content} />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <h4 className='title is-5'>Mots-clés</h4>
          {tags.map((tag, i) =>
            <Link to={`/motscles/${dashify(tag)}`} key={`${tag}-${i}`}>
              <span className='m-3'>{tag}</span>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
};

ArticleTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  titre: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default ArticleTemplate;
