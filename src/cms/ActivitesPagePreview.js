import React from 'react';
import PropTypes from 'prop-types';
import ActivitesPageTemplate from '../templates/ActivitesPageTemplate';
import '../all.sass';

const ActivitesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ActivitesPageTemplate
        imageIntro={data.imageIntro}
        titrePage={data.titrePage}
        content={data.body}
        titreCartes={data.titreCartes}
        cartes={data.cartes}
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
