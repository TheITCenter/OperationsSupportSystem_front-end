import React from 'react'
import TheNavbar from '../components/TheNavbar'
import useForm from '../hooks/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'


import { Form, Row, Col } from 'react-bootstrap'
import './views.scss'

function SignUp() {
    const history = useHistory()

    const sendInfo = (data) => {
        if (data.password === data.password_confirm) {
            delete data.password_confirm
            axios.post('https://ecomerce-master.herokuapp.com/api/v1/signup', data)
                .then((response) => {
                    if (response.status === 201 || response.status === 200) {
                        alert('Usuario Creado')
                        history.push('/login')
                    }
                }).catch((error) => {
                    alert(error.message)
                })
        } else {
            alert('Favor de confirmar la contraseña correctamente')
        }
    }
    const { inputs, handleSubmit, handleChange } = useForm(sendInfo, {})
    return (
        <div>
            <TheNavbar />
            <div className="container mt-5" id="containerView">
                <Form onSubmit ={handleSubmit} id="form">
                    <Form.Group as={Row} controlId="formBasicEmail" className="formGroup">
                        <Form.Label column sm="2">Nombre</Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="first_name" value={inputs.first_name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" as={Row} className="formGroup">
                        <Form.Label column sm="2">Apellido</Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="last_name" value={inputs.last_name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" as={Row} className="formGroup">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={inputs.email}/>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" as={Row} className="formGroup">
                        <Form.Label column sm="2">Contraseña</Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Enter email" onChange={handleChange} name="password" value={inputs.password}/>
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" as={Row} className="formGroup">
                        <Form.Label column sm="2">Confirma Contraseña</Form.Label>
                        <Col sm="10">
                        <Form.Control type="password" placeholder="Enter email" onChange={handleChange} name="password_confirm" value={inputs.password_confirm}/>
                        </Col>
                    </Form.Group>
                    <button type="submit" className="button btn-lg">
                        Sign Up
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default SignUp;