import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS AND MOLECULES TO USE
import {
  Grid,
  makeStyles,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography
} from '@material-ui/core/'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import GridForm from '../../molecules/Grid'
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))
const AccordionOrganism = React.forwardRef((props, ref) => {
  const { name, title, description, groups, onChange, direction, justify, alignItems, children, ...rest } = props
  const [expanded, setExpanded] = React.useState(null)
  const classes = useStyles()
  const handleChange = panel => {
    if (expanded === panel) {
      setExpanded(false)
    } else {
      setExpanded(panel)
    }
  };
  // Properties of the organism
  return (
    /* 
     @prop data-testid: Id to use inside accordion.test.js file.
     */
    <Grid
      container
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      alignContent='space-around' //'stretch' 'center' 'flex-start' 'flex-end' 'space-between' 'space-around'
      data-testid={'GridTestId'}
      spacing={1}
      {...rest}
    >
      {groups.map((group, key) => {
        return (
          <Grid item key={key} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Accordion expanded={expanded === `panel${key}`} onChange={() => handleChange(`panel${key}`)} key={key}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>{group.title}</Typography>
                <Typography className={classes.secondaryHeading}>{group.description}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <GridForm {...group} onChange={onChange} />
              </AccordionDetails>
            </Accordion>
          </Grid>
        )
      })}
    </Grid>
  )
})
// Type and required properties
AccordionOrganism.propTypes = {
  groups: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string
}
// Default properties
AccordionOrganism.defaultProps = {
  name: null,
  title: '',
  description: '',
  direction: 'row',
  justify: 'flex-start',
  alignItems: 'flex-start'
}

export default AccordionOrganism
