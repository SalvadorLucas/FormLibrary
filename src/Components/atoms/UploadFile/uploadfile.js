import React from 'react'
import PropTypes from 'prop-types'
// CORE COMPONENTS
import Button from '@material-ui/core/Button'
import { DropzoneDialog } from 'material-ui-dropzone'
// GLOBALIZATION
// import { FormattedMessage } from 'react-intl'// STYLES
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const UploadFileAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const { item, onChange, ...rest } = props
  const { disabled, name, label, languagelabelid, cf } = item
  const [open, setOpen] = React.useState(false)

  return (
    /* 
     @prop data-testid: Id to use inside uploadfile.test.js file.
     */
    <div data-testid={'UploadFileTestId'}>
      <Button
        ref={ref}
        variant="outlined"
        color="primary"
        disabled={disabled}
        onClick={() => setOpen(true)}
        name={name}
      >
        {label}
      </Button>
      <DropzoneDialog
        acceptedFiles={['.csv']}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          onChange(name, files, cf)
          setOpen(false)
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
    </div>
  )
})
// Type and required properties
UploadFileAtom.propTypes = {
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default UploadFileAtom
