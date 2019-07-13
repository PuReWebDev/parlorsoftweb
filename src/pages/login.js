import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap'
//do the registration then hook up redux :D
export const Login = ({ response, err }) => {

  function renderError() {

  }

  return(
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Valid input</Label>
        <Input
            valid={err.email.hasError}
        />
        { err.email.hasError ?
          <FormFeedback invalid tooltip>This isnt exactly right.</FormFeedback>
          : null
        }
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Invalid input</Label>
        <Input
            valid={err.email.hasError}
        />
        { err.password.hasError ?
          <FormFeedback invalid tooltip>Not ready yet</FormFeedback>
          : null
        }
        <FormText>Example help text that remains unchanged.</FormText>
      </FormGroup>
    </Form>
  )
}

Login.propTypes = {
  response: PropTypes.object,
  err     : PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.instanceOf(null)
  ])
}
