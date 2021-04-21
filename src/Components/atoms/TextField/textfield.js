import React from "react";
import PropTypes from "prop-types";
import { TextField, Tooltip, Typography } from "@material-ui/core";
import { Controller } from "react-hook-form";

export default function TextFieldAtom(props) {
  const {
    control,
    reset,
    errors,
    name,
    helper,
    defaultValue,
    inputProps,
    rules,
    ...rest
  } = props;

  return (
    <div data-testid="TextFieldTestId">
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
              <TextField
                fullWidth
                onBlur={onBlur}
                inputRef={ref}
                error={(error && true) || false}
                onChange={onChange}
                value={value}
                InputLabelProps={{ shrink: true }}
                {...inputProps}
                label={
                  (rules && rules.required && inputProps.label + " *") ||
                  inputProps.label
                }
              />
            </Tooltip>
          ) : (
            <TextField
              fullWidth
              inputRef={ref}
              onChange={onChange}
              value={value}
              InputLabelProps={{ shrink: true }}
              {...inputProps}
              label={
                (rules && rules.required && inputProps.label + " *") ||
                inputProps.label
              }
            />
          )
        }
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ ...rules }}
      />
      <Typography variant="caption" color="error">
        {errors[name] && errors[name].message}
      </Typography>
    </div>
  );
}

TextFieldAtom.propTypes = {
  control: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  name: PropTypes.any,
  defaultValue: PropTypes.any,
  inputProps: PropTypes.object,
  rules: PropTypes.object,
};
TextFieldAtom.defaultProps = {};
