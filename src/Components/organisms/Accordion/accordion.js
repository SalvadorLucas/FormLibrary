import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS AND MOLECULES TO USE
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import GridForm from '../../molecules/Grid'
import { set } from 'date-fns'
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
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
  const { name, title, description, groups, onChange, ...rest } = props
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
    <div
      className={classes.root}
      data-testid={'AccordionTestId'}
      ref={ref}
    >
      {groups.map((group, key) => {
        return (
          <ExpansionPanel expanded={expanded === `panel${key}`} onChange={() => handleChange(`panel${key}`)} key={key}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{title}</Typography>
              <Typography className={classes.secondaryHeading}>{description}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <GridForm {...group} onChange={onChange} />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  )
})
// Type and required properties
AccordionOrganism.propTypes = {
  groups: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}
// Default properties
AccordionOrganism.defaultProps = {
  name: null,
  title: null,
  description: null
}

export default AccordionOrganism
