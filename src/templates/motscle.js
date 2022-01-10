import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import CarteArticle from '../components/CarteArticle';

const MotsCle = ({ data, pageContext }) => {
  const articles = data.allMarkdownRemark.edges;
  const tag = pageContext.tag;
  const title = data.site.siteMetadata.title;
  const totalCount = data.allMarkdownRemark.totalCount;
  const tagHeader = `${totalCount} article${totalCount === 1 ? '' : 's'} avec le mot clé ${tag}`;

  return (
    <Layout>
      <Helmet title={`Articles "${tag}" - ${title}`} />
      <section className="section">
        <div className="container content">
          <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
          <div className="columns is-multiline">
            {
              articles.map(article => (
                <div className="column is-4" key={article.node.id}>
                  <CarteArticle
                    titre={article.node.frontmatter.title}
                    description={article.node.frontmatter.description}
                    image={article.node.frontmatter.featuredimage}
                    date={article.node.frontmatter.date}
                    lien={article.node.fields.slug}
                  />
                </div>
              ))
            }
          </div>
          <p className='mt-6 is-size-5'>
            <Link to="/motscles/">Parcourir tous les mots clés</Link>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default MotsCle;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredimage {
              childImageSharp {
                gatsbyImageData(
                  width: 700
                  height: 500
                  quality: 64
                  placeholder: TRACED_SVG
                )
              }
            }
            date(formatString: "DD MMMM YYYY", locale: "fr")
          }
        }
      }
    }
  }
`;
