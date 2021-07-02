import React from 'react';
import PropTypes from 'prop-types';
import PrestationsMAPageTemplate from '../templates/PrestationsMAPageTemplate';
import '../all.sass';

const PrestationsMAPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <PrestationsMAPageTemplate />
    );
  } else {
    return <div>Loading...</div>;
  }
}

PrestationsMAPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PrestationsMAPagePreview;
