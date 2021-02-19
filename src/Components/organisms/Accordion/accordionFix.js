import React from "react";
import PropTypes from "prop-types";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Grid from "../../molecules/Grid";

export default function CustomizedAccordion(props) {
  const { groups, accordionProps, ...rest } = props;
  // Accordion State
  const [expanded, setExpanded] = React.useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // Building each group
  return (
    <div data-testid={"AccordionTestId"} {...accordionProps}>
      {groups.map((group, key) => (
        <MuiAccordion
          square
          expanded={expanded === key}
          onChange={handleChange(key)}
          key={key}
        >
          <MuiAccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            {...(group.groupProps && group.groupProps.summary)}
          >
            <Typography>{group.name}</Typography>
          </MuiAccordionSummary>
          <MuiAccordionDetails
            {...(group.groupProps && group.groupProps.details)}
          >
            <Grid components={group.components} {...rest} />
          </MuiAccordionDetails>
        </MuiAccordion>
      ))}
    </div>
  );
}

CustomizedAccordion.propTypes = {
  groups: PropTypes.array,
};
CustomizedAccordion.defaultProps = {};
