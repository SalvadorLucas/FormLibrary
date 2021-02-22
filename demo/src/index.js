import React from "react";
import { render } from "react-dom";
import App from "../../src/index";
import { Button } from "@material-ui/core";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { USER_LIST } from "./query";
import { Add } from "@material-ui/icons";

const Client = new ApolloClient({
  cache: new InMemoryCache({
    addTypename: false,
  }),
  uri: "http://localhost:18080/graphql",
  headers: {
    authorization:
      localStorage.getItem("id_token") ||
      "Bearer eyJ4NXQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmciLCJraWQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmdfUlMyNTYiLCJhbGciOiJSUzI1NiJ9.eyJodHRwOlwvXC93c28yLm9yZ1wvY2xhaW1zXC91c2VybmFtZSI6InhLNW04dUxjbWtsR3Nqb3J1aWRzelhzNnpMaHFEX1YyTTF1SUtyNl9Vd3MiLCJzdWIiOiJ4SzVtOHVMY21rbEdzam9ydWlkc3pYczZ6TGhxRF9WMk0xdUlLcjZfVXdzIiwiaHR0cDpcL1wvd3NvMi5vcmdcL2NsYWltc1wvcm9sZSI6WyIyMzdjMGM3YS1lYmU0LTRlYjYtYWM1OC1kNTc2ZmQ2MmM3YTkiLCIwYmRhNTczYi1lMTc4LTQ4MjQtOTVkMi03NDcwYjFiMzRlYjQiLCI5NGQ0MWZlMi00ZTcwLTQ3OTAtYTIzOC01YzVjMTRiMjc4MWMiLCI3ZDFhODczOS1jOWE5LTQ2MDYtODg3Ny1kYzkyZWYwNmVhNjgiLCJlMzBkOWUxMS1kNWJiLTQ1YjMtYTExOC02Mjg2ZDQ4N2RmYmYiLCIwNjY2MzYxYi1iMjk4LTRjMjMtYjBhMi00MGIyZDE1YWYyMjciLCJjNTMyNTNiZS0xYjY4LTQ0MjEtYmMxYi1jM2M5YWNlYTdhN2MiLCIxMDgwNjE1My0zZWNhLTRjODgtYjU2Yi04YzdmYzMwZDZmMGMiLCJiMDE3ZDExYi1lNDI5LTRiOTMtOWY3NC1jZWQ1MTcwMGE5NWQiLCJiY2RmOWNjMC04MDA1LTQ3NmYtYmIwNS03MWM5NmYwMzgxYTYiLCI0ZjZiODcwZS0xYjY2LTQ0YzgtYWMxYy1mMGUzNWYyNGQyODAiXSwiaXNzIjoiaHR0cHM6XC9cL2Vicy5jaW1teXQub3JnOjk0NDNcL29hdXRoMlwvdG9rZW4iLCJhdWQiOiJUN0JWdnFVb0hUZjR2aEJVSjlkVk45emZLR1lhIiwibmJmIjoxNTkxODU1MzY0LCJodHRwOlwvXC93c28yLm9yZ1wvY2xhaW1zXC9mdWxsbmFtZSI6WyJCUklPTkVTIFBFUkVZUkEiLCIgRXJuZXN0byBKb3NlIChDSU1NWVQpIl0sImh0dHA6XC9cL3dzbzIub3JnXC9jbGFpbXNcL2Rpc3BsYXlOYW1lIjoiRS5CUklPTkVTQENJTU1ZVC5PUkciLCJhenAiOiJUN0JWdnFVb0hUZjR2aEJVSjlkVk45emZLR1lhIiwic2NvcGUiOiJvcGVuaWQiLCJodHRwOlwvXC93c28yLm9yZ1wvY2xhaW1zXC9lbWFpbGFkZHJlc3MiOiJFLkJSSU9ORVNAY2ltbXl0Lm9ubWljcm9zb2Z0LmNvbSIsImV4cCI6MTU5MTg1ODk2NCwiaWF0IjoxNTkxODU1MzY0LCJqdGkiOiI0NDBlMzc2OC05NTlhLTRiODgtOWYyYS04Y2NhNjMxNWVhYmUifQ.gy7fE1Wf8GFQix9KnmCFI-3IIIYn1Wiq6GeIAca7gZnn5SCH3OeNpRYdVIih3Xs0t0EJkW4YuD5LTIICMNywpVKh93FfoYVIhbw1ghDcnBmcv__VwKlIuX7CTOLjzpID3PqYfIzkEeaxdaVx5zFutcWcKzzBGpUR8FypTYvCMnpWa9RZKhUvGvhAG_KC4HsnHVDkaE1HVmuR1_fOsCJg8E2JUxVFKnBe8uF40m_wyT_MeKRQvCF-2OKqVmsbF9Qi9hH-Juf7_X2WiKfbcAj-5p85KDxocUEGK04coVU2kIb0-886G5My-4IiqqpjxDGgprg4GescWkXxYaBTootCbQ",
  },
});

const accordionDefinition = (props) => {
  const { getValues, setValue, reset } = props;

  return {
    name: "accordion",
    groups: [
      {
        name: "requestCreation",
        title: "Request Creation",
        description: "Request Creation description",
        components: [
          {
            sizes: [12, 6, 4, 3, 2],
            component: "TextField",
            name: "TextField",
            inputProps: {
              label: "textfield",
              disabled: false,
              rows: 5,
              size: "medium",
              variant: "outlined",
            },
            helper: { title: "ayuda", placement: "right", arrow: true },
            defaultValue: "Hola mundo",
            rules: { required: "It's required" },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "CheckBox",
            name: "checkbox",
            title: "Check Box Group",
            options: [{ label: "Hola" }, { label: "Adios" }],
            checkProps: { color: "secondary" },
            onChange: (e) => console.log(e.target.checked),
            defaultValue: true,
            helper: { title: "ayuda", placement: "top-start", arrow: true },
            rules: { required: "It's required" },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "DatePicker",
            name: "datepicker",
            inputProps: {
              autoOk: true,
              variant: "inline",
              inputVariant: "outlined",
              label: "DatePicker",
              disabled: true,
            },
            onChange: (e) => console.log(e),
            defaultValue: new Date(),
            helper: { title: "ayuda", placement: "right", arrow: true },
            rules: { required: "It's required" },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "Radio",
            name: "radiogroup",
            label: "Radio Group",
            row: false,
            options: [
              { label: "Uno", value: 1, disabled: true },
              { label: "Dos", value: 2, color: "primary" },
            ],
            defaultValue: { label: "Uno", value: 1 },
            helper: { title: "ayuda", placement: "top-start", arrow: true },
            rules: { required: "It's required" },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "Select",
            name: "select",
            label: "Select",
            options: [
              { label: "Uno", value: 1 },
              { label: "Dos", value: 2 },
            ],
            inputProps: {
              isDisabled: false,
              isMulti: true,
              placeholder: "hola",
            },
            onChange: (e) => console.log(e),
            defaultValue: { label: "Uno", value: 1 },
            helper: { title: "ayuda", placement: "right", arrow: true },
            rules: { required: "It's required" },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "Switch",
            name: "switch",
            label: "Switch",
            onChange: (e) => console.log(e.target.checked),
            defaultValue: true,
            inputProps: { disabled: false, color: "primary" },
            helper: { title: "ayuda", placement: "right", arrow: true },
            rules: {},
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "Button",
            name: "button",
            label: "Button",
            onClick: (e) => {
              reset({});
            },
            buttonProps: {
              color: "primary",
              variant: "outlined",
            },
            helper: { title: "ayuda", placement: "right", arrow: true },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "File",
            name: "file",
            label: "Choose a file...",
            onClick: (e) => {
              e.preventDefault();
            },
            customProps: {
              button: { color: "primary", variant: "contained" },
              input: {
                acceptedFiles: [".csv"],
                cancelButtonText: "cancel",
                submitButtonText: "submit",
                maxFileSize: 5000000,
                showPreviews: true,
                showFileNamesInPreview: true,
              },
            },
            helper: { title: "ayuda", placement: "right", arrow: true },
            // rules: {
            //   required: <p>Is required</p>,
            // },
          },
        ],
      },
    ],
  };
};

const Demo = (props) => {
  const normalDefinition = (props) => {
    const { getValues, setValue, reset } = props;
    return {
      name: "requestCreation",
      components: [
        {
          sizes: [12, 6, 4, 3, 2],
          component: "TextField",
          name: "TextField",
          inputProps: {
            label: "textfield",
            disabled: false,
            rows: 5,
            size: "medium",
            variant: "outlined",
          },
          helper: { title: "ayuda", placement: "right", arrow: true },
          defaultValue: "Hola mundo",
          rules: {
            min: 18, 
            max: 99,
            patern: /^[A-Za-z]+$/i,
            validate: (value) => {
              return value == "Hello workd";
            },
            required: "It's required",
          },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "CheckBox",
          name: "checkbox",
          title: "Check Box Group",
          options: [{ label: "Hola", defaultValue: true }, { label: "Adios" }],
          checkProps: { color: "secondary" },
          onChange: (e) => console.log(e.target.checked),
          helper: { title: "ayuda", placement: "top-start", arrow: true },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "DatePicker",
          name: "datepicker",
          inputProps: {
            autoOk: true,
            variant: "inline",
            inputVariant: "outlined",
            label: "DatePicker",
            disabled: true,
          },
          onChange: (e) => console.log(e),
          defaultValue: new Date(),
          helper: { title: "ayuda", placement: "right", arrow: true },
          rules: { required: "It's required" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Radio",
          name: "radiogroup",
          label: "Radio Group",
          row: true,
          options: [
            { label: "Uno", value: 1, disabled: true },
            { label: "Dos", value: 2, color: "primary" },
          ],
          defaultValue: { label: "Uno", value: 1 },
          helper: { title: "ayuda", placement: "top-start", arrow: true },
          rules: { required: "It's required" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Select",
          name: "select",
          options: [
            { label: "Uno", value: 1 },
            { label: "Dos", value: 2 },
          ],
          inputProps: {
            isDisabled: false,
            isMulti: true,
            placeholder: "hola",
          },
          onChange: (e) => console.log(e),
          // defaultValue: { label: "Uno", value: 1 },
          helper: { title: "ayuda", placement: "right", arrow: true },
          // rules: { required: "It's required" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Switch",
          name: "switch",
          label: "Switch",
          onChange: (e) => console.log(e.target.checked),
          defaultValue: true,
          inputProps: { disabled: false, color: "primary" },
          helper: { title: "ayuda", placement: "right", arrow: true },
          rules: {},
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Button",
          name: "button",
          label: "Button",
          // onClick: (e) => {},
          buttonProps: {
            color: "primary",
            variant: "outlined",
            startIcon: <Add />,
          },
          helper: { title: "ayuda", placement: "right", arrow: true },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "File",
          name: "file",
          label: "Choose a file...",
          customProps: {
            button: {
              color: "primary",
              variant: "outlined",
              size: "small",
            },
            input: {},
          },
          helper: { title: "ayuda", placement: "right", arrow: true },
          // rules: { required: "It's required" },
        },
      ],
    };
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <App definition={normalDefinition} onSubmit={onSubmit}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </App>
    </div>
  );
};

render(<Demo />, document.querySelector("#demo"));
