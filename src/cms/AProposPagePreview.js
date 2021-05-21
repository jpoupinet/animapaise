import React from 'react';
import PropTypes from 'prop-types';
import AProposPageTemplate from '../templates/AProposPageTemplate';
import '../all.sass';

const AProposPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <AProposPageTemplate
        // mainpitch={data.mainpitch}
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
  getAsset: PropTypes.func,
};

export default AProposPagePreview;
