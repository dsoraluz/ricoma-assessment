import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Home from './components/Home';

class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}

ReactDom.render(
  <App />,
  document.getElementById('app')
);
