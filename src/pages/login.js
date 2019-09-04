import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap'
import * as api from '../api/api'
import * as validate from '../api/validate'
import { connect } from 'react-redux'

class Login extends Component {

  constructor() {
    super()
    this.state = {
      isSubmitted: false,
      email: "",
      password: "",
      message: ""
    }
  }

  changeFieldContent = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }

  login = () =>  {
    let error = false
    if( !validate.email(this.state.email) ) {
      return this.updateFormMessage("Invalid Email")
    }

    if( !validate.password(this.state.password) ) {
      return this.updateFormMessage("Invalid Password")
    }

    if( !error ) {
        this.updateSubmit(true)
        this.updateFormMessage("Sending...")
        this.props.login(this.state.email,this.state.password)
    }
  }

  updateFormMessage = (message) => {
    this.setState({
      message
    })
  }

  updateSubmit = (setting) => {
    this.setState({
      isSubmitted: setting
    })
  }

  render() {
  return(
    <div className="center-form">
    <Form className="form card form-push">
    {this.message}
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
            disabled={this.isSubmitted}
            value={this.email}
            onChange={this.changeFieldContent}
            name="email"
            type="email"
            className="form-control"
        />
          <FormText>Example help text that remains unchanged.</FormText>
          </FormGroup>
          <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            disabled={this.isSubmitted}
            value={this.password}
            onChange={this.changeFieldContent}
            name="password"
            type="password"
            className="form-control"
          />
          </FormGroup>
          <Button
            disabled={this.isSubmitted}
            onClick={this.login}
          >Login</Button>
        </Form>
      </div>
    )
  }
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

const mapActionToProps = dispatch => ({
  login: (email,password) => api.login(email,password,dispatch)
})

export default connect(null,mapActionToProps)(Login)
