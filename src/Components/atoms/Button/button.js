import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS
import Button from '@material-ui/core/Button'
// GLOBALIZATION
// import { FormattedMessage } from 'react-intl'
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const ButtonAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { disabled, name, label, languagelabelid, onClick } = item

  return (
    /* 
     @prop data-testid: Id to use inside button.test.js file.
     */
    <Button
      fullWidth
      data-testid={'ButtonTestId'}
      disabled={disabled}
      name={name}
      onClick={onClick}
      variant='outlined'
      color='primary'
      {...rest}
      ref={ref}
    >
      {/* <FormattedMessage id={languagelabelid?languagelabelid:''} defaultMessage={label}/> */}
      {label}
    </Button>
  )
})
// Type and required properties
ButtonAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default ButtonAtom
