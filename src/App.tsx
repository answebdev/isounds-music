import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Search from './components/Search';
import Artist from './components/Artist';

function App() {
  return (
    <Router>
      <Navigation />
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/artist/:id' component={Artist} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
