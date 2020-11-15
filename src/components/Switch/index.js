import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SwitchMaterial from '@material-ui/core/Switch';
import PropTypes from 'prop-types'

const MySwitch = withStyles({
  switchBase: {
    color: "#F6F6F6",
    '&$checked': {
      color: "#FFD315",
    },
    '&$checked + $track': {
      backgroundColor: "#DE9608",
    },
  },
  checked: {},
  track: {
    backgroundColor: "#707070"
  },
})(SwitchMaterial);

const Switch = (props) => {
  const { name, checked } = props
  const [checkIsActive, setCheckIsActive] = useState(checked)

  const toggleCheck = () => {
    setCheckIsActive(!checkIsActive)
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={<MySwitch checked={checkIsActive} onChange={toggleCheck} name={name} />}
      />
    </FormGroup>
  );
}

Switch.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool
}

Switch.defaultProps = {
  checked: false
};

export default Switch