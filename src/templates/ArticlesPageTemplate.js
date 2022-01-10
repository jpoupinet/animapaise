import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import CarteArticle from '../components/CarteArticle';

const ArticlesPageTemplate = ({ articles }) => {
  return (
    <div>
      <Helmet title={`Articles - Anim'Apaise`} />
      <section className="section">
        <h1 className="title is-3 has-text-centered">Les articles de Anim'Apaise</h1>
      </section>
      <section className="section mb-6">
        <div className="container">
          <div className="columns is-multiline">
            {
              articles.map((article) =>
                <div className="column is-4" key={article.id}>
                  <CarteArticle
                    titre={article.title}
                    description={article.description}
                    image={article.featuredimage}
                    date={article.date}
                    lien={article.slug}
                  />
                </div>
              )
            }
          </div>
        </div>
      </section>
    </div>
  )
};

ArticlesPageTemplate.propTypes = {
  articles: PropTypes.array,
};

export default ArticlesPageTemplate;
