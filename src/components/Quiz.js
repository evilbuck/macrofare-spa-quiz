import React, { Component } from 'react'

import {Activity, Meat, Finished} from './QuizParts';

export default class Quiz extends Component {
  state = {
    currentStep: null
  }

  topics = new Map()

  constructor(props) {
    super(props);

    console.log('constructor Quiz', this.props.children.length);
    this.subscribe(Meat, () => {
      console.log('save meat somewhere');
    });

    this.subscribe(Finished, () => {
      console.log('Completed the quiz. Save something');
    });
  }

  subscribe(topic, fn) {
    if (!this.topics.has(topic)) {
      this.topics.set(topic, []);
    }
    this.topics.get(topic).push(fn);
  }

  handleEvent(event, message) {
    if (!this.topics.has(event)) {
      return;
    }

    const listeners = this.topics.get(event);
    listeners.forEach((fn) => {
      fn(message);
    });
  }

  render() {
    const newChildren = this.props.children.map((child, i) => {
      return React.cloneElement(child, {
        next: () => {
          this.handleEvent(child.type);
          this.setState({currentStep: newChildren[ i+1 ]});
        },
      });
    });
    const currentStep = this.state.currentStep || newChildren[0];
    console.log('render:currentStep', this.state.currentStep);

    return (
      <div>
        <h2>Quiz</h2>
        <div>
          {currentStep}
        </div>
      </div>
    )
  }
}
