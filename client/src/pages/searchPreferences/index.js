import Header from '../../components/header'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { SAVE_PREFERENCES } from '../../utils/mutations';
import { GET_PREFERENCES } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client'

const AccordianToggle = ({ children, eventKey, toggle, toggleState }) => {

    const toggleAccordian = useAccordionButton(eventKey, () => {
        console.log("callback")
    })

    return (
        <div>
            <p>dogs</p>
            <Button onClick={() => toggle()}>enable/disable</Button>
            <Button
                type="button"
                onClick={toggleAccordian}
            >
                {children}
            </Button>
        </div>
    )
}

const SearchPreferences = () => {

    const { loading, error, data } = useQuery(GET_PREFERENCES)
    const [savePreference] = useMutation(SAVE_PREFERENCES)
    const [toggleState, setToggleState] = useState(true)
    const toggle = () => {
        setToggleState(!toggleState)
        console.log("toggle", toggleState)
    }

    const submitPreferences = async (event) => {
        event.preventDefault()
        event.stopPropagation()
        //hardcode dog for now
        const breed = event.target.breed.value
        let saved = await savePreference({variables: { animalType: "Dog", breed: breed }})
        if(saved){
            console.log("saved")
        }
    }

    return (
        <div>
            <Header />
            <Form onSubmit={submitPreferences}>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header>
                            <AccordianToggle toggle={toggle} toggleState={toggleState} eventKey="0">expand</AccordianToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Form.Group className="mb-3">
                                    <Form.Label>Breed</Form.Label>
                                    <Form.Select disabled={toggleState} name="breed">
                                        <option>Lab</option>
                                        <option>Golden Retriever</option>
                                        <option>Poodle</option>
                                    </Form.Select>
                                </Form.Group>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <AccordianToggle toggle={toggle} toggleState={toggleState} eventKey="1">Click me!</AccordianToggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <Button type="submit">Save Preferences</Button>
            </Form>
        </div>
    )
}

export default SearchPreferences