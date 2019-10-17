import React from 'react';
import UserPageContainer from './containers/logged_in/UserPageContainer'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <UserPageContainer />
    </div>
  );
}

export default App;
