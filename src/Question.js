import Answer from './Answer';
import React from 'react';
import PropTypes from 'prop-types';

export default class Question extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    query: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    possibleAnswers: PropTypes.array,
    isActive: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    isActive: false,
  };

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      guessedAnswer: null,
    };

    // Bind events so we can access this inside the event handlers
    this.selectAnswer = this.selectAnswer.bind(this);
  }

  selectAnswer(answer) {
    this.setState((prevState) => ({
      guessedAnswer: answer,
    }));
  }

  render() {
    const answers = this.props.possibleAnswers.map((answer, i) => {
      let answerStatus = 'unguessed';
      if (answer === this.state.guessedAnswer) {
        answerStatus =
          this.state.guessedAnswer === this.props.answer
            ? 'guessedCorrect'
            : 'guessedIncorrect';
      }

      return (
        <Answer
          key={i}
          name={this.props.name}
          value={answer}
          status={answerStatus}
          onAnswerSelected={this.selectAnswer}
        />
      );
    });

    const className =
      'question' + (this.props.isActive ? ' question--active' : '');

    return (
      <div className={className}>
        <h2>{this.props.query}</h2>
        {answers}
      </div>
    );
  }
}
