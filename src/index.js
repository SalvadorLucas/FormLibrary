import React from "react";
import PropTypes from "prop-types";
import Accordion from "./Components/organisms/Accordion";
import GridForm from "./Components/molecules/Grid";

function Form(props) {
  const [formValues, setFormValues] = React.useState(null);
  const { definition, onSubmit, children, ...rest } = props;

  if (formValues === null) {
    if (definition.groups) {
      let keys = {
        cf: {},
        target: {},
      };
      definition.groups.map((group) => {
        group.items.map((item) => {
          item.cf ? (keys.cf[item.name] = "") : (keys.target[item.name] = "");
        });
      });
      setFormValues(keys);
    } else {
      let keys = {
        cf: {},
        target: {},
      };
      definition.items.map((item) => {
        item.cf ? (keys.cf[item.name] = "") : (keys.target[item.name] = "");
      });
      setFormValues(keys);
    }
  }
  const onChange = (name, value, cf) => {
    cf ? (formValues.cf[name] = value) : (formValues.target[name] = value);
    setFormValues(formValues);
  };
  const sendValues = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={sendValues}>
      {definition.goups && <Accordion {...definition} onChange={onChange} />}
      {definition.items && <GridForm {...definition} onChange={onChange} />}
      {children}
    </form>
  );
}

Form.propTypes = {
  definition: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Form.defaultProps = {};

export default Form;
