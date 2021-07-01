import React from 'react';
import PropTypes from 'prop-types';
import SportPageTemplate from '../templates/SportPageTemplate';
import '../all.sass';

const SportPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <SportPageTemplate
        imageIntro={data.imageIntro}
        survolImageIntro={data.survolImageIntro}
        titrePage={data.titrePage}
        content={data.body}
        prerequis={data.prerequis}
        tarifs={data.tarifs}
        sousTexteTarifs={data.sousTexteTarifs}
        imagesBasDePage={data.imagesBasDePage}
        liensCreditPhoto={data.liensCreditPhoto}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

SportPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default SportPagePreview;
