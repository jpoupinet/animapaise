import React from 'react';
import PropTypes from 'prop-types';
import MediationPageTemplate from '../templates/MediationPageTemplate';
import '../all.sass';

const MediationPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <MediationPageTemplate
        content={data.body}
        imageIntro={data.imageIntro}
        cartes={data.cartes}
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
  widgetFor: PropTypes.func,
};

export default MediationPagePreview;
