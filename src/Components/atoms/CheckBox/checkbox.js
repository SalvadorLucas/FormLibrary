import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
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
    inputProps,
    onChange,
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
                      render={({
                        field: { onChange, onBlur, value, name, ref },
                        fieldState: { invalid, isTouched, isDirty, error },
                        formState,
                      }) => (
                        <Checkbox
                          onBlur={onBlur}
                          onChange={(e) => {
                            props.onChange && props.onChange(e);
                            onChange(e.target.checked);
                          }}
                          checked={value}
                          inputRef={ref}
                          {...inputProps}
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
                    render={({
                      field: { onChange, onBlur, value, name, ref },
                      fieldState: { invalid, isTouched, isDirty, error },
                      formState,
                    }) => (
                      <Checkbox
                        onBlur={onBlur}
                        onChange={(e) => {
                          props.onChange && props.onChange(e);
                          onChange(e.target.checked);
                        }}
                        checked={value}
                        inputRef={ref}
                        {...inputProps}
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
