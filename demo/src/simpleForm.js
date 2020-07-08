import React from 'react'
import Form from '../../src'
import Query from './Client/query'
import axios from 'axios'

const SimpleForm = React.forwardRef((props, ref) => {
    const [idsValues, setIdsValues] = React.useState({})
    const handleChange = (event) => {
        console.log(event.target.value)
    }
    const onClick = () => {
        alert('onClick')
    }
    async function handleDispatchEvent(event) {
        return new Promise((resolve, reject) => {
            // Query('http://localhost:28080/graphql', 'Crop', event.detail.value).then(res => {
            //     resolve(res)
            // }).catch(error=>{
            //     reject(error)
            // })
            let newValues = idsValues
            console.log(event.detail.value)         
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
        name: 'normalForm',
        label: 'Normal Form',
        items: [
            {
                sm: 2, // 1 - 12 (optional but suggested)
                md: 3, // 1 - 12 (optional but suggested)
                lg: 3, // 1 - 12 (optional but suggested)
                component: 'textfield', // textField || Number || Email || DropDown || Date || Button
                name: 'requestCode', // (optional but suggested)
                label: 'Request Code', // required
                type: 'text', // text || multiline (types for component:'textField')
                disabled: true,
                isRequired: true,
                defaultValue:'Hello',
                helper: 'Help',
                controlledByEvent: 'myEvent',
                handleDispatchEvent: handleDispatchEvent
            },
            {
                component: 'Button',
                name: 'search',
                label: 'Search',
                onClick: onClick,
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
                sm: 2,
                md: 3,
                lg: 3,
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
                uri: 'http://localhost:28080/graphql', //optional
                entity: 'Country', //optional
                itemLabel: 'name', // need by api
                customEventName: 'myEvent',
                // handleChange: handleChange,
            },
            {
                component: 'dropDown',
                name: 'crop',
                label: 'Crop',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:28080/graphql', //optional
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
                uri: 'http://localhost:28080/graphql', //optional
                entity: 'Purpose', //optional
                itemLabel: 'name',
                // helper: 'Help'
            },
            {
                sm: 4,
                md: 4,
                lg: 4,
                component: 'email',
                name: 'requester',
                label: 'Requester',
                defaultValue: 'example@mail.com', // (optional)
                isRequired: false, // (optional)
                disabled: false, // (optional)
                languageLabelId: 'language.label.id', // (optional but suggested)
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
                isRequired: false, // (optional)
                defaultValue: '09/03/2020', // (optional)
                languageLabelId: 'language.label.id', // (optional but suggested)
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
            },
            {
                component: 'dropDown',
                name: 'service',
                label: 'Service',
                sm: 4,
                md: 4,
                lg: 4,
                uri: 'http://localhost:28080/graphql', //optional
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
                uri: 'http://localhost:28080/graphql', //optional
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
                uri: 'http://localhost:28080/graphql', //optional
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
                uri: 'http://localhost:28080/graphql', //optional
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
                sm: 12,
                md: 12,
                lg: 12,
                // helper: 'Help'
            },
        ]
    }

    return (
        <div>
            <Form definition={normalDefinition} onSubmit={(values) => {
                console.log(values)
            }} />
        </div>
    )
})

export default SimpleForm