import React from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Prestation = ({
  data,
  contentComponent,
  index,
}) => {
  if (!data) return null;

  const { frontmatter: prestation } = data.node;
  const PageContent = contentComponent || Content;

  return (
    <div className={index % 2 === 0 ? 'has-background-white' : 'has-background-primary'}>
      <section className="section has-text-centered">
        <h2 className={`title is-3 ${index % 2 === 0 ? 'has-text-primary' : 'has-text-white'}`}>
          {prestation.titre}
        </h2>
        <div className="columns">
          <div className="column is-flex is-justify-content-flex-end">
            <PreviewCompatibleImage
              imageInfo={{ alt: `Prestation ${prestation.titre}`, image: prestation.image }}
            />
          </div>
          <div className="column is-flex is-justify-content-flex-start is-align-items-center p-5">
            <div style={{ maxWidth: 700, fontSize: '1.1rem' }}>
              <PageContent
                className={`
                  content ${index % 2 === 0 ? 'has-text-black' : 'has-text-white'}
                `}
                content={data.node.html}
              />
            </div>
          </div>
        </div>
        <h3 className={`
          title is-4 mb-0 ${index % 2 === 0 ? 'has-text-primary' : 'has-text-white'}
        `}>
          {prestation.prix}
        </h3>
        <h4 className={`is-italic ${index % 2 === 0 ? 'has-text-primary' : 'has-text-white'}`}>
          Des tarifs préférentiels peuvent être accordés en fonction du nombre de séances demandées.
        </h4>
      </section>
    </div>
  )
};

Prestation.propTypes = {
  data: PropTypes.object,
  contentComponent: PropTypes.func,
};

export default Prestation;
