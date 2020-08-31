import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS
import NumberFormat from 'react-number-format'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
// GLOBALIZATION
import { FormattedMessage } from 'react-intl'
// STYLES
import { makeStyles } from '@material-ui/core/styles'
// IMPORT STYLES FROM .json or .js FILES
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: `100%`,
    maxWidth: `100%`
  }
}))
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
function NumberFormatCustom(props) {
  const { inputRef, onChange, prefix, name, type, ...rest } = props

  switch (type) {
    case 'number':
      return (
        <NumberFormat
          {...rest}
          getInputRef={inputRef}
          onValueChange={(values) => {
            onChange({
              target: {
                name: name,
                value: values.value,
              },
            })
          }}
          allowLeadingZeros
          prefix={prefix}
        />
      )
    case 'tel':
      return (
        <NumberFormat
          {...rest}
          getInputRef={inputRef}
          onValueChange={(values) => {
            onChange({
              target: {
                name: name,
                value: values.value,
              },
            })
          }}
          format="(###) ###-####"
          type={type}
          allowLeadingZeros
          prefix={prefix}
        />
      )
  }
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  prefix: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}


const NumberAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { name, label, defaultValue, cf, type, languagelabelid, helper, disabled } = item
  const [value, setValue] = React.useState(defaultValue)
  const classes = useStyles()
  React.useEffect(() => {
    if (defaultValue) {
      onChange(name, defaultValue, cf)
    }
  }, [])
  const handleChange = (event) => {
    onChange(name, event.target.value, cf)
    setValue(event.target.value)
  }

  return (
    /*
     @prop data-testid: Id to use inside number.test.js file.
     */
    <FormControl
      variant="filled"
      data-testid={'NumberTestId'}
      className={classes.formControl}
      ref={ref}
    >
      <TextField
        fullWidth={true}
        disabled={disabled}
        id="formatted-numberformat-input"
        InputLabelProps={{ shrink: true }}
        label={label}
        // label={<FormattedMessage id={languagelabelid?languagelabelid:''} defaultMessage={label}/>}
        value={value}
        name={name}
        type={type}
        defaultValue={value}
        onChange={handleChange}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
      />
    </FormControl>
  )
})
// Type and required properties
NumberAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
export default NumberAtom
