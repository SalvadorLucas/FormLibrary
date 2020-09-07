import React from 'react'
import Form from '../../src'
import Query from './Client/query'
import axios from 'axios'

const SimpleForm = React.forwardRef((props, ref) => {
    const [idsValues, setIdsValues] = React.useState({})
    const handleChange = (event) => {
        alert('change')
    }
    const onClick = () => {
        alert('onClick')
    }
    async function handleDispatchEvent(event) {
        return new Promise((resolve, reject) => {
            let newValues = idsValues
            newValues[event.detail.value.fieldName] = event.detail.value.value
            setIdsValues(newValues)
            if (newValues['tissueType'] && newValues['crop']) {
                axios.get('http://localhost:4000', {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }).then(response => {
                    resolve(response.data)
                }).catch(error => {
                    reject(error)
                })
            }
        })
    }
    const normalDefinition = {
        name: 'normal',
        title: 'Normal', // (optional)
        languagelabelid: 'language.label.id', // (optional)
        items: [
            {
                sm: 2, // 1 - 12 (optional but suggested)
                md: 3, // 1 - 12 (optional but suggested)
                lg: 3, // 1 - 12 (optional but suggested)
                component: 'textfield', // textField || Number || Email || DropDown || Date || Button
                name: 'entityListCode', // (optional but suggested)
                label: 'Entity List Code', // required
                type: 'text', // text || multiline (types for component:'textField')
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Crop', //optional
                itemValue: 'id',
                // disabled: true,
                // isRequired: true,
                // defaultValue:'Hello',
                // helper: 'Help',
                // controlledByEvent: 'myEvent',
                // handleDispatchEvent: handleDispatchEvent,
                cf: true,
                // languagelabelid: 'language.label.id'
            },
            {
                component: 'Button',
                name: 'search',
                label: 'Search',
                // onClick: onClick,
                // disabled: true,
                // languagelabelid: 'language.label.id'
                sm: 2,
                md: 1,
                lg: 1,
            },
            {
                component: 'number',
                // isRequired: false,
                type: 'number', //number, tel,
                name: 'totalEntities',
                label: 'Total Entities',
                // disabled: true,
                // defaultValue: 12,
                sm: 2,
                md: 3,
                lg: 3,
                // languagelabelid: 'language.label.id'
                cf: true,
                // helper: 'Help'
            },
            {
                component: 'Button',
                name: 'view',
                label: 'View',
                onClick: onClick,
                sm: 2,
                md: 1,
                lg: 1,
            },
            {
                component: 'dropDown',
                name: 'tissueType',
                label: 'Tissue Type',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Crop', //optional
                // itemOptions: [
                //     { id: 1, name: 'Uno'},
                //     { id: 2, name: 'Dos'},
                //     { id: 3, name: 'Tres'}
                // ],
                itemValue: 'id',
                itemLabel: 'description', // need by api
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
                component: 'dropDown',
                name: 'crop',
                label: 'Crop',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Crop', //optional
                itemLabel: 'description',
                itemValue: 'id'
                // customEventName: 'myEvent',
            },
            {
                component: 'dropDown',
                name: 'program',
                label: 'Program',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Purpose', //optional
                itemLabel: 'name',
                itemValue: 'id'
                // customEventName: 'cascadeEvent',
                // helper: 'Help'
            },
            {
                component: 'textfield',
                isRequired: false,
                type: 'text', //number, multiline
                name: 'requester',
                label: 'Requester',
                sm: 4,
                md: 4,
                lg: 4,
                // helper: 'Help'
            },
            {
                sm: 4,
                md: 4,
                lg: 4,
                component: 'email',
                name: 'requesterEmail',
                label: `Requester's Email`,
                // defaultValue: 'example@mail.com', // (optional)
                // isRequired: false, // (optional)
                // disabled: true, // (optional)
                // languagelabelid: 'language.label.id', // (optional but suggested)
                cf: true,
                // helper: 'Help', // (optional but suggested)
            },
            {
                component: 'textfield',
                isRequired: false,
                type: 'text', //number, multiline
                name: 'contact',
                label: 'Contact',
                sm: 4,
                md: 4,
                lg: 4,
                // helper: 'Help'
            },
            {
                component: 'email',
                isRequired: false,
                name: 'adminEmail',
                label: 'Admin Email',
                sm: 4,
                md: 4,
                lg: 4,
                // defaultValue: 's.ortega@cgiar.org',
                // helper: 'Help'
            },
            {
                component: 'textfield',
                isRequired: false,
                type: 'text', //number, multiline
                name: 'changeAccount',
                label: 'Change Account',
                sm: 4,
                md: 4,
                lg: 4,
                // helper: 'Help'
            },
            {
                sm: 4,
                md: 4,
                lg: 4,
                component: 'date',
                name: 'firstDate',
                label: 'First Date',
                // disabled: true, // optional
                languagelabelid: 'language.label.id', // (optional but suggested)
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
                component: 'date',
                name: 'submitionDate',
                label: 'Submition Date',
                // disabled: true, // optional
                languagelabelid: 'language.label.id', // (optional but suggested)
                cf: true,
                // helper: 'Help', // (optional)
                minDateAccordingTo: 'firstDate',
            },
            {
                component: 'textfield',
                isRequired: false,
                type: 'text', //number, multiline
                name: 'completeBy',
                label: 'Complete By',
                sm: 4,
                md: 4,
                lg: 4,
                // helper: 'Help'
            },
            {
                component: 'dropDown',
                name: 'service',
                label: 'Service',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Service', //optional
                itemLabel: 'name',
                itemValue: 'id'
                // helper: 'Help',
            },
            {
                component: 'dropDown',
                name: 'serviceProvider',
                label: 'Service Provider',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'ServiceProvider', //optional
                itemLabel: 'name',
                itemValue: 'id'
                // helper: 'Help'
            },
            {
                component: 'dropDown',
                name: 'purpose',
                label: 'Purpose',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Purpose', //optional
                itemLabel: 'name',
                itemValue: 'id'
                // helper: 'Help'
            },
            {
                component: 'dropDown',
                name: 'objective',
                label: 'Objective',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:18080/graphql', //optional
                entity: 'Program', //optional
                itemLabel: 'description',
                itemValue: 'id'
                // helper: 'Help'
            },
            {
                component: 'textfield',
                isRequired: false,
                type: 'multiline', //number, multiline
                name: 'instructions',
                label: 'Instructions Details',
                sm: 8,
                md: 8,
                lg: 8,
                // helper: 'Help'
            },
            {
                component: 'uploadFile',
                name: 'file',
                label: 'Upload File',
                sm: 12,
                md: 2,
                lg: 2,
                // disabled: true,
                cf: true,
                // helper: 'Help'
            }
        ]
    }
    const accordionDefinition = {
        name: 'accordion',
        title: 'Accordion', // (optional)
        description: 'Description', // (optional)
        languagelabelid: 'language.label.id', // (optional)
        groups: [
            {
                name: 'requestCreation',
                title: 'Request Creation',
                description: 'Request Creation description',
                items: [
                    {
                        sm: 2, // 1 - 12 (optional but suggested)
                        md: 3, // 1 - 12 (optional but suggested)
                        lg: 3, // 1 - 12 (optional but suggested)
                        component: 'textfield', // textField || Number || Email || DropDown || Date || Button
                        name: 'entityListCode', // (optional but suggested)
                        label: 'Entity List Code', // required
                        type: 'text', // text || multiline (types for component:'textField')
                        disabled: true,
                        // isRequired: true,
                        // defaultValue:'Hello',
                        // helper: 'Help',
                        controlledByEvent: 'myEvent',
                        handleDispatchEvent: handleDispatchEvent,
                        // languagelabelid: 'language.label.id'
                    },
                    {
                        component: 'Button',
                        name: 'search',
                        label: 'Search',
                        // onClick: onClick,
                        // disabled: true,
                        // languagelabelid: 'language.label.id'
                        sm: 2,
                        md: 1,
                        lg: 1,
                    },
                    {
                        component: 'number',
                        isRequired: false,
                        type: 'number', //text, multiline,
                        name: 'totalEntities',
                        label: 'Total Entities',
                        // disabled: true,
                        // defaultValue: 12,
                        sm: 2,
                        md: 3,
                        lg: 3,
                        // languagelabelid: 'language.label.id'
                        // helper: 'Help'
                    },
                    {
                        component: 'Button',
                        name: 'view',
                        label: 'View',
                        onClick: onClick,
                        sm: 2,
                        md: 1,
                        lg: 1,
                    },
                    {
                        component: 'dropDown',
                        name: 'tissueType',
                        label: 'Tissue Type',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'Country', //optional
                        // itemOptions: [
                        //     { id: 1, name: 'Uno'},
                        //     { id: 2, name: 'Dos'},
                        //     { id: 3, name: 'Tres'}
                        // ],
                        itemLabel: 'name', // need by api
                        // disabled: true,
                        // isRequired: true,
                        customEventName: 'myEvent',
                        // handleChange: handleChange,
                    }
                ]
            },
            {
                name: 'requesterSection',
                title: 'Requester Section',
                description: 'Requester Section description',
                items: [
                    {
                        component: 'dropDown',
                        name: 'crop',
                        label: 'Crop',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'Crop', //optional
                        itemLabel: 'description',
                        customEventName: 'myEvent',
                    },
                    {
                        component: 'dropDown',
                        name: 'program',
                        label: 'Program',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'Purpose', //optional
                        itemLabel: 'name',
                        // helper: 'Help'
                    },
                    {
                        component: 'textfield',
                        isRequired: false,
                        type: 'text', //number, multiline
                        name: 'requester',
                        label: 'Requester',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        // helper: 'Help'
                    },
                    {
                        sm: 4,
                        md: 4,
                        lg: 4,
                        component: 'email',
                        name: 'requesterEmail',
                        label: `Requester's Email`,
                        // defaultValue: 'example@mail.com', // (optional)
                        // isRequired: false, // (optional)
                        // disabled: true, // (optional)
                        languagelabelid: 'language.label.id', // (optional but suggested)
                        // helper: 'Help', // (optional but suggested)
                    },
                    {
                        component: 'textfield',
                        isRequired: false,
                        type: 'text', //number, multiline
                        name: 'contact',
                        label: 'Contact',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        // helper: 'Help'
                    },
                    {
                        component: 'email',
                        isRequired: false,
                        name: 'adminEmail',
                        label: 'Admin Email',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        // defaultValue: 's.ortega@cgiar.org',
                        // helper: 'Help'
                    },
                    {
                        component: 'textfield',
                        isRequired: false,
                        type: 'text', //number, multiline
                        name: 'changeAccount',
                        label: 'Change Account',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        // helper: 'Help'
                    },
                    {
                        sm: 4,
                        md: 4,
                        lg: 4,
                        component: 'date',
                        name: 'submitionDate',
                        label: 'Submition Date',
                        // disabled: true, // optional
                        languagelabelid: 'language.label.id', // (optional but suggested)
                        // helper: 'Help', // (optional)
                    },
                    {
                        component: 'textfield',
                        isRequired: false,
                        type: 'text', //number, multiline
                        name: 'completeBy',
                        label: 'Complete By',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        // helper: 'Help'
                    }
                ]
            },
            {
                name: 'serviceSection',
                title: 'Service Section',
                description: 'Service Section description',
                items: [
                    {
                        component: 'dropDown',
                        name: 'service',
                        label: 'Service',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'Service', //optional
                        itemLabel: 'name',
                        // helper: 'Help',
                    },
                    {
                        component: 'dropDown',
                        name: 'serviceProvider',
                        label: 'Service Provider',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'ServiceProvider', //optional
                        itemLabel: 'name',
                        // helper: 'Help'
                    },
                    {
                        component: 'dropDown',
                        name: 'purpose',
                        label: 'Purpose',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'Purpose', //optional
                        itemLabel: 'name',
                        // helper: 'Help'
                    },
                    {
                        component: 'dropDown',
                        name: 'objective',
                        label: 'Objective',
                        sm: 4,
                        md: 4,
                        lg: 4,
                        uri: 'http://localhost:18080/graphql', //optional
                        entity: 'Crop', //optional
                        itemLabel: 'description',
                        // helper: 'Help'
                    },
                    {
                        component: 'textfield',
                        isRequired: false,
                        type: 'multiline', //number, multiline
                        name: 'instructions',
                        label: 'Instructions Details',
                        sm: 8,
                        md: 8,
                        lg: 8,
                        // helper: 'Help'
                    },
                    {
                        component: 'uploadFile',
                        name: 'file',
                        label: 'Upload File',
                        sm: 12,
                        md: 2,
                        lg: 2,
                        // disabled: true,
                        // helper: 'Help'
                    }
                ]
            }
        ]
    }

    return (
        <div>
            <Form definition={normalDefinition} onSubmit={(values) => {
                console.log(values)
            }} />
            {/* <Form definition={accordionDefinition} onSubmit={(values) => {
                console.log(values)
            }} /> */}
        </div>
    )
})

export default SimpleForm