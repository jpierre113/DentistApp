import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
  <Router>
    <div>
    <nav>
    <Link to="/" className="link">Home</Link>{''}
    <Link to="/procedures" className="link">See our Procedures</Link>{Procedures}
    <Link to="/contact" className="link">Contact Us!</Link>{Contact}
    </nav>
      <Route exact path="/" component={Home} />
      <Route path="/procedures" component={Procedures} />
      <Route path="/contact" component={Contact} />
    </div>
</Router>
    );
  }
}
export default App;
