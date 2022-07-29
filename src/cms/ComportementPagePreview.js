import React from 'react';
import PropTypes from 'prop-types';
import SportPageTemplate from '../templates/SportPageTemplate';
import '../all.sass';

const ComportementPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <SportPageTemplate
        imageIntro={data.imageIntro}
        survolImageIntro={data.survolImageIntro}
        titrePage={data.titrePage}
        content={widgetFor('body')}
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

ComportementPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ComportementPagePreview;
