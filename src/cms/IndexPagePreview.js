import React from 'react';
import PropTypes from 'prop-types';
import IndexPageTemplate from '../templates/IndexPageTemplate';
import '../all.sass';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        services={data.services}
        certifications={data.certifications}
        featuredArticles={[]}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default IndexPagePreview;
