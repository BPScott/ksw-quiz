import React from 'react';

import {IAnswerStatus} from '../types';

interface Props {
  name: string;
  value: string;
  status: IAnswerStatus;
  onAnswerSelected: (value: string) => void;
}

export default function Answer(props: Props) {
  function handleAnswerSelected() {
    props.onAnswerSelected(props.value);
  }

  const statusClass = {
    unguessed: '',
    guessedCorrect: ' answer--correct',
    guessedIncorrect: ' answer--incorrect',
  }[props.status];

  return (
    <label className={'answer' + statusClass}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        onClick={handleAnswerSelected}
      />
      <span className="answer__text">{props.value}</span>
    </label>
  );
}
