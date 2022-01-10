import React from 'react';
import PropTypes from 'prop-types';
import ArticleTemplate from '../templates/article';
import '../all.sass';

const ArticlePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <ArticleTemplate data={data}/>
    );
  } else {
    return <div>Loading...</div>;
  }
}

ArticlePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ArticlePreview;
