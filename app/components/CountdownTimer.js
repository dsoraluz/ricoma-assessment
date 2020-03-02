import React from 'react';
import PropTypes from 'prop-types';
import close from '../../assets/closeButton.svg';

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTimer: true,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };
  }

  componentDidMount() {
    this.countDownInterval = setInterval(() => {
      const date = this.calculateCountDown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }


  componentWillUnmount() {
    this.stop();
  }

  calculateCountDown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0
    };

    // calculate time difference between now and expected date
    if (diff >= (365.25 * 86400)) { // 365.25 * 24 * 60 * 60
        timeLeft.years = Math.floor(diff / (365.25 * 86400));
        diff -= timeLeft.years * 365.25 * 86400;
      }
    if (diff >= 86400) { // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) { // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.countDownInterval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;
    return (
      <div className="flex-center countdown">
        <span className="countdown-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <span className="countdown-col">
          <span className="countdown-col-item">
              <strong>{this.addLeadingZeros(countDown.days)}</strong>
              <span>{countDown.days === 1 ? 'day' : 'days'}</span>
          </span>
        </span>

        <span className="countdown-col">
          <span className="countdown-col-item">
            <strong>{this.addLeadingZeros(countDown.hours)}</strong>
            <span>hours</span>
          </span>
        </span>


        <span className="countdown-col">
          <span className="countdown-col-item">
            <strong>{this.addLeadingZeros(countDown.min)}</strong>
            <span>minutes</span>
          </span>
        </span>

        <span className="countdown-col">
          <span className="countdown-col-item">
            <strong>{this.addLeadingZeros(countDown.sec)}</strong>
            <span>seconds</span>
          </span>
        </span>
        <button className='btn countdown-btn-close' onClick={this.props.toggleTimer}>
          <img src={close} />
        </button>
      </div>
    )
  }
}

CountdownTimer.propTypes = {
  date: PropTypes.string.isRequired,
  toggleTimer: PropTypes.func.isRequired,
};

CountdownTimer.defaultProps = {
  date: new Date()
};
