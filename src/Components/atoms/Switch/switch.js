import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import {
  Switch,
  Tooltip,
  FormControlLabel,
  Typography,
} from "@material-ui/core";

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
        render={({
          field: { onChange, onBlur, value, name, ref },
          fieldState: { invalid, isTouched, isDirty, error },
          formState,
        }) =>
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
                label={(rules && rules.required && label + " *") || label}
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
              label={(rules && rules.required && label + " *") || label}
            />
          )
        }
        defaultValue={defaultValue ? defaultValue : false}
        rules={{ ...rules }}
      />
      <Typography variant="caption" color="error">
        {errors[name] && errors[name].message}
      </Typography>
    </div>
  );
});
// Type and required properties
SwitchAtom.propTypes = {};
// Default properties
SwitchAtom.defaultProps = {};

export default SwitchAtom;
