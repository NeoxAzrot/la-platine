import React from "react";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: '#ffd315',
  },
  text: {
    fontFamily: 'Montserrat',
    color: 'white',
    fontSize: '15px',
    justifyContent: 'flex-start',
  }
});

export default function FormControlLabelPosition(props) {
  const { Text } = props
  const classes = useStyles();
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          className={classes.text}
          value="start"
          control={<Switch/>}
          label={ Text }
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
  );
}