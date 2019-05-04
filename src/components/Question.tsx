import React, {useState} from 'react';

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

export default function Question({
  name,
  query,
  answer,
  possibleAnswers,
  isActive,
  offset,
}: Props) {
  const [guessedAnswer, setGuessedAnswer] = useState<string | undefined>(
    undefined
  );

  const selectAnswer = (selectedAnswer: string) => {
    setGuessedAnswer(selectedAnswer);
  };

  const answers = possibleAnswers.map((possibleAnswer, i) => {
    let answerStatus: IAnswerStatus = 'unguessed';
    if (possibleAnswer === guessedAnswer) {
      answerStatus =
        guessedAnswer === answer ? 'guessedCorrect' : 'guessedIncorrect';
    }

    return (
      <Answer
        key={i}
        name={name}
        value={possibleAnswer}
        status={answerStatus}
        onAnswerSelected={selectAnswer}
      />
    );
  });

  const className = 'question' + (isActive ? ' question--active' : '');

  return (
    <div className={className}>
      <Header title={query} meta={offset} />
      {answers}
    </div>
  );
}
