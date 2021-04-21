import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";
import Accordion from "./Components/organisms/Accordion";
import Grid from "./Components/molecules/Grid";
import Tabs from "./Components/organisms/Tabs";

export default function App(props) {
  // Properties
  const { definition, onSubmit, children, active, ...rest } = props;
  // React Hook Form
  const {
    handleSubmit,
    reset,
    setValue,
    getValues,
    control,
    register,
    formState: { errors },
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
  } else if (definitionObject.tabs) {
    // Tabs Form
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Tabs
          active={active}
          tabs={definitionObject.tabs}
          reset={reset}
          setValue={setValue}
          getValues={getValues}
          control={control}
          errors={errors}
          register={register}
          tabsProps={definitionObject.tabsProps}
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
