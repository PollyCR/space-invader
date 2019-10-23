import React from 'react'
import './App.css'
import { routes } from './config/routes'
import BackendAdapter from './adapters/BackendAdapter'
import { Route } from 'react-router-dom'
import { Container, Message } from 'semantic-ui-react'
import API from './adapters/BackendAdapter'

const notFoundMessage = () => <Message negative>NOT FOUND</Message>

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    BackendAdapter.validateUser().then(user => {
      if (!user.id && this.props.history.location.pathname !== '/signup') {
        this.props.history.push('/login')
      } else {
        this.setUser(user)
      }
    })
  }

  login = user => {
    this.setState({ user }, () => this.props.history.push('/'))
  }

  setUser = user => this.setState({user})


  logout = () => {
    API.logout()
    this.setState({ user: null })
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">

        <Container >
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
                    setUser={this.setUser}
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