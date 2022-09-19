import React from 'react';

import Layout from '../components/Layout';

const MentionsLegalesPage = () => {
  return (
    <Layout title="Anim'Apaise - Mentions légales">
      <section className="section is-medium">
        <div className="container">
          <h1 className="title">Mentions légales</h1>
          <p className="block">
            En vertu de l’article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique, <br />il est précisé aux utilisateurs du site Internet www.animapaise.fr
            l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
          </p>
          <ul className="block">
            <li>Éditeur : MADAME BOURDON SOPHIE</li>
            <li>SIRET : 841.866.254.00029</li>
            <li>Responsable de publication : MADAME BOURDON SOPHIE – 07 83 04 90 90</li>
            <li>Délégué à la protection des données : MADAME BOURDON SOPHIE</li>
            <li>Webmaster : MONSIEUR POUPINET JULIEN</li>
            <li>Hébergeur : NETLIFY</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
};

export default MentionsLegalesPage;
