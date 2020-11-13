import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      marginTop:'50px',
      width:'162px',
      height:'162px',
      marginLeft:'auto',
      marginRight:'auto'
    },
  },
}));

const AvatarArtiste =(props)=>  {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <Avatar  src={props.image} /> 
       </div>
  );
}
export default AvatarArtiste