import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap'
import * as validate from '../api/validate'
import * as api from '../api/api'


export const Register = ({response, err}) => {
  const [isSubmitted,updateSubmit]   = useState(false)
  const [email,updateEmail]          = useState("")
  const [password,updatePassword]    = useState("")
  const [firstName, updateFirstName] = useState("")
  const [lastName, updateLastName] = useState("")
  const [message,updateFormMessage]  = useState("")

  function changeFieldContent(e) {

    switch(e.target.name) {
      case "firstName":
           updateFirstName(e.target.value)
      break;
      case "lastName":
           updateLastName(e.target.value)
      break;
      case "email":
          updateEmail(validate.email(e.target.value))
      break;
      case "password":
          updatePassword(validate.password(e.target.value))
      break;
      default:
    }
    if( e.target.name === "password" ) {
      updatePassword(validate.password(e.target.value))
    } else {
      updateEmail(validate.email(e.target.value))
    }
  }

  function register() {
      updateSubmit(true)
      updateFormMessage("Sending...")
      api.register(firstName,lastName,email,password)
  }


  return(
    <div class="center-form">
    <Form className="form card form-push">
    {message}
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
            valid={err.email.hasError}
            disabled={isSubmitted}
            value={email}
            onChange={changeFieldContent}
            name="email"
            className="form-control"
        />
        { err.email.hasError ?
          <FormFeedback invalid tooltip>This isnt exactly right.</FormFeedback>
          : null
        }
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
            valid={err.email.hasError}
            disabled={isSubmitted}
            value={password}
            onChange={changeFieldContent}
            name="password"
            className="form-control"
        />
        { err.password.hasError ?
          <FormFeedback invalid tooltip>Not ready yet</FormFeedback>
          : null
        }
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password Confirmation</Label>
        <Input
            valid={err.email.hasError}
            disabled={isSubmitted}
            value={password}
            onChange={changeFieldContent}
            name="password"
            className="form-control"
        />
        { err.password.hasError ?
          <FormFeedback invalid tooltip>Not ready yet</FormFeedback>
          : null
        }
      </FormGroup>
      <Button
      disabled={isSubmitted}
      onClick={register}
      >Login</Button>
    </Form>
    </div>
  )
}

Register.propTypes = {
  response: PropTypes.object,
  err     : PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(null)
  ])
}

Register.defaultProps = {
  response: {},
  err: {
    email: {hasError:false},
    password: {hasError:false}
  }
}
