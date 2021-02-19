import React from "react";
import PropTypes from "prop-types";
import { TextField, Tooltip } from "@material-ui/core";
import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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
        render={({ onChange, value, ref }) =>
          helper ? (
            <Tooltip {...helper}>
              <TextField
                inputRef={ref}
                onChange={onChange}
                value={value}
                InputLabelProps={{ shrink: true }}
                {...inputProps}
              />
            </Tooltip>
          ) : (
            <TextField
              inputRef={ref}
              onChange={onChange}
              value={value}
              InputLabelProps={{ shrink: true }}
              {...inputProps}
            />
          )
        }
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ ...rules }}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p>{message}</p>}
      />
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
