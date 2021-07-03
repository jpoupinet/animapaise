import React from 'react';
import PropTypes from 'prop-types';
import ZIFraisDeplacementPageTemplate from '../templates/ZIFraisDeplacementPageTemplate';
import '../all.sass';

const ZIFraisDeplacementPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ZIFraisDeplacementPageTemplate
        content={widgetFor('body')}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

ZIFraisDeplacementPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ZIFraisDeplacementPagePreview;
