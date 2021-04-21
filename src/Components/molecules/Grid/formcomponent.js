import React from "react";
import PropTypes from "prop-types";
import TextField from "../../atoms/TextField";
import Checkbox from "../../atoms/CheckBox";
import DatePicker from "../../atoms/Date";
import RadioGroup from "../../atoms/RadioGroup";
import Select from "../../atoms/DropDown";
import Switch from "../../atoms/Switch";
import Button from "../../atoms/Button";
import UploadFile from "../../atoms/UploadFile";

export default function FormComponent(props) {
  const { component, ...rest } = props;
  switch (component.toLowerCase()) {
    case "textfield":
      return <TextField {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "datepicker":
      return <DatePicker {...rest} />;
    case "radio":
      return <RadioGroup {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "switch":
      return <Switch {...rest} />;
    case "button":
      return <Button {...rest} />;
    case "file":
      return <UploadFile {...rest} />;
    default:
      break;
  }
}

FormComponent.propTypes = {
  component: PropTypes.string.isRequired,
};
FormComponent.defaultProps = {};
