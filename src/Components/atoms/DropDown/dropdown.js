import React from "react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import ReactSelect from "react-select";
import { Tooltip, Typography } from "@material-ui/core";

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

  let selectRef = React.createRef();

  React.useLayoutEffect(() => {
    errors[name] && selectRef.select && selectRef.select.focus();
  }, [errors[name]]);

  const styles = {
    control: (base, state) => ({
      ...base,
      borderColor: errors[name] && "hsl(0,100%, 50%)",
    }),
  };
  // const styles = {
  //   control: (base, state) => console.log(base),
  // };

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
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <ReactSelect
                  inputref={ref}
                  ref={(ref) => {
                    selectRef = ref;
                  }}
                  value={value}
                  onChange={(e) => {
                    onChange(e);
                    props.onChange && props.onChange(e);
                  }}
                  options={options}
                  styles={styles}
                  {...inputProps}
                  placeholder={
                    rules && rules.required && inputProps.placeholder + " *"
                  }
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
          render={({
            field: { onChange, onBlur, value, name, ref },
            fieldState: { invalid, isTouched, isDirty, error },
            formState,
          }) => (
            <ReactSelect
              inputref={ref}
              value={value}
              onChange={(e) => {
                onChange(e);
                props.onChange && props.onChange(e);
              }}
              options={options}
              styles={styles}
              {...inputProps}
              placeholder={
                rules && rules.required && inputProps.placeholder + " *"
              }
            />
          )}
          defaultValue={defaultValue ? defaultValue : []}
          rules={{ ...rules }}
        />
      )}
      <Typography variant="caption" color="error">
        {errors[name] && errors[name].message}
      </Typography>
    </div>
  );
});
// Type and required properties
DropDownAtom.propTypes = {};
DropDownAtom.defaultProps = {};

export default DropDownAtom;
