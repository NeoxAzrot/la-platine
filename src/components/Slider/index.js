import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import MySlider from '@material-ui/core/Slider';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 100 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: '#FFD315',
    height: 3,
  },
  thumb: {
    height: 11,
    width: 11,
    backgroundColor: '#FFD315',
    border: '2px solid currentColor',
    marginTop: -4,
    marginLeft: -5,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 9px)',
  },
  track: {
    height: 3,
    borderRadius: 2,
  },
  rail: {
    height: 3,
    borderRadius: 2,
  },
})(MySlider);

const Slider = (props) => {
  const classes = useStyles();
  const { step, min, max, defaultValue } = props

  return (
    <div className={classes.root}>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={defaultValue} 
      step={step} min={min} max={max}/>
    </div>
  );
}

Slider.propTypes = {
  step: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number
}

Slider.defaultProps = {
  defaultValue: 0
};

export default Slider