import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS
import { Controller } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const ButtonAtom = React.forwardRef((props, ref) => {
  // Properties of the atom
  const {
    getValues,
    setValue,
    control,
    reset,
    errors,
    name,
    label,
    helper,
    onClick,
    inputProps,
    ...rest
  } = props;

  return (
    /* 
     @prop data-testid: Id to use inside button.test.js file.
     */
    <div data-testid={"ButtonTestId"}>
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
              <span>
                <Button
                  value={value}
                  onClick={(e) => {
                    props.onClick && props.onClick(e);
                  }}
                  {...inputProps}
                >
                  {label}
                </Button>
              </span>
            </Tooltip>
          ) : (
            <Button
              value={value}
              onClick={(e) => {
                props.onClick && props.onClick(e);
              }}
              {...inputProps}
            >
              {label}
            </Button>
          )
        }
        defaultValue={{}}
      />
    </div>
  );
});
// Type and required properties
ButtonAtom.propTypes = {};

export default ButtonAtom;
