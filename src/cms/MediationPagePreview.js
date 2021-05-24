import React from 'react';
import PropTypes from 'prop-types';
import MediationPageTemplate from '../templates/MediationPageTemplate';
import '../all.sass';

const MediationPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <MediationPageTemplate
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

MediationPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default MediationPagePreview;
