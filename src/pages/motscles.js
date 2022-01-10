import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import dashify from 'dashify';

import Layout from '../components/Layout';

const MotsClesPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <Layout>
      <Helmet title={`Mots clés - ${title}`} />
      <section className="section is-medium mb-6">
        <div className="container content">
          <h1 className="title is-size-2 is-bold-light mb-6">Mots clés des articles</h1>
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/motscles/${dashify(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
};

export default MotsClesPage;

export const motsClesPageQuery = graphql`
  query MotsClesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
