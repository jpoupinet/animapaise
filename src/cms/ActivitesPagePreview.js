import React from 'react';
import PropTypes from 'prop-types';
import ActivitesPageTemplate from '../templates/ActivitesPageTemplate';
import '../all.sass';

const ActivitesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ActivitesPageTemplate
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

ActivitesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ActivitesPagePreview;
