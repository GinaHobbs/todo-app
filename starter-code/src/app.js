import React from 'react';
import SiteContext from './context/site.js';
import ToDo from './components/todo/todo.js';
import './app.css'

class App extends React.Component {
  render() {
    return (
      <SiteContext>
        <ToDo />
      </SiteContext>
    );
  }
}

export default App;
