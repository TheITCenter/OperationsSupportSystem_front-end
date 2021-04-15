import React from 'react'
import TheNavbar from '../components/TheNavbar'
import { Form, Button } from 'react-bootstrap'
import useForm from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


function Login() {
    const history = useHistory()

    const sendData = (data) => {
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', data)
            .then((response) => {
                console.log(response.data)
                window.localStorage.setItem('token', response.data.token)
                history.push('/')
            }).catch((error) => {
                alert(error.message)
            })
    }

    const { inputs, handleSubmit, handleChange } = useForm(sendData, {})
    return (
        <div>
            <TheNavbar />
            <div className="container mt-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={inputs.email}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={inputs.password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login;