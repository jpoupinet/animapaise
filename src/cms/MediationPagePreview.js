import React from 'react';
import PropTypes from 'prop-types';
import MediationPageTemplate from '../templates/MediationPageTemplate';
import '../all.sass';

const MediationPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <MediationPageTemplate
        content={widgetFor('body')}
        titrePage={data.titrePage}
        imageIntro={data.imageIntro}
        titreCartes={data.titreCartes}
        cartes={data.cartes}
        citation={data.citation}
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
