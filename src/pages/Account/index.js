import React from 'react'
import Layout from 'components/Layout'
import styles from './Account.module.css'
import Title from 'components/Title'
import SettingsIcon from 'icons/SettingsIcon'
import { Link } from 'react-router-dom'
import ContainerVinyl from 'components/ContainerVinyl'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import MyPistAccount from 'components/MyPistAccount'
import ArtistMostListenAccount from 'components/ArtistMostListenAccount'
import MySuggestionAccount from 'components/MySuggestionAccount'

const Account = () => {
  return (
    <Layout>
      <Title name="Compte"/>
      <div className={styles.container}>
        <Link to="/account/settings" className={styles.settings}><SettingsIcon/></Link>
        <div className={styles.myVinyl}>
          <h2>Mes vinyles</h2>
          <ContainerVinyl vinyls={
            [
              [
                "key1",
                "../images/album13.jpg"
              ],
              [
                "key2",
                "../images/album1.jpg"
              ],
              [
                "key3",
                "../images/album11.jpg"
              ],
              [
                "key4",
                "../images/album12.jpg"
              ]
            ]
          }/>
        </div>
        <div className={styles.myPist}>
          <Link className={styles.titlePist} to="/account/likes">
            <h2>Mes pistes</h2>
            <ArrowUpIcon/>
          </Link>
          <MyPistAccount singles={
              [
                [
                  "key1",
                  "../images/album15.jpg",
                  "Fun",
                  "50 Push...",
                  "Skegss"
                ],
                [
                  "key2",
                  "../images/album8.jpg",
                  "Despair...",
                  "Shake S...",
                  "The Dø"
                ],
                [
                  "key3",
                  "../images/album5.jpg",
                  "Balanc...",
                  "Brol",
                  "Angèle"
                ],
                [
                  "key4",
                  "../images/album7.jpg",
                  "Killing i...",
                  "Rage A...",
                  "Rage A..."
                ],
                [
                  "key5",
                  "../images/album15.jpg",
                  "Oui ou ...",
                  "Brol la ...",
                  "Angèle"
                ],
                [
                  "key6",
                  "../images/album1.jpg",
                  "Ta reine",
                  "Brol",
                  "Angèle"
                ],
                [
                  "key7",
                  "../images/album9.jpg",
                  "Lumino...",
                  "BRICKS",
                  "Petit Ma..."
                ],
                [
                  "key8",
                  "../images/album10.jpg",
                  "Primitif",
                  "Xeu",
                  "Vald"
                ],
                [
                  "key9",
                  "../images/album1.jpg",
                  "Tout Ou...",
                  "Brol",
                  "Angèle, R..."
                ]
              ]
            }/>
        </div>
        <div className={styles.myLikeVinyl}>
          <h2>Vinyles likés</h2>
          <ContainerVinyl vinyls={
            [
              [
                "key1",
                "../images/album13.jpg"
              ],
              [
                "key2",
                "../images/album14.jpg"
              ],
              [
                "key3",
                "../images/album6.jpg"
              ],
              [
                "key4",
                "../images/album12.jpg"
              ]
            ]
          }/>
        </div>
        <div className={styles.myArtist}>
          <h2>Artistes les plus écoutés</h2>
          <ArtistMostListenAccount artists={
            [
              [
                "key1",
                "../images/angele.jpg",
                "Angèle"
              ],
              [
                "key2",
                "../images/pomme.jpg",
                "Pomme"
              ],
              [
                "key3",
                "../images/album8.jpg",
                "The Dø"
              ],
              [
                "key4",
                "../images/aya.jpg",
                "Aya Nak..."
              ],
              [
                "key5",
                "../images/acdc.jpg",
                "ACDC"
              ],
              [
                "key6",
                "../images/album15.jpg",
                "Skegss"
              ]
            ]
          }/>
        </div>
        <div className={styles.mySuggestion}>
          <h2>Suggestions</h2>
          <MySuggestionAccount vinyls={
            [
              [
                "key1",
                "../images/album16.jpg"
              ],
              [
                "key2",
                "../images/album17.jpg"
              ],
              [
                "key3",
                "../images/album18.jpg"
              ],
              [
                "key4",
                "../images/album19.jpg"
              ],
              [
                "key5",
                "../images/album20.jpg"
              ]
            ]
          }/>
        </div>
      </div>
    </Layout>
  )
}

export default Account
