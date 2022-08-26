import React from 'react';
import PropTypes from 'prop-types';
import IndexPageTemplate from '../templates/IndexPageTemplate';
import '../all.sass';

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        mainpitch={data.mainpitch}
        intro={data.intro}
        presentations={data.presentations}
        featuredArticles={data.featuredArticles}
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
