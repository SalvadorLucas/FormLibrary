import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Select from "react-select";
import { Tooltip } from "@material-ui/core";
// CORE COMPONENTS
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const DropDownAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const {
    control,
    reset,
    errors,
    name,
    label,
    helper,
    onChange,
    options,
    defaultValue,
    inputProps,
    rules,
    ...rest
  } = props;
  return (
    /* 
     @prop data-testid: Id to use inside dropdown.test.js file.
     */
    <div data-testid={"DropDownTestId"} ref={ref}>
      {helper ? (
        <Tooltip {...helper}>
          <div>
            <Controller
              control={control}
              name={name}
              render={({ onChange, onBlur, value, ref }) => (
                <Select
                  inputref={ref}
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    props.onChange && props.onChange(e);
                  }}
                  options={options}
                  {...inputProps}
                />
              )}
              defaultValue={defaultValue ? defaultValue : []}
              rules={{ ...rules }}
            />
          </div>
        </Tooltip>
      ) : (
        <Controller
          control={control}
          name={name}
          render={({ onChange, onBlur, value, ref }) => (
            <Select
              inputref={ref}
              value={value}
              onChange={(e) => {
                onChange(e);
                props.onChange && props.onChange(e);
              }}
              options={options}
              {...inputProps}
            />
          )}
          defaultValue={defaultValue ? defaultValue : []}
          rules={{ ...rules }}
        />
      )}
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
    </div>
  );
});
// Type and required properties
DropDownAtom.propTypes = {};
DropDownAtom.defaultProps = {};

export default DropDownAtom;
