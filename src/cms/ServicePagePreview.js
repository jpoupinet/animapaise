import React from 'react';
import PropTypes from 'prop-types';
import ServicePageTemplate from '../templates/ServiceTemplate';
import '../all.sass';

const ServicePagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ServicePageTemplate
        content={widgetFor('body')}
        photoHaut={data.photoHaut}
        nomService={data.nomService}
        lienComplementaire={data.lienComplementaire}
        titreLienComplementaire={data.titreLienComplementaire}
        tarifs={data.tarifsService}
        imagesBasDePage={data.imagesBasDePage}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

ServicePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ServicePagePreview;
