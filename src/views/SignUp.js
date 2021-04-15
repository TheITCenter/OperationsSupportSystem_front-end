import React from 'react'
import TheNavbar from '../components/TheNavbar'
import useForm from '../hooks/useForm'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

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
                        console.log(response)
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
            <div className="container mt-5">
                <Form onSubmit ={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="first_name" value={inputs.first_name}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="last_name" value={inputs.last_name}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name="email" value={inputs.email}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Enter email" onChange={handleChange} name="password" value={inputs.password}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Confirma Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Enter email" onChange={handleChange} name="password_confirm" value={inputs.password_confirm}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignUp;