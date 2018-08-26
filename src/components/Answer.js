import React from 'react';
import PropTypes from 'prop-types';

export default class Answer extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['unguessed', 'guessedCorrect', 'guessedIncorrect'])
      .isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
  };

  static defaultProps = {
    status: 'unguessed',
  };

  constructor(props) {
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
