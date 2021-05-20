import React from 'react';
import Icon from '@mdi/react';

import Layout from '../components/Layout';

import { mdiPhoneClassic } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiDomain } from '@mdi/js';
import facebook from '../../static/img/facebook.svg';
import instagram from '../../static/img/instagram.svg';

const ContactPage = () => {
  return (
    <Layout>
      <section className="section is-medium">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-two-fifths">
            <div className="block mb-6">
              <h1 className="title is-1">Me contacter</h1>
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
          <div className="column is-two-fifths">
            <form name="contact" method="POST" data-netlify="true">
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <label className="label">Nom</label>
                      <div className="control">
                        <input className="input" type="text" />
                      </div>
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded has-icons-left has-icons-right">
                      <label className="label">Prénom</label>
                      <div className="control">
                        <input className="input" type="text" />
                      </div>
                    </p>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input" type="email" />
                  <span className="icon is-small is-left">
                    <Icon path={mdiEmail} size="1.33em" />
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label">Message</label>
                <div className="control">
                  <textarea className="textarea"></textarea>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-primary" type="submit">Envoyer</button>
                </div>
              </div>
            </form>
          </div>
          <div className="column"></div>
        </div>
      </section>
    </Layout>
  )
};

export default ContactPage;
