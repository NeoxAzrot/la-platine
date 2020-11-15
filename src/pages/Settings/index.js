import React from 'react'
import Layout from 'components/Layout'
import styles from './Settings.module.css'
import Title from 'components/Title'
import ArrowUpIcon from 'icons/ArrowUpIcon'
import { Link } from 'react-router-dom'
import Slider from 'components/Slider'
import Switch from 'components/Switch'
    
const Settings = () => {
  const packages = require('../../../package.json') // Pour afficher la version dynamiquement
  const user = 'Sami Lafrance'
  return (
    <Layout>
      <Title name='Paramètres'/>
      <div className={styles.container}>
        <Link to="/account" className={styles.arrow}><ArrowUpIcon/></Link>
        <h1>Paramètres</h1>
        <div className={styles.category}>
          <h2>Lecture</h2>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Mode hors connexion</h3>
              <p>Une fois déconnecté, vous aurez uniquement accès à la musique et aux podcasts que vous avez téléchargés.</p>
            </div>
            <div className={styles.switch}>
              <Switch name="mode_hors_connexion" checked={false}/>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Lecture en continu</h3>
              <p>Active la lecture en continue.</p>
            </div>
            <div className={styles.switch}>
              <Switch name="lecture_en_continu" checked={true}/>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Afficher les titres indisponibles</h3>
              <p>Affichez les titres indisponibles dans votre pays.</p>
            </div>
            <div className={styles.switch}>
              <Switch name="afficher_les_titres_indisponibles" checked={false}/>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Normaliser le volume</h3>
              <p>Définir le même volume pour tous les titres.</p>
            </div>
            <div className={styles.switch}>
              <Switch name="normaliser_le_volume" checked={true}/>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Lecture automatique</h3>
              <p>Continuez à écouter des morceaux similaires lorsque votre musique se termine.</p>
            </div>
            <div className={styles.switch}>
              <Switch name="lecture_automatique" checked={true}/>
            </div>
          </div>
          <div className={styles.itemSlider}>
            <div className={styles.text}>
              <h3>Fondu enchaîné</h3>
              <p>Permet d'activer le fondu enchaîné des pistes.</p>
            </div>
            <div className={styles.slider}>
              <span className={styles.textSlider}>Off</span>
              <Slider step={1} min={0} max={10} defaultValue={0}/>
              <span className={styles.textSlider}>10 s</span>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h2>Qualité sonore</h2>
          <div className={styles.itemSlider}>
            <div className={styles.text}>
              <h3>Streaming</h3>
              <p>+ de qualité, + de forfait mangé</p>
            </div>
            <div className={styles.slider}>
              <span className={styles.textSlider}>Faible</span>
              <Slider step={1} min={1} max={3} defaultValue={3}/>
              <span className={styles.textSlider}>Élevée</span>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h2>Notifications</h2>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Notifications</h3>
              <p>Recevoir les notifications.</p>
            </div>
            <div className={styles.switch}>
              <Switch name="notifications" checked={false}/>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h2>Plus d'infos</h2>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Version</h3>
              <p>{packages.version}</p>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>CGU</h3>
              <p>Tout ce qu'il faut savoir.</p>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Politique de confidentialité</h3>
              <p>Important pour vous et pour nous.</p>
            </div>
          </div>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Assistance</h3>
              <p>Laissez notre équipe et nos utilisateurs vous aider.</p>
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <h2>Autre</h2>
          <div className={styles.itemSwitch}>
            <div className={styles.text}>
              <h3>Déconnexion</h3>
              <p>Vous êtes connecté en tant que {user}.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Settings
