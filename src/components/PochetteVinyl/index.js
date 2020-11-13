import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 151,
    height: 151
  },
  cover: {
    width: 151
  }
}));

const PochetteVinyl =(props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.src}
    />
    </Card>
  );
}
export default PochetteVinyl
