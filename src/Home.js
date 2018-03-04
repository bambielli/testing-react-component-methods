import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }
  incrementCounter = (two) => {
    let counter;
    counter = two ? this.state.counter + 2 : this.state.counter + 1;
    this.setState({ counter })
  }

  render() {
    const { two } = this.props;
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={() => this.incrementCounter(two)} >Increment</button>
      </div>
    )
  }
}

Home.propTypes = {
  two: PropTypes.bool,
}