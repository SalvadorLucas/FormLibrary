import React from 'react'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
// CORE COMPONENTS
import FormControl from '@material-ui/core/FormControl'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
// GLOBALIZATION
import { FormattedMessage } from 'react-intl'
// STYLES
import { makeStyles } from '@material-ui/core/styles'
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
const DateAtom = React.forwardRef((props, ref) => {
  const classes = useStyles()
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { name, label, defaultValue, languageLabelId, isRequired } = item
  const [date, setDate] = React.useState(new Date())
  const handleChange = (date) => {
    setDate(date)
    onChange(name, date)
  }
  return (
    /* 
     @prop data-testid: Id to use inside date.test.js file.
     */
    <FormControl
      variant="filled"
      data-testid={'DateTestId'}
      className={classes.formControl}
      ref={ref}
      {...rest}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          autoOk
          variant="inline"
          // label={<FormattedMessage id={languageLabelId ? languageLabelId : ''} defaultMessage={label} />}
          label={label}
          value={date}
          placeholder={defaultValue ? defaultValue : "MM/DD/YYYY"}
          onChange={(date) => handleChange(date)}
          minDate={new Date()}
          format="MM/dd/yyyy"
        />
      </MuiPickersUtilsProvider>
    </FormControl>
  )
})
// Type and required properties
DateAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}
export default DateAtom
