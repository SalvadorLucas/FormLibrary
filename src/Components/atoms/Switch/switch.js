import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Switch, Tooltip, FormControlLabel } from "@material-ui/core";

//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const SwitchAtom = React.forwardRef((props, ref) => {
  const {
    control,
    reset,
    errors,
    name,
    label,
    helper,
    onChange,
    inputProps,
    defaultValue,
    rules,
    ...rest
  } = props;

  return (
    /* 
     @prop data-testid: Id to use inside switch.test.js file.
     */
    <div data-testid={"SwitchTestId"} ref={ref}>
      <Controller
        control={control}
        name={name}
        render={({ onChange, onBlur, value, ref }) =>
          helper ? (
            <Tooltip {...helper}>
              <FormControlLabel
                control={
                  <Switch
                    value={value}
                    inputRef={ref}
                    checked={value}
                    onChange={(e) => {
                      onChange(e.target.checked);
                      props.onChange && props.onChange(e);
                    }}
                    {...inputProps}
                  />
                }
                label={label}
              />
            </Tooltip>
          ) : (
            <FormControlLabel
              control={
                <Switch
                  value={value}
                  inputRef={ref}
                  checked={value}
                  onChange={(e) => {
                    onChange(e.target.checked);
                    props.onChange && props.onChange(e);
                  }}
                  {...inputProps}
                />
              }
              label={label}
            />
          )
        }
        defaultValue={defaultValue ? defaultValue : false}
        rules={{ ...rules }}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  );
});
// Type and required properties
SwitchAtom.propTypes = {};
// Default properties
SwitchAtom.defaultProps = {};

export default SwitchAtom;
