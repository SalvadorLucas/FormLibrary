import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS AND MOLECULES TO USE
import { Grid } from '@material-ui/core'
import UploadFile from '../../atoms/UploadFile'
import DropDown from '../../atoms/DropDown'
import TextField from '../../atoms/TextField'
import Button from '../../atoms/Button'
import Number from '../../atoms/Number'
import Email from '../../atoms/Email'
import Date from '../../atoms/Date'
import Tooltip from '../Tootip'
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const GridMolecule = React.forwardRef((props, ref) => {

  // Properties of the organism
  const { name, label, items, direction, justify, alignItems, onChange, children, ...rest } = props
  return (
    /* 
     @prop data-testid: Id to use inside grid.test.js file.
     */
    <Grid
      container
      ref={ref}
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      alignContent='space-around' //'stretch' 'center' 'flex-start' 'flex-end' 'space-between' 'space-around'
      data-testid={'GridTestId'}
      spacing={1}
      {...rest}
    >
      {items.map((item, key) => {
        if (item.helper) {
          return (
            <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
              <Tooltip item={item} onChange={onChange} />
            </Grid>
          )
        } else {
          switch (item.component.toLowerCase()) {
            case 'textfield':
              return (
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <TextField item={item} onChange={onChange} />
                </Grid>
              )
            case 'dropdown':
              return (
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <DropDown item={item} onChange={onChange} />
                </Grid>
              )
            case 'button':
              return (
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <Button item={item} onChange={onChange} />
                </Grid>
              )
            case 'number':
              return (
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <Number item={item} onChange={onChange} />
                </Grid>
              )
            case 'email':
              return (
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <Email item={item} onChange={onChange} />
                </Grid>
              )
            case 'date':
              return (
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <Date item={item} onChange={onChange} />
                </Grid>
              )
            case 'uploadfile':
              return(
                <Grid item key={key} xs={'auto'} sm={item.sm} md={item.md} lg={item.lg} xl={'auto'}>
                  <UploadFile item={item} onChange={onChange} />
                </Grid>
              )
          }
        }
      })}
    </Grid>
  )
})
// Type and required properties
GridMolecule.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string
}
// Default properties
GridMolecule.defaultProps = {
  direction: 'row',
  justify: 'flex-start',
  alignItems: 'flex-start'
}
export default GridMolecule
