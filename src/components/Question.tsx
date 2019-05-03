import React from 'react';

import {IAnswerStatus} from '../types';

import Answer from './Answer';
import Header from './Header';

interface Props {
  name: string;
  query: string;
  answer: string;
  possibleAnswers: string[];
  isActive: boolean;
  offset?: string;
}

interface State {
  guessedAnswer?: string;
}

export default class Question extends React.Component<Props, State> {
  state = {
    guessedAnswer: undefined,
  };

  selectAnswer = (answer: string) => {
    this.setState((prevState) => ({
      guessedAnswer: answer,
    }));
  };

  render() {
    const answers = this.props.possibleAnswers.map((answer, i) => {
      let answerStatus: IAnswerStatus = 'unguessed';
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
        <Header title={this.props.query} meta={this.props.offset} />
        {answers}
      </div>
    );
  }
}
