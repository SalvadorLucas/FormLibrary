import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import {
  RadioGroup,
  FormControl,
  FormControlLabel,
  Radio,
  FormLabel,
  Tooltip,
  Typography,
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
      <FormControl
        component="fieldset"
        fullWidth
        error={(errors[name] && true) || false}
      >
        {helper ? (
          <Tooltip {...helper}>
            <div>
              <FormLabel component="legend">
                {(rules && rules.required && label + " *") || label}
              </FormLabel>
              <Controller
                control={control}
                name={name}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
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
            <FormLabel component="legend">
              {(rules && rules.required && label + " *") || label}
            </FormLabel>
            <Controller
              control={control}
              name={name}
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
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
      </FormControl>
      <Typography variant="caption" color="error">
        {errors[name] && errors[name].message}
      </Typography>
    </div>
  );
});
// Type and required properties
RadioGroupAtom.propTypes = {};
// Default properties
RadioGroupAtom.defaultProps = {};

export default RadioGroupAtom;
