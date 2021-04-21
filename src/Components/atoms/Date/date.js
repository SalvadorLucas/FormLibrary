import React from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
// CORE COMPONENTS
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Controller } from "react-hook-form";
import { Tooltip, Typography } from "@material-ui/core";
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const DateAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const {
    control,
    reset,
    errors,
    name,
    helper,
    onChange,
    defaultValue,
    inputProps,
    rules,
    ...rest
  } = props;
  return (
    /* 
     @prop data-testid: Id to use inside date.test.js file.
     */
    <div data-testid={"DateTestId"} ref={ref}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                <div>
                  <KeyboardDatePicker
                    onBlur={onBlur}
                    value={value}
                    inputRef={ref}
                    error={(error && true) || false}
                    allowKeyboardControl
                    fullWidth
                    maxDateMessage=""
                    minDateMessage=""
                    invalidDateMessage=""
                    InputLabelProps={{ shrink: true }}
                    onChange={(date) => {
                      props.onChange && props.onChange(date);
                      onChange(date);
                    }}
                    {...inputProps}
                    label={
                      (rules && rules.required && inputProps.label + " *") ||
                      inputProps.label
                    }
                  />
                </div>
              </Tooltip>
            ) : (
              <KeyboardDatePicker
                value={value}
                inputRef={ref}
                allowKeyboardControl
                fullWidth
                onChange={(date) => {
                  props.onChange && props.onChange(date);
                  onChange(date);
                }}
                {...inputProps}
                label={
                  (rules.required && inputProps.label + " *") ||
                  inputProps.label
                }
              />
            )
          }
          rules={{ ...rules }}
          defaultValue={defaultValue ? defaultValue : new Date()}
        />
      </MuiPickersUtilsProvider>
      <Typography variant="caption" color="error">
        {errors[name] && errors[name].message}
      </Typography>
    </div>
  );
});
// Type and required properties
DateAtom.propTypes = {};
export default DateAtom;
