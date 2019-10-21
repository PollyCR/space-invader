import React, {useState} from 'react';
import UserPageContainer from './containers/logged_in/UserPageContainer'
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  const [user, setUser] = useState({
    id: 7,
    username: "Oli"
  });


  return (
    <div className="App">
      <UserPageContainer user={user} />
    </div>
  );
}

export default App;
