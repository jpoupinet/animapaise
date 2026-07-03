import React, { useEffect } from "react"
import Icon from "@mdi/react"

import Layout from "../components/Layout"

import { mdiDomain } from "@mdi/js"
import facebook from "../../static/img/facebook.svg"
import instagram from "../../static/img/instagram.svg"

const ContactPage = () => {
  useEffect(() => {
    window.Tally?.loadEmbeds()
  }, [])

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
                Si vous souhaitez être accompagné·e dans la mise en place de
                techniques d'entraînement aux soins avec votre animal, dans la
                résolution d'un problème de comportement de réactivité ou
                d'agressivité chez votre chien, l'initiation à un sport canin,
                l'arrivée d'un chien des rues ou si vous êtes une structure ou
                un particulier souhaitant mettre en place un programme de
                médiation animal, n'hésitez pas à me contacter en remplissant le
                formulaire de contact et en précisant votre demande.
              </p>
              <p className="block has-text-weight-bold">
                Des délais de prise en charge peuvent être présents pour
                certaines prestations. Merci de bien regarder sur la page du
                service qui vous intéresse.
              </p>
              <p className="block">
                Anim'Apaise est localisé sur Orvault et sur Grandchamp des
                Fontaines au Nord de Nantes, en Loire-Atlantique (44).
              </p>
            </div>
            <div className="block">
              <span className="icon-text">
                <span className="icon">
                  <Icon path={mdiDomain} />
                </span>
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
                  style={{ width: "1em", height: "1em" }}
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
                  style={{ width: "1em", height: "1em" }}
                />
              </a>
            </div>
          </div>
          <div className="column is-1"></div>
          <div className="column is-5">
            <iframe
              data-tally-src="https://tally.so/embed/xXzAp5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1820"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Formulaire de contact"
            ></iframe>
          </div>
          <div className="column is-1"></div>
        </div>
      </section>
      <script>Tally.loadEmbeds();</script>
    </Layout>
  )
}

export default ContactPage
