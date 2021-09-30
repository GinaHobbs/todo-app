import React from 'react';
import SiteContext from './context/site.js';
import ToDo from './components/todo/todo.js';
import SettingsForm from './components/settingsForm.js';
import './app.css'

class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <ToDo />
        <SettingsForm />
      </SiteContext>
    );
  }
}

export default App;
