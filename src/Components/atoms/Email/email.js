import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
// CORE COMPONENTS
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
// GLOBALIZATION
import { FormattedMessage } from 'react-intl'
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: `100%`,
    maxWidth: `100%`
  }
}))
const EmailAtom = React.forwardRef((props, ref) => {
  const classes = useStyles()
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { name, label, defaultValue, isRequired, disabled,
    languagelabelid, cf } = item
  const [value, setValue] = React.useState(defaultValue)
  const [error, setError] = React.useState(false)
  const [errorText, setErrorText] = React.useState(null)
  const emailExpresion = new RegExp("^[^@]+@[^@]+\.[a-zA-Z]{2,}$")
  React.useEffect(() => {
    if (defaultValue) {
      onChange(name, defaultValue, cf)
    }
  }, [])
  const handleChange = (event) => {
    setValue(event.target.value)
    if (emailExpresion.test(event.target.value)) {
      onChange(name, event.target.value, cf)
      setError(false)
      setErrorText(null)
    } else {
      setError(true)
      setErrorText('Email not valid!')
    }
  }
  return (
    /*
     @prop data-testid: Id to use inside email.test.js file.
     */
    <FormControl
      variant="filled"
      data-testid={'EmailTestId'}
      className={classes.formControl}
      ref={ref}
      {...rest}
    >
      <TextField
        fullWidth={true}
        error={error}
        InputLabelProps={{ shrink: true }}
        defaultValue={value}
        onChange={handleChange}
        required={isRequired}
        id={name}
        label={label}
        // label={<FormattedMessage id={languagelabelid?languagelabelid:''} defaultMessage={label}/>}
        disabled={disabled}
        helperText={errorText}
      />
    </FormControl>
  )
})
// Type and required properties
EmailAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
export default EmailAtom
