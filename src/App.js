import React, {Component} from 'react';
import Quiz from './components/Quiz';
import {Activity, Meat, Finished, Measurements} from './components/QuizParts';
import './App.css';
import queryString from 'query-string';

const Quiz1 = (
  <Quiz>
    <Meat />
    <Activity/>
    <Finished/>
  </Quiz>
);

const Quiz2 = (
  <Quiz>
    <Measurements/>
    <Activity/>
    <Meat />
    <Finished/>
  </Quiz>
);

const variations = new Map([
  ['1', Quiz1],
  ['2', Quiz2]
]);

class App extends Component {
  state = {
    variation: '1'
  }

  componentDidMount() {
    let parsedQuery = queryString.parse(window.location.search);
    this.setState({variation: parsedQuery.v});
  }

  render() {
    console.log('rendering version: ', this.state.variation);
    console.log(variations.get(this.state.variation));
    return (
      <div className="App">
        {variations.get(this.state.variation)}
      </div>
    );
  }
}

export default App;
