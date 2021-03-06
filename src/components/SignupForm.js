
import React from 'react'
import { Form } from 'semantic-ui-react'
import '../UserPage.css'
import API from '../adapters/BackendAdapter'

class SignupForm extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  submit = e => {
    e.preventDefault()
    API.signup({ username: this.state.username, password: this.state.password }).then(
      user => this.props.login(user))
  }

  render() {
    return (
      <Form
        onSubmit={this.submit}
        onChange={e => this.handleInputChange(e.target.name, e.target.value)}
      >
        <Form.Input
          name="username"
          type="username"
          placeholder="username"
          autocomplete="username"
          value={this.state.username}
        />
        <Form.Input
          name="password"
          type="password"
          placeholder="password"
          autocomplete="password"
          value={this.state.password}
        />
        <Form.Button>Submit</Form.Button>
        <a href= "/login">Click here</a> to log in!
      </Form>
    )
  }
}

export default SignupForm