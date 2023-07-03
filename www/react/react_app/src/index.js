import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './App';

const MyApp = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
