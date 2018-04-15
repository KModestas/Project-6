// main react component goes here
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';


// import './scss/style.scss';

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Movie  Reviews</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
