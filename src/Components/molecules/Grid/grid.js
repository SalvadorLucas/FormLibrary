import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS AND MOLECULES TO USE
import { Grid } from "@material-ui/core";
import FormComponent from "./formcomponent";
//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const GridMolecule = React.forwardRef((props, ref) => {
  // Properties of the organism
  const { components, ...rest } = props;
  return (
    /* 
     @prop data-testid: Id to use inside grid.test.js file.
     */
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      data-testid={"GridTestId"}
      spacing={1}
    >
      {components.map((component, key) => (
        <Grid
          item
          xs={component.sizes[0]}
          sm={component.sizes[1]}
          md={component.sizes[2]}
          lg={component.sizes[3]}
          xl={component.sizes[4]}
          key={key}
        >
          <FormComponent {...component} {...rest} />
        </Grid>
      ))}
    </Grid>
  );
});
// Type and required properties
GridMolecule.propTypes = {
  component: PropTypes.array,
};
// Default properties
GridMolecule.defaultProps = {};
export default GridMolecule;
