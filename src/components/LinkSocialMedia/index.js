import React from "react";
import { makeStyles } from "@material-ui/core/styles"; 
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  link:{
    fontFamily:'Montserrat',
    color:'#F6F6F6',
  },
  
 }));



const Links = (props) => {
  const classes=useStyles()
  return (
    <Typography>
      <Link className={classes.link} href={props.url} target="_blank" >
        {props.name}
      </Link>
    </Typography>
  );
};
export default Links;
