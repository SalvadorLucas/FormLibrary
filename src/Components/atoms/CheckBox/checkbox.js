import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  FormControlLabel,
  Checkbox,
  Tooltip,
  FormLabel,
  FormGroup,
} from "@material-ui/core";

//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const CheckBoxAtom = React.forwardRef((props, ref) => {
  const {
    control,
    reset,
    errors,
    title,
    name,
    options,
    helper,
    checkProps,
    onChange,
    rules,
    ...rest
  } = props;

  return (
    /* 
     @prop data-testid: Id to use inside checkbox.test.js file.
     */
    <div data-testid={"CheckBoxTestId"} ref={ref}>
      {helper ? (
        <Tooltip {...helper}>
          <div>
            <FormLabel component="legend">{title}</FormLabel>
            <FormGroup>
              {options.map((option, key) => (
                <FormControlLabel
                  key={key}
                  control={
                    <Controller
                      control={control}
                      name={name + key}
                      render={({ onChange, onBlur, value, name, ref }) => (
                        <Checkbox
                          onChange={(e) => {
                            props.onChange && props.onChange(e);
                            onChange(e.target.checked);
                          }}
                          checked={value}
                          inputRef={ref}
                          {...checkProps}
                        />
                      )}
                      defaultValue={
                        option.defaultValue ? option.defaultValue : false
                      }
                    />
                  }
                  {...option}
                />
              ))}
            </FormGroup>
          </div>
        </Tooltip>
      ) : (
        <div>
          <FormLabel component="legend">{title}</FormLabel>
          <FormGroup>
            {options.map((option, key) => (
              <FormControlLabel
                key={key}
                control={
                  <Controller
                    control={control}
                    name={name + key}
                    render={({ onChange, onBlur, value, name, ref }) => (
                      <Checkbox
                        onChange={(e) => {
                          props.onChange && props.onChange(e);
                          onChange(e.target.checked);
                        }}
                        checked={value}
                        inputRef={ref}
                        {...checkProps}
                      />
                    )}
                    defaultValue={
                      option.defaultValue ? option.defaultValue : false
                    }
                  />
                }
                {...option}
              />
            ))}
          </FormGroup>
        </div>
      )}
    </div>
  );
});
// Type and required properties
CheckBoxAtom.propTypes = {};
// Default properties
CheckBoxAtom.defaultProps = {};

export default CheckBoxAtom;
