import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
// GLOBALIZATION
import { FormattedMessage } from 'react-intl'
// STYLES
import { makeStyles } from '@material-ui/core/styles'
// IMPORT STYLES FROM .json or .js FILES
import Query from '../../../Client/queryList'
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
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}))

const DropDownAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { name, uri, entity, itemOptions, label, isRequired,
    disabled, defaultValue, itemLabel, customEventName, handleChange, languageLabelId } = item
  const classes = useStyles()

  const [itemOption, setItemOption] = React.useState('')
  const [options, setOptions] = React.useState(itemOptions)
  React.useEffect(() => {
    if (defaultValue) {
      onChange(name, defaultValue)
    }
  }, [])

  if (uri) {
    React.useEffect(() => {
      Query(uri, entity, itemLabel).then(response => {
        setOptions(response)
      }).catch(error=>{
        console.error(error)        
      })
    }, [])
  }

  const handleOnChange = (event) => {
    setItemOption(event.target.value)
    onChange(name, event.target.value)
    if (handleChange) {
      handleChange(event)
    }
    if (customEventName) {
      let value = {}
      value['fieldName'] = name
      value['value'] = event.target.value
      const customEvent = new CustomEvent(customEventName, {
        detail: {
          value: value
        },
        bubbles: true
      })
      document.dispatchEvent(customEvent)
    }
  }

  return (
    /* 
     @prop data-testid: Id to use inside dropdown.test.js file.
     */
    <FormControl
      data-testid={'DropDownTestId'}
      className={classes.formControl}
      ref={ref}
      {...rest}
    >
      <InputLabel id="demo-simple-select-helper-label">
        {label}
        {/* <FormattedMessage id={languageLabelId?languageLabelId:''} defaultMessage={label}/> */}
      </InputLabel>
      <Select
        autoWidth
        required={isRequired}
        disabled={disabled}
        labelId="simple-select-helper-label"
        id={name}
        value={itemOption}
        onChange={handleOnChange}
        defaultValue={defaultValue}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options ?
          options.map((item, key) => {
            return <MenuItem key={key} value={item.id}>{item[itemLabel]}</MenuItem>
          }) : null}
      </Select>
    </FormControl>
  )
})
// Type and required properties
DropDownAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default DropDownAtom
