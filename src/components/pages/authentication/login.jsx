import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const Login = () => (
  <div style={{width: "40%", margin: "0 auto 0 auto", dispay: "block"}}>
  <Card className="text-center">
    <Card.Header>Login</Card.Header>
    <Card.Body>
      <Card.Title>Choose your sign-in option</Card.Title>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card.Body>
    <Card.Footer className="text-muted"></Card.Footer>
  </Card>
  </div>
)
