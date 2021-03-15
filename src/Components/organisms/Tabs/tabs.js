import React from "react";
import PropTypes from "prop-types";
// CORE COMPONENTS AND MOLECULES TO USE
import { Box } from "@material-ui/core";
import Grid from "../../molecules/Grid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

//MAIN FUNCTION
/*
 @param props: component properties
 @param ref: reference made by React.forward
*/
const TabsOrganism = React.forwardRef((props, ref) => {
  const { tabs, tabsProps, active, ...rest } = props;

  return (
    /* 
     @prop data-testid: Id to use inside tabs.test.js file.
     */
    <div ref={ref}>
      {tabs.map((tab, key) => (
        <TabPanel value={active} index={tab.index} key={key}>
          <Grid components={tab.components} {...rest} />
        </TabPanel>
      ))}
    </div>
  );
});
// Type and required properties
TabsOrganism.propTypes = {};
// Default properties
TabsOrganism.defaultProps = {};

export default TabsOrganism;
