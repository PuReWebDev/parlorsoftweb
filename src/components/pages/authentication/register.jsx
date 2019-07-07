import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
export const Register = () => (
  <div style={{width: "40%", margin: "0 auto 0 auto", dispay: "block"}}>
  <Card className="text-center">
    <Card.Header>Register</Card.Header>
    <Card.Body>
      <Card.Title>Create an account</Card.Title>
  <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      </Form.Row>

      <Form.Row>
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </Form.Row>

      <Form.Row>
    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" placeholder="Confirm Password" />
    </Form.Group>
    </Form.Row>


    <Form.Group id="formGridCheckbox">
      <Form.Check type="checkbox" label="Send me emails" />
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
