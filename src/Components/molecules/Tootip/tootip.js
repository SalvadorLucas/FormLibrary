import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import HelpIcon from '@material-ui/icons/Help';
// CORE COMPONENTS AND ATOMS TO USE
import { Grid } from '@material-ui/core'
import DropDown from '../../atoms/DropDown'
import TextField from '../../atoms/TextField'
import Button from '../../atoms/Button'
import Number from '../../atoms/Number'
import Email from '../../atoms/Email'
import Date from '../../atoms/Date'
import UploadFile from '../../atoms/UploadFile'
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const TootipMolecule = React.forwardRef((props, ref) => {
  // Properties of the molecule
  const { item, onChange, ...rest } = props
  const { name, label, type, helper, component } = item
  const [atom, setAtom] = React.useState(null)
  React.useEffect(() => {
    switch (component.toLowerCase()) {
      case 'textfield':
        setAtom(<TextField item={item} onChange={onChange} />)
        break
      case 'dropdown':
        setAtom(<DropDown item={item} onChange={onChange} />)
        break
      case 'button':
        setAtom(<Button item={item} onChange={onChange} />)
        break
      case 'number':
        setAtom(<Number item={item} onChange={onChange} />)
        break
      case 'email':
        setAtom(<Email item={item} onChange={onChange} />)
        break
      case 'date':
        setAtom(<Date item={item} onChange={onChange} />)
        break
      case 'uploadfile':
        setAtom(<UploadFile item={item} onChange={onChange} />)
        break
    }
  }, [])

  return (
    /*
     @prop data-testid: Id to use inside tootip.test.js file.
     */
    <Grid
      container
      ref={ref}
      direction='row'
      justify='flex-start'
      alignItems='flex-start'
      data-testid={'TootipTestId'}
    >
      <Grid item xs={7} sm={8} md={10} lg={10} xl={11}>
        {atom}
      </Grid>
      <Grid item xs={5} sm={4} md={2} lg={2} xl={1}>
        <Tooltip
          title={helper}
        >
          <IconButton aria-label={helper}>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
})
// Type and required properties
TootipMolecule.propTypes = {
  onChange: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

export default TootipMolecule
