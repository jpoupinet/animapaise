import React from 'react';
import PropTypes from 'prop-types';
import ComportementPageTemplate from '../templates/ComportementPageTemplate';
import '../all.sass';

const ComportementPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ComportementPageTemplate
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

ComportementPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ComportementPagePreview;
