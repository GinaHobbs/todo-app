import React from 'react';
import SiteContext from './context/site.js';
import LoginContext from './context/loginContext.js'
import ToDo from './components/todo/todo.js';
import SettingsForm from './components/settingsForm.js';
import LoginForm from './components/login.js'
import './app.css'

class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <LoginContext>
          <LoginForm />
          <ToDo />
          <SettingsForm />
        </LoginContext>
      </SiteContext>
    );
  }
}

export default App;
