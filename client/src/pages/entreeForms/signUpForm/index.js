import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormWrapper from '../formWrapper'
import { CREATE_ACCOUNT } from '../../../utils/mutations'
import { useMutation } from '@apollo/client'
import { hasSpecialChar, isValidEmail, meetsLengthReq } from '../../../utils/stringValidation';
import "./index.css";

const SignUpForm = () => {

    const [createAccount, {data, loading, error }] = useMutation(CREATE_ACCOUNT)


    const [checkValidity, setCheckValidity] = useState(false)
    const [inValidPass, setInValidPass] = useState(false)
    const [inValidEmail, setInValidEmail] = useState(false)
    const [inValidName, setInValidName] = useState(false)


    const checkEmail = (email) => {
        email ? setInValidEmail(!isValidEmail(email)) : setInValidEmail(true)
    }
    const checkPassword = (password) => {
        password ? setInValidPass(!meetsLengthReq(password)) : setInValidPass(true)
    }
    const checkName = (name) => {
        name ? setInValidName(hasSpecialChar(name)) : setInValidName(true)
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (checkValidity) {
            if (name === "email") { checkEmail(value) }
            if (name === "password") { checkPassword(value) }
            if (name === "name") { checkName(value) }
        }
    }

    const submitForm = async (event) => {
        event.preventDefault()
        event.stopPropagation()

        const email = event.target.email.value
        const password = event.target.password.value
        const name = event.target.name.value
        console.log(typeof email)
        checkEmail(email)
        checkPassword(password)
        checkName(name)

        setCheckValidity(true)
        if ((!inValidEmail) && (!inValidPass) && (!inValidName)) {

            let res = await createAccount({ variables: { email: email, password: password, name: name } });
            console.log(res)
            
        } else { console.log("form is no bueno") }
    }

    return (
        <FormWrapper>
            <Form noValidate onSubmit={submitForm}>
                <h1 className="title">Create Account</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control isInvalid={inValidEmail} name="email" type="email" placeholder="Enter email" onChange={handleInput} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a valid email.
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control isInvalid={inValidPass} name="password" type="password" placeholder="Password" onChange={handleInput} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a password.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control isInvalid={inValidName} name="name" placeholder="Bark Barkinson" onChange={handleInput} />
                    <Form.Control.Feedback type="invalid">
                        Please enter a name.
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                        This is how other users will see you.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </FormWrapper>
    )
};

export default SignUpForm;