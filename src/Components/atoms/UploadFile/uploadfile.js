import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Tooltip, Button, Input, InputLabel } from "@material-ui/core";
import { DropzoneDialog } from "material-ui-dropzone";
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const UploadFileAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const {
    getValues,
    setValue,
    control,
    reset,
    errors,
    name,
    label,
    helper,
    defaultValue,
    customProps,
    rules,
    ...rest
  } = props;

  const [open, setOpen] = React.useState(false);

  const onClick = () => {
    setOpen(!open);
  };

  return (
    /* 
     @prop data-testid: Id to use inside uploadfile.test.js file.
     */
    <div data-testid={"UploadFileTestId"}>
      {helper ? (
        <Tooltip {...helper}>
          <div>
            <Button onClick={onClick} {...(customProps && customProps.button)}>
              {label}
            </Button>
          </div>
        </Tooltip>
      ) : (
        <Button onClick={onClick} {...(customProps && customProps.button)}>
          {label}
        </Button>
      )}
      <Controller
        control={control}
        name={name}
        render={({ onChange, onBlur, value, ref }) => (
          <DropzoneDialog
            open={open}
            onClose={onClick}
            value={value}
            onSave={(files) => {
              onChange(files);
              onClick();
            }}
            inputRef={ref}
            {...(customProps && customProps.input)}
          />
        )}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ ...rules }}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => message}
      />
    </div>
  );
});
// Type and required properties
UploadFileAtom.propTypes = {};

export default UploadFileAtom;
