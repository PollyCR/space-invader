
import React from 'react'
import { Form, Modal } from 'semantic-ui-react'
import API from '../adapters/BackendAdapter'

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    error: false
  }

  handleInputChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  submit = e => {
    e.preventDefault()
    API.login({ username: this.state.username, password: this.state.password }).then(user => {
      if (user) {
        this.props.login(user)
      } else {
        this.setState({error: true})
      }
    })
  }

  render() {
    return (
      <Form
        onSubmit={this.submit}
        onChange={e => this.handleInputChange(e.target.name, e.target.value)}
      >
        {this.state.error ? <div style={{color: 'white'}}>Invalid Username or Password. Please try again.</div> : null}
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
      </Form>
    )
  }
}

export default LoginForm