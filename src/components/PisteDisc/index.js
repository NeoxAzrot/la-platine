import React from 'react'
import Disc from "components/Disc"
import PisteInfos from "components/PisteInfos"

const PisteDisc = (props) => {
    return (
        <div>
    <Disc size={165} image={props.image}/>
    <PisteInfos title={props.title} artist={props.artist} vinyl={props.vinyl}/>

    </div>
    ) 
    
}
export default PisteDisc