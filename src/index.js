import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Button } from '@material-ui/core'
import Accordion from './Components/organisms/Accordion'
import GridForm from './Components/molecules/Grid'
function Form(props) {
  const [formValues, setFormValues] = React.useState(null)
  const { definition, onCancel, onSubmit } = props
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
      {definition.groups ?
        <Accordion {...definition} onChange={onChange} />
        : <GridForm {...definition} onChange={onChange} />}
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
        spacing={1}
      >
        <Grid item xs={4} sm={2} md={1} lg={1} xl={1}>
          <Button variant='outlined' color='primary' type='submit'>Submit</Button>
        </Grid>
        <Grid item xs={4} sm={2} md={1} lg={1} xl={1}>
          <Button variant='outlined' color='primary' onClick={onCancel}>Cancel</Button>
        </Grid>
      </Grid>
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
