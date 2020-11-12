import React from "react";
import { makeStyles } from "@material-ui/core/styles"; 
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "../../icons/HomeIcon"


const useStyles = makeStyles((theme) => ({
 background:{
   backgroundColor:'#232323',
 },
 title:{
  fontFamily:'Fugaz One',
  color: '#F6F6F6',
  fontSize:'25px',
},
text: {
  fontFamily:'Montserrat',
  color: '#F6F6F6',
  fontSize:'16px',
}
}));

const PlusInfosTirroir = (props) => {
  const classes=useStyles()

  return (
    <div>
      <Accordion>
        <AccordionSummary className={classes.background}
          expandIcon={<HomeIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

        <Typography className={classes.title}>{props.title}</Typography>
        </AccordionSummary>

        <AccordionDetails className={classes.background}>
        <Typography className={classes.text}>{props.text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PlusInfosTirroir;
