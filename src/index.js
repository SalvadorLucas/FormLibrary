import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Accordion from "./Components/organisms/Accordion";
import Grid from "./Components/molecules/Grid";

export default function App(props) {
  // Properties
  const { definition, onSubmit, children, ...rest } = props;
  // React Hook Form
  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    register,
    errors,
  } = useForm();
  // Extracting the definition JSON
  const definitionObject = definition({ setValue, getValues, reset });

  if (definitionObject.groups) {
    // Accordion Form
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Accordion
          groups={definitionObject.groups}
          reset={reset}
          control={control}
          errors={errors}
          setValue={setValue}
          getValues={getValues}
          register={register}
          accordionProps={definitionObject.accordionProps}
        />
        {children}
      </form>
    );
  } else {
    // Normal Form
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          components={definitionObject.components}
          reset={reset}
          setValue={setValue}
          getValues={getValues}
          control={control}
          errors={errors}
          register={register}
        />
        {children}
      </form>
    );
  }
}

App.propTypes = {
  definition: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
App.defaultProps = {};
