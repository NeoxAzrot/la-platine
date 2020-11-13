import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 100,
    color: '#ffd315',
  },
  text: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '15px',
    justifyContent: 'flex-start',
  }
});

export default function ContinuousSlider(props) {
  const { TextLeft, TextRight } = props
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div>
        <Grid container spacing={2}>
          <Grid className={classes.text} item>{TextLeft}</Grid>
          <Grid item xs>
            <Slider className={classes.root}
              value={value}
              onChange={handleChange}
              aria-labelledby="continuous-slider"
            />
          </Grid>
          <Grid className={classes.text} item>{TextRight}</Grid>
        </Grid>
      </div>
  );
}