import React from 'react';
import PropTypes from 'prop-types';

import Content from '../components/Content';

const ZIFraisDeplacementPageTemplate = ({
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title is-3">Zone d'intervention et frais de déplacement</h1>
        <PageContent className="content p-6" content={content} />
      </div>
    </section>
  )
};

ZIFraisDeplacementPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default ZIFraisDeplacementPageTemplate;
