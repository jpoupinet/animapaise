import React from 'react';
import PropTypes from 'prop-types';
import CGVPageTemplate from '../templates/CGVPageTemplate';
import '../all.sass';

const CGVPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <CGVPageTemplate
        content={widgetFor('body')}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

CGVPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default CGVPagePreview;
