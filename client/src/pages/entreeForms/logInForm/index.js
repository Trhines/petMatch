
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormWrapper from '../formWrapper'
import { LOGIN } from '../../../utils/queries'
import { useLazyQuery } from '@apollo/client'
import Auth from '../../../utils/auth'
import { useNavigate } from 'react-router-dom'
import "./index.css";

const LogInForm = () => {
    const [invalidLogin, setInvalidLogin] = useState(false)
    const [login, {loading, error, data}] = useLazyQuery(LOGIN)
    const navigate = useNavigate()

    const submit = async (event) => {
        event.preventDefault()
        event.stopPropagation()
        let email = event.target.email.value
        const password = event.target.password.value
        //temporary to mimic api call
        // const { data } = await login({ variables: {email: email, password: password }})
        //hardcoded for development only
        const { data } = await login({ variables: {email: "test@email.com", password: "ffffff" }})
        console.log(data)
        if (!data) {
            console.log("incorrect email or password")
            setInvalidLogin(true)
        } else {
            Auth.login(data.login.token)
            navigate("/")
            setInvalidLogin(false)
        }
    }
    return (
        <FormWrapper>
            <Form noValidate onSubmit={submit}>
            <h1>Log In</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control isInvalid={invalidLogin} name="email" type="email" placeholder="Enter email" />
                    <Form.Control.Feedback type="invalid" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control isInvalid={invalidLogin} name="password" type="password" placeholder="Password" />
                    <Form.Control.Feedback type="invalid">
                        Incorrect email or password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormWrapper>
    )
};

export default LogInForm;