import React from 'react'
import './App.css'
import { routes } from './config/routes'

import { Route } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'
import API from './adapters/BackendAdapter'

const notFoundMessage = () => <Message negative>NOT FOUND</Message>

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    // API.validateUser().then(user => this.login(user)
      // if (user.errors) {
      //   alert(user.errors)
      //   this.props.history.push('/login')
      // } else {
      //   this.setState({ user })
      // }
    // }
    // )
  }

  login = user => {
    this.setState({ user }, () => this.props.history.push('/'))
  }


  logout = () => {
    API.logout()
    this.setState({ user: null })
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">

        <Container>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              exact
              component={routerProps =>
                route.component ? (
                  <route.component
                    {...routerProps}
                    user={this.state.user}
                    login={this.login}
                    logout={this.logout}
                    signup={this.signup}
                  />
                ) : (
                  notFoundMessage()
                )
              }
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default App