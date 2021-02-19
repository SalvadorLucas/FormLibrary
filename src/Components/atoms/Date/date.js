import React from "react";
import PropTypes from "prop-types";
import DateFnsUtils from "@date-io/date-fns";
// CORE COMPONENTS
import { ErrorMessage } from "@hookform/error-message";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { Controller } from "react-hook-form";
import { Tooltip } from "@material-ui/core";
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
          render={({ onChange, onBlur, value, ref }) =>
            helper ? (
              <Tooltip {...helper}>
                <div>
                  <KeyboardDatePicker
                    value={value}
                    inputRef={ref}
                    onChange={(date) => {
                      props.onChange && props.onChange(date);
                      onChange(date);
                    }}
                    {...inputProps}
                  />
                </div>
              </Tooltip>
            ) : (
              <KeyboardDatePicker
                value={value}
                inputRef={ref}
                onChange={(date) => {
                  props.onChange && props.onChange(date);
                  onChange(date);
                }}
                {...inputProps}
              />
            )
          }
          defaultValue={defaultValue ? defaultValue : new Date()}
          rules={{ ...rules }}
        />
      </MuiPickersUtilsProvider>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  );
});
// Type and required properties
DateAtom.propTypes = {};
export default DateAtom;
