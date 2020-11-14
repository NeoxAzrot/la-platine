import React from 'react'
import Layout from 'components/Layout'
import styles from './Artist.module.css'
import Title from 'components/Title'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import { Link } from 'react-router-dom'
import Accordion from 'components/Accordion'
import AvatarArtist from 'components/AvatarArtist'
import ContainerSingle from 'components/ContainerSingle'
import ContainerVinyl from 'components/ContainerVinyl'

const Artist = () => {
  return (
    <Layout>
      <Title name="Artiste"/>
      <div className={styles.container}>
        <Link to="/" className={styles.arrow}><ArrowUpIcon/></Link>
        <div className={styles.artist}>
          <AvatarArtist url="../images/angele.jpg" alt="Angèle"/>
          <h1>Angèle</h1>
        </div>
        <Accordion title="Description" visible={false}>
          <p className={styles.description}>
            Angèle est l’incarnation parfaite de sa génération, magmatique et syncrétique, où les frontières entre les genres 
            musicaux ne sont plus qu’un souvenir lointain. De la pop, du rap et de l’électro et bien plus encore. Longtemps 
            dans les pas de Damso et Stromae, Angèle marche désormais à leurs côtés. La Belgique tient son nouveau prodige.
          </p>
        </Accordion>
        <Accordion title="Titres" visible={true}>
          <ContainerSingle singles={
              [
                [
                  "key1",
                  "../images/album1.jpg",
                  "Tout Oublier",
                  "Brol",
                  "Angèle, Roméo"
                ],
                [
                  "key2",
                  "../images/album1.jpg",
                  "Ta reine",
                  "Brol",
                  "Angèle"
                ],
                [
                  "key3",
                  "../images/album5.jpg",
                  "Balance ton porc",
                  "Brol",
                  "Angèle"
                ],
                [
                  "key4",
                  "../images/album3.jpg",
                  "Oui ou non",
                  "Brol la suite",
                  "Angèle"
                ]
              ]
            }/>  
        </Accordion>
        <Accordion title="Vinyles" visible={true}>
          <ContainerVinyl vinyls={
              [
                [
                  "key1",
                  "../images/album1.jpg"
                ],
                [
                  "key2",
                  "../images/album2.jpg"
                ],
                [
                  "key3",
                  "../images/album3.jpg"
                ],
                [
                  "key4",
                  "../images/album4.jpg"
                ]
              ]
            }/>
        </Accordion>
        <Accordion title="Plus d'infos" visible={false}>
          <ul className={styles.link}>
            <li>
              <a href="https://www.instagram.com/angele_vl" target="_blank" rel="noreferrer">
                <div className={styles.socialList}>
                  <i className="fab fa-instagram"></i>
                </div>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/angele_vl" target="_blank" rel="noreferrer">
                <div className={styles.socialList}>
                  <i className="fab fa-twitter"></i>
                </div>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/angeleouenpoudre" target="_blank" rel="noreferrer">
                <div className={styles.socialList}>
                  <i className="fab fa-facebook-f"></i>
                </div>
                <span>Facebook</span>
              </a>
            </li>
          </ul>
        </Accordion>
      </div>
    </Layout>
  )
}

export default Artist
