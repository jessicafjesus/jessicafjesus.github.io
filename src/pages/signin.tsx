import React from 'react';
// React Bootstrap
import { Form, Button } from "react-bootstrap"
import { SignDesign } from '../components/Navbar/NavbarElements'

const
    Login = () => {
        return (
            <div className="color-overlay d-flex justify-content-center align-items-center">

                <Form className="rounded p-4 p-sm-3">
                    <SignDesign>Sign in</SignDesign>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="dark" type="submit" href="/museums ">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }

export default Login;