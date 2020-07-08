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
const TextFieldAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { name, label, isRequired, disabled, type, defaultValue, controlledByEvent, handleDispatchEvent, languageLabelId } = item
  const [value, setValue] = React.useState(defaultValue)
  const classes = useStyles()
  React.useEffect(() => {
    if (defaultValue) {
      onChange(name, defaultValue)
    }
  }, [])
  if (controlledByEvent) {
    document.addEventListener(controlledByEvent, function (event) {
      let eventDetail = {
        target: {
          value: null
        }
      }
      handleDispatchEvent(event).then(response => {
        eventDetail.target.value = response
        handleChange(eventDetail)
      })
    }, false)
  }
  const handleChange = (event) => {
    onChange(name, event.target.value)
    setValue(event.target.value)
  }

  return (
    /* 
     @prop data-testid: Id to use inside textfield.test.js file.
     */
    <div>
      <FormControl
        variant="filled"
        data-testid={'TextFieldTestId'}
        className={classes.formControl}
        ref={ref}
        {...rest}
      >
        {
          type === 'text' ?
            <TextField
              fullWidth={true}
              InputLabelProps={{ shrink: true }}
              defaultValue={value}
              onChange={handleChange}
              required={isRequired}
              value={value}
              id={name}
              // label={<FormattedMessage id={languageLabelId?languageLabelId:''} defaultMessage={label}/>}
              label={label}
              disabled={disabled}
              type={type}
            /> :
            <TextField
              fullWidth={true}
              multiline={true}
              InputLabelProps={{ shrink: true }}
              defaultValue={value}
              value={value}
              onChange={handleChange}
              required={isRequired}
              id={name}
              // label={<FormattedMessage id={languageLabelId?languageLabelId:''} defaultMessage={label}/>}
              label={label}
              disabled={disabled}
            />}
      </FormControl>
    </div>
  )
})
// Type and required properties
TextFieldAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default TextFieldAtom
