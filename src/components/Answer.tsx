import React from 'react';

import {IAnswerStatus} from '../types';

interface Props {
  name: string;
  value: string;
  status: IAnswerStatus;
  onAnswerSelected: (value: string) => void;
}

export default class Answer extends React.Component<Props> {
  static defaultProps = {
    status: 'unguessed',
  };

  constructor(props: Props) {
    super(props);

    // Bind events so we can access this inside the event handlers
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  handleAnswerSelected() {
    this.props.onAnswerSelected(this.props.value);
  }

  render() {
    const statusClass = {
      unguessed: '',
      guessedCorrect: ' answer--correct',
      guessedIncorrect: ' answer--incorrect',
    }[this.props.status];

    return (
      <label className={'answer' + statusClass}>
        <input
          type="radio"
          name={this.props.name}
          value={this.props.value}
          onClick={this.handleAnswerSelected}
        />
        <span className="answer__text">{this.props.value}</span>
      </label>
    );
  }
}
