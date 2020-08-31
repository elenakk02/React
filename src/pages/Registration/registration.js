import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './registration.css'
export default () => {
    return(
        <Form.Group>
        <Form.Group className="reg-form" controlId="formBasicEmail">
            <Form.Label class="labels" >Username</Form.Label>
            <Form.Control placeholder="Enter username" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>
        
        <Form.Group className="reg-form" controlId="formBasicEmail">
            <Form.Label class="labels" >Email address</Form.Label>
            <Form.Control  type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="reg-form" controlId="formBasicPassword">
            <Form.Label class="labels" >Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>

        
        </Form.Group>
    )
}
