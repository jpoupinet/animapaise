import React from 'react';
import PropTypes from 'prop-types';
import ColleguesPageTemplate from '../templates/ColleguesPageTemplate';
import '../all.sass';

const ColleguesPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ColleguesPageTemplate
        content={data.body}
        titrePage={data.titrePage}
        presentations={data.presentations}
        blurbs={data.blurbs}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

ColleguesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ColleguesPagePreview;
