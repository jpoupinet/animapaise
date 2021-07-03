import React from 'react';
import Icon from '@mdi/react';

import Layout from '../components/Layout';

import { mdiPhoneClassic } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiDomain } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import facebook from '../../static/img/facebook.svg';
import instagram from '../../static/img/instagram.svg';

const ContactPage = () => {
  return (
    <Layout title="Anim'Apaise - Contact">
      <section className="section is-medium">
        <div className="columns">
          <div className="column is-1"></div>
          <div className="column">
            <h1 className="title">Me contacter</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-1"></div>
          <div className="column is-4">
            <div className="block">
              <p className="block">
                Que vous souhaitiez organiser une séance de médiation animale dans votre structure,
                à votre domicile ou auprès de mes poneys, réserver un cours avec votre chien à
                votre domicile ou sur le terrain dédié, avoir plus d'informations sur les
                prestations proposées par Anim'Apaise, ou toute autre question...
              </p>
              <p className="block">
                N'hésitez pas à me contacter aux coordonnées ci-dessous ou en remplissant
                le formulaire de contact en précisant votre demande.
              </p>
              <p className="block">
                Anim'Apaise est localisé sur Orvault, avec des ateliers ou cours pouvant se passer
                sur Grandchamp des Fontaines, en Loire-Atlantique (44). Je peux me déplacer
                dans tout le département ainsi que les départements alentours au besoin
                (jusqu'à 1h30 de déplacement maximum de mon domicile) : Morbihan (56),
                Île-et-Vilaine (35), Maine-et-Loire (49) ainsi qu'en Vendée (85).
              </p>
            </div>
            <div className="block">
              <span className="icon-text">
                <span className="icon"><Icon path={mdiPhoneClassic} /></span>
                <a href="tel:0783049090">07 83 04 90 90</a>
              </span>
            </div>
            <div className="block">
              <span className="icon-text">
                <span className="icon"><Icon path={mdiEmail} /></span>
                <a href="mailto:contact@animapaise.fr">contact@animapaise.fr</a>
              </span>
            </div>
            <div className="block">
              <span className="icon-text">
                <span className="icon"><Icon path={mdiDomain} /></span>
                <span>Siret : 841.866.254.00029</span>
              </span>
            </div>
            <div className="block social">
              <a
                title="facebook"
                target="_blank"
                rel="noreferrer"
                href="https://facebook.com/animapaise"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
              <a
                title="instagram"
                target="_blank"
                rel="noreferrer"
                href="https://instagram.com/anim_apaise"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  style={{ width: '1em', height: '1em' }}
                />
              </a>
            </div>
          </div>
          <div className="column is-1"></div>
          <div className="column is-5">
            <form
              name="contact"
              method="POST"
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <label className="label">
                      Nom - Prénom - Structure
                      <div className="control has-icons-left">
                        <input className="input" type="text" name="nom" />
                        <span className="icon is-small is-left">
                          <Icon path={mdiAccount} size="1.33em" />
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">
                  Email
                  <div className="control has-icons-left">
                    <input className="input" type="email" name="email" />
                    <span className="icon is-small is-left">
                      <Icon path={mdiEmail} size="1.33em" />
                    </span>
                  </div>
                </label>
              </div>

              <div className="field">
                <label className="label">
                  Message
                  <textarea className="textarea" name="message" rows="10"></textarea>
                </label>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-primary" type="submit">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
          <div className="column is-1"></div>
        </div>
      </section>
    </Layout>
  )
};

export default ContactPage;
