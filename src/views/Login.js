import React from 'react'
import TheNavbar from '../components/TheNavbar'
import { Form, Row, Col } from 'react-bootstrap'
import useForm from '../hooks/useForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ReactDOM from 'react-dom'

import './views.scss'

function Login() {
    const history = useHistory()

    const sendData = (data) => {
        axios.post('https://ecomerce-master.herokuapp.com/api/v1/login', data)
            .then((response) => {
                alert('usuario creado')
                window.localStorage.setItem('token', response.data.token)
                history.push('/')
            }).catch((error) => {
                alert(error.message)
            })
    }

    const { inputs, handleSubmit, handleChange } = useForm(sendData, {})
    return (
        <div>
            <TheNavbar/>
            <div className="container mt-5" id="containerView">
                <Form onSubmit={handleSubmit} id="form">
                    <Form.Group as={Row} controlId="formBasicEmail" className="formGroup">
                        <Form.Label column sm="2">Mail</Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={inputs.email} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPassword" className="formGroup">
                        <Form.Label column sm="2">Contraseña</Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" value={inputs.password} />
                        </Col>
                    </Form.Group>

                    <button type="submit" className="button btn-lg">
                        Login
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Login;