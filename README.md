# ebs-form

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

EbsForm were developed to help the EBS FontEnd team to develop standardized interfaces faster.

## Installation

You can use the package manager [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) to install ebs-form.

```bash
npm install ebs-form
```

```bash
yarn add ebs-form
```

## Usage

```javascript
import React from "react";
import { Button } from "@material-ui/core";
import EbsForm from "ebs-form";

const normalDefinition = (props) => {
    const { getValues, setValue, reset } = props;
    return {
      name: "myForm",
      components: [
        {
          sizes: [12, 6, 4, 3, 2],
          component: "TextField",
          name: "TextField",
          inputProps: {
            label: "textfield",
          },
          rules: { required: "It's required" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "CheckBox",
          name: "checkbox",
          title: "Check Box Group",
          options: [{ label: "Hello" }, { label: "World" }],
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "DatePicker",
          name: "datepicker",
          inputProps: {
            label: "DatePicker",
          },
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
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Select",
          name: "select",
          options: users,
          inputProps: {
            placeholder: "Hello",
          },
          defaultValue: { label: "Uno", value: 1 },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Switch",
          name: "switch",
          label: "Switch",
          defaultValue: true,
          inputProps: { disabled: true, color: "primary" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Button",
          name: "button",
          label: "Button",
          buttonProps: {
            color: "primary",
            variant: "outlined",
          },
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
            input: {
                acceptedFiles: [".csv"],
                cancelButtonText: "cancel",
                submitButtonText: "submit",
                maxFileSize: 5000000,
                showPreviews: true,
                showFileNamesInPreview: true,
              },
        },
      ],
    };
  };

const onSubmit = (data) => {
  console.log(data);
};

const Demo = (props) => {

  return (
    <div>
      <EbsForm definition={normalDefinition} onSubmit={onSubmit}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </EbsForm>
    </div>
  );
};
```

## Properties

| Name       | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| definition | _func_ | Function to defines the Form structure Signature: function({ _getValues_: `func`, _setValue_: `func`, _reset_: `func` }) => `object`. `getValues:` This function allows you to dynamically get the values of the form. `setValue:` This function allows you to dynamically set the value of a component. `reset:` Reset the fields' values and errors, you have the freedom to only reset specific component values. You can pass values as an optional argument to reset your form to the assigned default values |
| onSubmit   | _func_ | Function to handle form data                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| children\* | _node_ | Nodes to show under the form                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

### getValues: _(payload?: string | string[]) => Object_

1. getValues(): Read all form values.
2. getValues('test'): Read an individual field value by name.
3. getValues(['test', 'test1']): Read multiple fields by name.

### setValues: _(name: string, value: any, config?: Object) => void_

1. setValue('name', 'value'): Set a component value.
2. You can also set the shouldValidate parameter to true in order to trigger a field validation.
   - setValue('name', 'value', { shouldValidate: true })

### reset: _(values?: Record<string, any>, omitResetState?: Record<string, boolean>) => void_

When invoking reset({ value }) without supply defaultValues, the form will replace defaultValues with shallow clone value object which you have supplied

## Examples

### Accordion Form

```javascript
import React from "react";
import { Button } from "@material-ui/core";
import EbsForm from "ebs-form";

const accordionDefinition = (props) => {
  const { getValues, setValue, reset } = props;

  return {
    name: "accordion",
    groups: [
      {
        name: "myForm",
        title: "My Form",
        components: [
          {
            sizes: [12, 6, 4, 3, 2],
            component: "TextField",
            name: "TextField",
            inputProps: {
              label: "textfield",
            },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "CheckBox",
            name: "checkbox",
            title: "Check Box Group",
            options: [{ label: "Hello" }, { label: "World" }],
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "DatePicker",
            name: "datepicker",
            inputProps: {
              label: "DatePicker",
            },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "Radio",
            name: "radiogroup",
            label: "Radio Group",
            options: [
              { label: "One", value: 1, disabled: true },
              { label: "Two", value: 2, color: "primary" },
            ],
            defaultValue: { label: "One", value: 1 },
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
              placeholder: "hola",
            },
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "Switch",
            name: "switch",
            label: "Switch",
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
          },
          {
            sizes: [12, 6, 4, 3, 2],
            component: "File",
            name: "file",
            label: "Choose a file...",
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
            rules: {
              required: <p>Is required</p>,
            },
          },
        ],
      },
    ],
  };
};

const onSubmit = (data) => {
  console.log(data);
};

const Demo = (props) => {
  return (
    <div>
            
      <EbsForm definition={accordionDefinition} onSubmit={onSubmit}>
                
        <Button type="submit" variant="contained" color="primary">
                    Submit         
        </Button>
              
      </EbsForm>
          
    </div>
  );
};
```

### Normal Form

```javascript
import React from "react";
import { Button } from "@material-ui/core";
import EbsForm from "ebs-form";

const normalDefinition = (props) => {
    const { getValues, setValue, reset } = props;
    return {
      name: "myForm",
      components: [
        {
          sizes: [12, 6, 4, 3, 2],
          component: "TextField",
          name: "TextField",
          inputProps: {
            label: "textfield",
          },
          rules: { required: "It's required" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "CheckBox",
          name: "checkbox",
          title: "Check Box Group",
          options: [{ label: "Hello" }, { label: "World" }],
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "DatePicker",
          name: "datepicker",
          inputProps: {
            label: "DatePicker",
          },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Radio",
          name: "radiogroup",
          label: "Radio Group",
          row: false,
          options: [
            { label: "Uno", value: 1, disabled: true },
            { label: "Dos", value: 2, color: "primary" },
          ],
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Select",
          name: "select",
          options: users,
          inputProps: {
            placeholder: "Hello",
          },
          defaultValue: { label: "Uno", value: 1 },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Switch",
          name: "switch",
          label: "Switch",
          defaultValue: true,
          inputProps: { disabled: true, color: "primary" },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "Button",
          name: "button",
          label: "Button",
          buttonProps: {
            color: "primary",
            variant: "outlined",
          },
        },
        {
          sizes: [12, 6, 4, 3, 2],
          component: "File",
          name: "file",
          label: "Choose a file...",
          customProps: {
            button: {
              color: "primary",
              variant: "outlined",
              size: "small",
            },
            input: {
                acceptedFiles: [".csv"],
                cancelButtonText: "cancel",
                submitButtonText: "submit",
                maxFileSize: 5000000,
                showPreviews: true,
                showFileNamesInPreview: true,
              },
        },
      ],
    };
  };

const onSubmit = (data) => {
  console.log(data);
};

const Demo = (props) => {
  
  return (
    <div>
      <EbsForm definition={normalDefinition} onSubmit={onSubmit}>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </EbsForm>
    </div>
  );
};
```

## Components API

### Helper Attributes

1. arrow: _bool_ => If true, adds an arrow to the helper.
2. classes: _object_ => Override or extend the styles applied to the component.
3. placement: _'bottom-end'| 'bottom-start'| 'bottom'| 'left-end'| 'left-start'| 'left'| 'right-end'| 'right-start'| 'right'| 'top-end'| 'top-start'| 'top'_
4. title: _node_ => label to show

### Button

| Name        | Type     | Default                                    | Description                                                                                                                                                 |
| ----------- | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes       | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden. |
| name        | `String` |                                            | Defines the component name.                                                                                                                                 |
| buttonProps | `Object` |                                            | Attributes applied to the element.                                                                                                                          |
| helper      | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                           |
| label       | `Node`   |                                            | Component or text to show as label.                                                                                                                         |

#### buttonProps Attributes

- classes: Override or extend the styles applied to the component
  color: 'default'| 'inherit'| 'primary'| 'secondary'
- disabled: bool
- endIcon: node
- fullWidth: bool
- size: 'large'| 'medium'| 'small'
- startIcon: node

### CheckBox

| Name       | Type     | Default                                    | Description                                                                                                                                                      |
| ---------- | -------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes      | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden.      |
| name       | `String` |                                            | Defines the component name.                                                                                                                                      |
| checkProps | `Object` |                                            | Attributes applied to all checkbox.                                                                                                                              |
| helper     | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                                |
| title      | `Node`   |                                            | Component or text to show on Top as label.                                                                                                                       |
| options    | `Array`  | _[{}]_                                     | CheckBox options, it can be only one or multiple. Signature: `{{ label: "Hello", defaultValue: false },{ label: <p>World</p>}}`                                  |
| onChange   | `Func`   |                                            | `function(event: object) => void` _event_: The event source of the callback. You can pull out the new checked state by accessing event.target.checked (boolean). |

#### checkProps Attributes

- classes: Override or extend the styles applied to the component
- color: 'default'| 'primary'| 'secondary'
- disabled: bool
- icon: node
- size: 'medium'| 'small'

### DatePicker

| Name         | Type     | Default                                    | Description                                                                                                                                                 |
| ------------ | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes        | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden. |
| Name         | `String` |                                            | Defines the component name.                                                                                                                                 |
| inputProps   | `Object` |                                            | [Attributes](https://material-ui-pickers.dev/api/KeyboardDatePicker) applied to the element.                                                                |
| helper       | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                           |
| defaultValue | `Date`   | _new Date()_                               | Picker defaultValue                                                                                                                                         |
| onChange     | `Func`   |                                            | `function(event: object) => void` _event:_ The event source of the callback. You can pull out the date selected.                                            |
| rules        | `Object` |                                            | Rules to validate element. (see Validation section)                                                                                                         |

### Select

| Name         | Type     | Default                                    | Description                                                                                                                                                                                    |
| ------------ | -------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes        | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden.                                    |
| name         | `String` |                                            | Defines the component name.                                                                                                                                                                    |
| inputProps   | `Object` |                                            | Attributes applied to the element.                                                                                                                                                             |
| helper       | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                                                              |
| defaultValue | `Array`  | _[{}]_                                     | Value(s) selected by default Signature: `[{ label: "One", value: 1 }]`                                                                                                                         |
| onChange     | `Func`   |                                            | `function(event: object) => void` _event:_ The event source of the callback. You can pull out the option selected.                                                                             |
| rules        | `Object` |                                            | Rules to validate element. (see Validation section)                                                                                                                                            |
| options      | `Array`  |                                            | As minimum structure for each object you must to send label and value. Signature: `[{ label: "One", value: 1, color: '#00B8D9', isFixed: true },{ label: "Two", value: 2, isDisabled: true }]` |

#### inputProps Attributes

- className: Override or extend the styles applied to the component
- color: 'default'| 'primary'| 'secondary'
- isDisabled: bool
- placeholder: node
- isMulti: bool

### RadioGroup

| Name         | Type     | Default                                    | Description                                                                                                                                                  |
| ------------ | -------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| sizes        | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden.  |
| Name         | `String` |                                            | Defines the component name.                                                                                                                                  |
| helper       | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                            |
| label        | `Node`   |                                            | Component or text to show on Top as label.                                                                                                                   |
| options      | `Array`  | _[{}]_                                     | Radio options, it can be only one or multiple. Signature: `{{ label: "One", value: 1, disabled: true },{ label: <p>World</p>, value: 2, color: "primary" }}` |
| row          | `Bool`   | _false_                                    | Defines the flex-direction style property. It is applied for all screen sizes.                                                                               |
| defaultValue | `Object` |                                            | Radio selected by default Signaure: `{ label: "Hello", value:1 }`                                                                                            |
| rules        | `Object` |                                            | Rules to validate element. (see Validation section)                                                                                                          |

### Switch

| Name         | Type     | Default                                    | Description                                                                                                                                                                                                                               |
| ------------ | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes        | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden.                                                                               |
| Name         | `String` |                                            | Defines the component name.                                                                                                                                                                                                               |
| inputProps   | `Object` |                                            | Attributes applied to the element.                                                                                                                                                                                                        |
| helper       | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                                                                                                         |
| defaultValue | `bool`   | _false_                                    | If true, the component is checked.                                                                                                                                                                                                        |
| onChange     | `Func`   |                                            | `function(event: object) => void` _event:_ The event source of the callback. You can pull out the new value by accessing event.target.value (string). You can pull out the new checked state by accessing event.target.checked (boolean). |
| label        | `Node`   |                                            | Component or text to show on Top as label.                                                                                                                                                                                                |
| rules        | `Object` |                                            | Rules to validate element. (see Validation section)                                                                                                                                                                                       |

#### inputProps Attributes

- classes: Override or extend the styles applied to the component
- color: 'default'| 'primary'| 'secondary'
- disabled: bool
- size: 'medium'| 'small'

### TextField

| Name         | Type     | Default                                    | Description                                                                                                                                                 |
| ------------ | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes        | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden. |
| Name         | `String` |                                            | Defines the component name.                                                                                                                                 |
| inputProps   | `Object` |                                            | Attributes applied to the element.                                                                                                                          |
| helper       | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                           |
| defaultValue | `Node`   | _""_                                       | Component or text to show as defaultValue.                                                                                                                  |
| rules        | `Object` |                                            | Rules to validate element. (see Validation section)                                                                                                         |

#### inputProps Attributes

- classes: Override or extend the styles applied to the component
- color: 'primary'| 'secondary'
- disabled: bool
- label: node
- multiline: bool
- fullWidth: bool
- size: 'medium'| 'small'
- rows: int => Number of rows to display when multiline option is set to true.

### File

| Name        | Type     | Default                                    | Definition                                                                                                                                                  |
| ----------- | -------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sizes       | `Array`  | _["auto", "auto", "auto", "auto", "auto"]_ | Defines the number of grids the component is going to use. It's applied for the ["xs","sm","md","lg","xl"] breakpoints and wider screens if not overridden. |
| name        | `String` |                                            | Defines the component name.                                                                                                                                 |
| customProps | `Object` |                                            | Attributes applied to the element.                                                                                                                          |
| helper      | `Object` |                                            | Attributes applied to the helper element. (see Helper Attributes)                                                                                           |
| label       | `Node`   |                                            | Component or text to show as label.                                                                                                                         |
| rules       | `Object` |                                            | Rules to validate the element. (see Validation section)                                                                                                     |

#### customProps Attributes

- button: `object`
  - classes: Override or extend the styles applied to the component
  - color: 'default'| 'inherit'| 'primary'| 'secondary'
  - disabled: bool
  - endIcon: node
  - fullWidth: bool
  - size: 'large'| 'medium'| 'small'
  - startIcon: node
- input: `object`
  - acceptedFiles: {['image/*']}
  - cancelButtonText: {"cancel"}
  - submitButtonText: {"submit"}
  - maxFileSize: {5000000}
  - showPreviews: {true}
  - showFileNamesInPreview: {true}

## Apply Validations

List of validation rules supported:

- required
- min
- max
- minLength
- maxLength
- pattern
- validate

### Example

```javascript
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
            min: 8,
            max: 99,
            patern: /^[A-Za-z]+$/i,
            validate: (value) => {
              return value == "Hello world";
            },
            required: "It's required",
          },
        },
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
