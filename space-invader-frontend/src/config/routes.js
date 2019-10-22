import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import UserPageContainer from '../containers/logged_in/UserPageContainer'


export const routes = [
  {
    title: 'Home',
    path: '/',
    component: UserPageContainer
  },
  {
    title: 'Log in',
    path: '/login',
    component: LoginForm
  },
  {
    title: 'Sign up',
    path: '/signup',
    component: SignupForm
  },
  {
    title: 'Log out',
    path: '/logout',
    component: props => {
      props.logout()

      return null
    }
  }
]