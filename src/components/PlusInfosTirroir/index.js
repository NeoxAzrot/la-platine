import React from "react";
import styles from './PlusInfosTirroir.module.css'
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "../../icons/HomeIcon"
const PlusInfosTirroir = (props) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary className = {styles.background}
          expandIcon={<HomeIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >

        <Typography className={styles.title}>{props.title}</Typography>
        </AccordionSummary>

        <AccordionDetails className={styles.background}>
        <Typography className={styles.text}>{props.text}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default PlusInfosTirroir;
