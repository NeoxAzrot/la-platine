import React from "react"
import styles from "./ContainerVinyl.module.css"
import PochetteVinyl from "components/PochetteVinyl"



const ContainerVinyl = (props) => {
    return (
     <div className={styles.container}>

        {props.images.map((image) => {
         return (
           <div className={styles.cover}> 
            <PochetteVinyl src={image}/>
          </div> 
          )
        })}

        </div> 
      )
    }
      
export default ContainerVinyl


/* renommer composant = container
props = tableau -> mettre dedans src 
faire un maps du tableau */