import React from 'react';
import PropTypes from 'prop-types';
import AProposPageTemplate from '../templates/AProposPageTemplate';
import '../all.sass';

const AProposPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <AProposPageTemplate
        imageIntro={data.imageIntro}
        content={widgetFor('body')}
        presentation={data.presentation}
        diplomesCertificats={data.diplomesCertificats}
        formationsStages={data.formationsStages}
        experiences={data.experiences}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

AProposPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default AProposPagePreview;
