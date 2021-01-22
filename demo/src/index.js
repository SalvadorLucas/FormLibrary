import React, { Component } from 'react'
import { render } from 'react-dom'
// import Form from './simpleForm'
import App from '../../src/App'

const normalDefinition = {
  name: "normal",
  title: "Normal", // (optional)
  languagelabelid: "language.label.id", // (optional)
  items: [
    {
      sm: 2, // 1 - 12 (optional but suggested)
      md: 3, // 1 - 12 (optional but suggested)
      lg: 3, // 1 - 12 (optional but suggested)
      component: "textfield", // textField || Number || Email || DropDown || Date || Button
      name: "entityListCode", // (optional but suggested)
      label: "Entity List Code", // required
      type: "text", // text || multiline (types for component:'textField')
      // disabled: true,
      // isRequired: true,
      defaultValue:'Hello',
      // helper: 'Help',
      // controlledByEvent: 'myEvent',
      // handleDispatchEvent: handleDispatchEvent,
      cf: true,
      // languagelabelid: 'language.label.id'
    },
    {
      component: "number",
      // isRequired: false,
      type: "number", //number, tel,
      name: "totalEntities",
      label: "Total Entities",
      // disabled: true,
      defaultValue: 12,
      sm: 2,
      md: 3,
      lg: 3,
      // languagelabelid: 'language.label.id'
      cf: true,
      // helper: 'Help'
    },
    {
      component: "dropDown",
      name: "tissueType",
      label: "Tissue Type",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "Crop", //optional
      defaultValue: 1,
      // itemOptions: [
      //     { id: 1, name: 'Uno'},
      //     { id: 2, name: 'Dos'},
      //     { id: 3, name: 'Tres'}
      // ],
      itemValue: "id",
      itemLabel: "description", // need by api
      // disabled: true,
      // isRequired: true,
      // cascadeSettings: {
      //     controlledByEvent: 'cascadeEvent',
      //     cascadeFilterByColumn: 'description',
      //     enableOnRefresh: true, // default false
      // },
      // customEventName: 'myEvent',
      // handleChange: handleChange,
      cf: true,
    },
    {
      component: "dropDown",
      name: "crop",
      label: "Crop",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "Crop", //optional
      itemLabel: "description",
      itemValue: "id",
      // customEventName: 'myEvent',
    },
    {
      component: "dropDown",
      name: "program",
      label: "Program",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "Purpose", //optional
      itemLabel: "name",
      itemValue: "id",
      // customEventName: 'cascadeEvent',
      // helper: 'Help'
    },
    {
      component: "textfield",
      isRequired: false,
      type: "text", //number, multiline
      name: "requester",
      label: "Requester",
      sm: 4,
      md: 4,
      lg: 4,
      // helper: 'Help'
    },
    {
      sm: 4,
      md: 4,
      lg: 4,
      component: "email",
      name: "requesterEmail",
      label: `Requester's Email`,
      // defaultValue: 'example@mail.com', // (optional)
      // isRequired: false, // (optional)
      // disabled: true, // (optional)
      // languagelabelid: 'language.label.id', // (optional but suggested)
      cf: true,
      // helper: 'Help', // (optional but suggested)
    },
    {
      component: "textfield",
      isRequired: false,
      type: "text", //number, multiline
      name: "contact",
      label: "Contact",
      sm: 4,
      md: 4,
      lg: 4,
      // helper: 'Help'
    },
    {
      component: "email",
      isRequired: false,
      name: "adminEmail",
      label: "Admin Email",
      sm: 4,
      md: 4,
      lg: 4,
      // defaultValue: 's.ortega@cgiar.org',
      // helper: 'Help'
    },
    {
      component: "textfield",
      isRequired: false,
      type: "text", //number, multiline
      name: "changeAccount",
      label: "Change Account",
      sm: 4,
      md: 4,
      lg: 4,
      // helper: 'Help'
    },
    {
      sm: 4,
      md: 4,
      lg: 4,
      component: "date",
      name: "firstDate",
      label: "First Date",
      // disabled: true, // optional
      languagelabelid: "language.label.id", // (optional but suggested)
      cf: true,
      // helper: 'Help', // (optional)
      // minDate: Date('2020-01-01'), // (optional) format: YYYY-MM-DD
      // maxDate: Date('2020-01-01'), // (optional)
      // minDateAccordingTo: 'firstDate', (Optional)
    },
    {
      sm: 4,
      md: 4,
      lg: 4,
      component: "date",
      name: "submitionDate",
      label: "Submition Date",
      // disabled: true, // optional
      languagelabelid: "language.label.id", // (optional but suggested)
      cf: true,
      // helper: 'Help', // (optional)
      minDateAccordingTo: "firstDate",
    },
    {
      component: "textfield",
      isRequired: false,
      type: "text", //number, multiline
      name: "completeBy",
      label: "Complete By",
      sm: 4,
      md: 4,
      lg: 4,
      // helper: 'Help'
    },
    {
      component: "dropDown",
      name: "service",
      label: "Service",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "Service", //optional
      itemLabel: "name",
      itemValue: "id",
      // helper: 'Help',
    },
    {
      component: "dropDown",
      name: "serviceProvider",
      label: "Service Provider",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "ServiceProvider", //optional
      itemLabel: "name",
      itemValue: "id",
      // helper: 'Help'
    },
    {
      component: "dropDown",
      name: "purpose",
      label: "Purpose",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "Purpose", //optional
      itemLabel: "name",
      itemValue: "id",
      // helper: 'Help'
    },
    {
      component: "dropDown",
      name: "objective",
      label: "Objective",
      sm: 4,
      md: 4,
      lg: 4,
      uri: "http://localhost:18080/graphql", //optional
      entity: "Program", //optional
      itemLabel: "description",
      itemValue: "id",
      // helper: 'Help'
    },
    {
      component: "textfield",
      isRequired: false,
      type: "multiline", //number, multiline
      name: "instructions",
      label: "Instructions Details",
      sm: 8,
      md: 8,
      lg: 8,
      // helper: 'Help'
    },
    {
      component: "uploadFile",
      name: "file",
      label: "Upload File",
      sm: 12,
      md: 2,
      lg: 2,
      // disabled: true,
      cf: true,
      // helper: 'Help'
    },
  ],
};

class Demo extends Component {
  render() {
    return <div>
      {/* <Form /> */}
      <App definition={normalDefinition}/>
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
