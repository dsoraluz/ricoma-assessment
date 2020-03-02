import React from 'react';
import PropTypes from 'prop-types';
import CountdownTimer from './CountdownTimer';
import Nav from './Nav';
import Shopping from './Shopping';
import liLogo from '../../assets/liLogo.svg';

function Content () {
  return (
    <div className='main-background'>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <button className='btn main-btn'>
        Lorem
      </button>
      <div className="second-background">
      </div>
    </div>
  )
};

function Footer () {
  return (
    <div className='flex-center footer'>
      <div>
        <img src={liLogo} />
      </div>
      <div>
        <ul>
          <li className='footer-item-heading'> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='footer-item-heading'> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='footer-item-heading'> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
          <li> Lorem Ipsum</li>
        </ul>
      </div>
      <div>
      </div>

    </div>
  )
};


export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true
    };
    this.closeTimer = this.closeTimer.bind(this);
  }

  closeTimer() {
    this.setState({
      showTimer: false
    });
  }

  render() {
    const { showTimer } = this.state;
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <React.Fragment>
        {showTimer && (
          <CountdownTimer
            date={`${year}-12-24T00:00:00`}
            toggleTimer={this.closeTimer}
          />
        )}
        <Nav />
        <Content />
        <Shopping />
        <Footer />
      </React.Fragment>
    )
  }
}
