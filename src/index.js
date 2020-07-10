import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  makeStyles,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button
} from '@material-ui/core/'
import Accordion from './Components/organisms/Accordion'
import GridForm from './Components/molecules/Grid'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}))
function Form(props) {
  const [formValues, setFormValues] = React.useState(null)
  const { definition, onCancel, onSubmit } = props
  const classes = useStyles()

  if (formValues === null) {
    if (definition.groups) {
      let keys = {}
      definition.groups.map(group => {
        group.items.map(item => {
          keys[item.name] = ''
        })
      })
      setFormValues(keys)
    } else {
      let keys = {}
      definition.items.map(item => {
        keys[item.name] = ''
      })
      setFormValues(keys)
    }
  }
  const onChange = (name, value) => {
    formValues[name] = value
    setFormValues(formValues)
  }
  const sendValues = (event) => {
    event.preventDefault()
    onSubmit(formValues)
  }
  return (
    <form onSubmit={sendValues}>
      <Card
        className={classes.root}
        data-testid={'AccordionTestId'}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            {definition.title}
          </Typography>
          <Typography variant="body2" component="p">
            {definition.description}
          </Typography>
          {definition.groups ?
            <Accordion {...definition} onChange={onChange} />
            : <GridForm {...definition} onChange={onChange} />}
        </CardContent>
        <CardActions>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="flex-start"
            spacing={1}
          >
            <Grid item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
              <Button variant='outlined' color='primary' type='submit'>Submit</Button>
            </Grid>
            <Grid item xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'} xl={'auto'}>
              <Button variant='outlined' color='primary' onClick={onCancel}>Cancel</Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </form>
  )
}
Form.propTypes = {
  definition: PropTypes.object.isRequired,
  onCancel: PropTypes.func,
  onClick: PropTypes.func
}
Form.defaultProps = {
  onCancel: null,
  onClick: null
}

export default Form
