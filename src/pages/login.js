import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap'
import * as api from '../api/api'
import * as validate from '../api/validate'

export const Login = ({ response, err }) => {
  const [isSubmitted,updateSubmit]  = useState(false)
  const [email,updateEmail]         = useState("")
  const [password,updatePassword]   = useState("")
  const [message,updateFormMessage] = useState("")

  function changeFieldContent(e) {
    if( e.target.name === "password" ) {
      updatePassword(e.target.value)
    } else {
      updateEmail(e.target.value)
    }
  }

  function login() {
    let error = false
    if( !validate.email(email) ) {
      return updateFormMessage("Invalid Email")
    }

    if( !validate.password(password) ) {
      return updateFormMessage("Invalid Password")
    }

    if( !error ) {
        updateSubmit(true)
        updateFormMessage("Sending...")
        api.login(email,password)
    }
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
            type="email"
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
            type="password"
            className="form-control"
        />
        { err.password.hasError ?
          <FormFeedback invalid tooltip>Not ready yet</FormFeedback>
          : null
        }
      </FormGroup>
      <Button
      disabled={isSubmitted}
      onClick={login}
      >Login</Button>
    </Form>
    </div>
  )
}

Login.propTypes = {
  response: PropTypes.object,
  err     : PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(null)
  ])
}

Login.defaultProps = {
  response: {},
  err: {
    email: {hasError:false},
    password: {hasError:false}
  }
}
