// @ts-check
import React, { Component } from 'react';
import axios from 'axios';

export const doIncrement = prevState => ({
  counter: prevState.counter + 1,
});

export const doDecrement = prevState => ({
  counter: prevState.counter - 1,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      asyncCounters: null,
    };
  }

  onIncrement = () => {
    this.setState(doIncrement);
  };

  onDecrement = () => {
    this.setState(doDecrement);
  };

  componentDidMount() {
    axios
      .get('https://swapi.co/api/films')
      .then(data => {
        this.setState({ asyncCounters: data });
      })
      .catch(error => console.error(error));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>My Counter</h1>
        <Counter counter={counter} />

        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>

        <button type="button" onClick={this.onDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export const Counter = ({ counter }) => <p>{counter}</p>;

export default App;
