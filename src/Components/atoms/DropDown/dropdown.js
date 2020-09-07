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
    maxWidth: `100%`,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
}))
const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}
const DropDownAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { name, uri, entity, itemOptions, label, isRequired, controlledByEvent, handleDispatchEvent,
    disabled, itemValue, itemLabel, customEventName, handleChange, cascadeSettings, languagelabelid, cf } = item
  const classes = useStyles()

  const [itemOption, setItemOption] = React.useState('')
  const [options, setOptions] = React.useState(itemOptions)
  const [enable, setEnable] = React.useState(disabled)
  // Send API to build options
  if (uri) {
    React.useEffect(() => {
      Query(uri, entity, itemLabel, itemValue, null).then(response => {
        setOptions(response)
      }).catch(error => {
        console.error(error)
      })
    }, [])
  }
  // Settings Cascade --------IMPORTANT!!!!-------- Doesn't work until filtering by API works
  if (cascadeSettings) {
    React.useEffect(() => {
      const { controlledByEvent, cascadeFilterByColumn, enableOnRefresh, ...rest } = cascadeSettings
      // set disabled before refresh new options
      enableOnRefresh ? setEnable(enableOnRefresh) : null
      // Add listener to fetch API and make new options
      document.addEventListener(controlledByEvent, function (event) {
        let filter = {
          column: cascadeFilterByColumn,
          value: event.detail.value.value
        }
        Query(uri, entity, itemLabel, filter).then(response => {
          setOptions(response)
          setEnable(false)
        }).catch(error => {
          console.error(error)
        })
      }, false)
    }, [])
  }

  const handleOnChange = (event) => {
    setItemOption(event.target.value)
    onChange(name, event.target.value, cf)
    // Function by developers
    if (handleChange) {
      handleChange(event)
    }
    // Make custom event to dispatch
    if (customEventName) {
      let value = {}
      value['fieldName'] = name
      value['value'] = event.target.value
      const customEvent = new CustomEvent(customEventName, {
        detail: {
          value: value
        },
        bubbles: false
      })
      document.dispatchEvent(customEvent)
    }
  }
  // Listen dispatch event
  if (controlledByEvent) {
    document.addEventListener(controlledByEvent, function (event) {
      handleDispatchEvent(event).then(response => {
        setOptions(response)
      })
    }, false)
  }

  return (
    /* 
     @prop data-testid: Id to use inside dropdown.test.js file.
     */
    <FormControl
      data-testid={'DropDownTestId'}
      className={classes.formControl}
      disabled={enable}
      required={isRequired}
      ref={ref}
      {...rest}
    >
      <InputLabel id={name}>
        {label}
        {/* <FormattedMessage id={languagelabelid?languagelabelid:''} defaultMessage={label}/> */}
      </InputLabel>
      <Select
        autoWidth
        labelId={name}
        id={name}
        value={itemOption}
        onChange={handleOnChange}
        MenuProps={MenuProps}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {options ?
          options.map((item, key) => {
            return <MenuItem key={key} value={item[itemValue]} className={classes.selectMenu}>{item[itemLabel]}</MenuItem>
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
