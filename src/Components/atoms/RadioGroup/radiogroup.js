import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Tooltip,
} from "@material-ui/core";

//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const RadioGroupAtom = React.forwardRef((props, ref) => {
  const {
    control,
    reset,
    errors,
    row,
    name,
    label,
    helper,
    onChange,
    options,
    defaultValue,
    rules,
    ...rest
  } = props;

  return (
    /* 
     @prop data-testid: Id to use inside radiogroup.test.js file.
     */
    <div data-testid={"RadioGroupTestId"} ref={ref}>
      {helper ? (
        <Tooltip {...helper}>
          <div>
            <FormLabel component="legend">{label}</FormLabel>
            <Controller
              control={control}
              name={name}
              render={({ onChange, onBlur, value, ref }) => (
                <RadioGroup
                  ref={ref}
                  row={row}
                  aria-label={name}
                  value={value}
                  onChange={(e) => {
                    onChange(e.target.value);
                    props.onChange && props.onChange(e);
                  }}
                >
                  {options.map((radio, key) => (
                    <FormControlLabel
                      checked={radio.value == value}
                      key={key}
                      control={<Radio {...radio} />}
                      {...radio}
                    />
                  ))}
                </RadioGroup>
              )}
              defaultValue={defaultValue ? defaultValue.value : ""}
              rules={{ ...rules }}
            />
          </div>
        </Tooltip>
      ) : (
        <div>
          <FormLabel component="legend">{label}</FormLabel>
          <Controller
            control={control}
            name={name}
            render={({ onChange, onBlur, value, ref }) => (
              <RadioGroup
                ref={ref}
                row={row}
                aria-label={name}
                value={value}
                onChange={(e) => {
                  onChange(e.target.value);
                  props.onChange && props.onChange(e);
                }}
              >
                {options.map((radio, key) => (
                  <FormControlLabel
                    checked={radio.value == value}
                    key={key}
                    control={<Radio {...radio} />}
                    {...radio}
                  />
                ))}
              </RadioGroup>
            )}
            defaultValue={defaultValue ? defaultValue.value : ""}
            rules={{ ...rules }}
          />
        </div>
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
RadioGroupAtom.propTypes = {};
// Default properties
RadioGroupAtom.defaultProps = {};

export default RadioGroupAtom;
