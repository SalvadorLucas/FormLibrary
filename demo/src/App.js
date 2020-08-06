import React from 'react'
import Query from './Client/query'
import { transform } from 'node-json-transform'
import axios from 'axios'
import EbsForm from '../../src'

export default function App(props) {
    const [allValues, setAllValues] = React.useState(null)
    const [idsValues, setIdsValues] = React.useState({})
    const [serviceTypeValues, setServiceTypeValues] = React.useState([])

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
    async function handleCropChange(event) {
        return new Promise((resolve, reject) => {
            const query = `{
                findCrop(id:${event.detail.value.value}){
                    crop_name
                    programs{
                      program_code
                      program_name     
                    }
                    serviceproviders{
                      id
                      name
                      servicetypes{
                        id
                        name
                        purposes{
                          id
                          name                        
                        }
                      }
                    }
                  }
            }`
            event.detail.value.fieldName === 'crop' ?
                Query('http://localhost:18080/graphql', 'Crop', query)
                    .then(response => {
                        setAllValues(response)
                        resolve(response.programs)
                    })
                    .catch(error => {
                        console.error(error)
                    })
                : null
        })
    }
    async function handleProgramChange(event) {
        return new Promise((resolve, reject) => {
            allValues ? resolve(allValues.serviceproviders) : null
        })
    }
    async function handleServiceChange(event) {
        return new Promise((resolve, reject) => {
            if (allValues) {
                allValues.serviceproviders.map(service => {
                    if (event.detail.value.value === service.id) {
                        setServiceTypeValues(service.servicetypes)
                        resolve(service.servicetypes)
                    }
                })
            }
        })
    }
    async function handlePurposeChange(event){
        return new Promise((resolve,reject)=>{
            if (serviceTypeValues.length>0) {
                serviceTypeValues.map(service => {
                    if (event.detail.value.value === service.id) {
                        resolve(service.purposes)
                    }
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
                disabled: true,
                controlledByEvent: 'myEvent',
                handleDispatchEvent: handleDispatchEvent,
            },
            {
                component: 'Button',
                name: 'search',
                label: 'Search',
                sm: 2,
                md: 1,
                lg: 1,
            },
            {
                component: 'number',
                isRequired: false,
                type: 'number', //number, tel,
                name: 'totalEntities',
                label: 'Total Entities',
                sm: 2,
                md: 3,
                lg: 3,
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
                itemLabel: 'description', // need by api
                customEventName: 'myEvent',
                itemValue: 'id',
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
                itemValue: 'id',
                customEventName: 'myEvent',
            },
            {
                component: 'dropDown',
                name: 'program',
                label: 'Program',
                sm: 4,
                md: 4,
                lg: 4,
                itemLabel: 'program_name',
                itemValue: 'program_code',
                customEventName: 'program',
                controlledByEvent: 'myEvent',
                handleDispatchEvent: handleCropChange
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
            },
            {
                component: 'dropDown',
                name: 'service',
                label: 'Service',
                sm: 4,
                md: 4,
                lg: 4,
                itemLabel: 'name',
                itemValue: 'id',
                customEventName: 'serviceType',
                controlledByEvent: 'serviceProvider',
                handleDispatchEvent: handleServiceChange
            },
            {
                component: 'dropDown',
                name: 'serviceProvider',
                label: 'Service Provider',
                sm: 4,
                md: 4,
                lg: 4,
                itemLabel: 'name',
                itemValue: 'id',
                customEventName: 'serviceProvider',
                controlledByEvent: 'program',
                handleDispatchEvent: handleProgramChange
            },
            {
                component: 'dropDown',
                name: 'purpose',
                label: 'Purpose',
                sm: 4,
                md: 4,
                lg: 4,
                itemLabel: 'name',
                itemValue: 'id',
                controlledByEvent: 'serviceType',
                handleDispatchEvent: handlePurposeChange
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
                itemValue: 'id',
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
    return (
        <EbsForm definition={normalDefinition} onSubmit={(values) => { console.log(values) }} />
    )
}