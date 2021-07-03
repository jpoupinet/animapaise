import React from 'react';

import Layout from '../components/Layout';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

import imageBanniere from '../../static/img/2021-06-11_01-09-27.jpg';

const PeccramPage = () => {
  return (
    <Layout title="Anim'Apaise - PECCRAM">
      <div>
        {/* Banniere */}
        <PreviewCompatibleImage
          imageInfo={{ alt: '', image: imageBanniere }}
          imageStyle={{
            display: 'inline-block',
            maxHeight: '40em',
            width: '100%',
            objectFit: 'cover'
          }}
        />
        <section className="section my-6 p-6 has-text-centered">
          <h1 className="title is-1 p-6">A venir ...</h1>
        </section>
      </div>
    </Layout>
  )
};

export default PeccramPage;
