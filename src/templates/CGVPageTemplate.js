import React from 'react';
import PropTypes from 'prop-types';

import Content from '../components/Content';

const CGVPageTemplate = ({
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section is-medium">
      <div className="container">
        <h1 className="title is-3">Conditions Générales de Vente</h1>
        <PageContent className="content mt-6" content={content} />
      </div>
    </section>
  )
};

CGVPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default CGVPageTemplate;
