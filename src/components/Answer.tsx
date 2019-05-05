import React, {useCallback} from 'react';

import {IAnswerStatus} from '../types';

interface Props {
  name: string;
  value: string;
  status: IAnswerStatus;
  onAnswerSelected: (value: string) => void;
}

export default function Answer({name, value, status, onAnswerSelected}: Props) {
  const handleAnswerSelected = useCallback(
    () => {
      onAnswerSelected(value);
    },
    [onAnswerSelected, value]
  );

  const statusClass = {
    unguessed: '',
    guessedCorrect: ' answer--correct',
    guessedIncorrect: ' answer--incorrect',
  }[status];

  return (
    <label className={'answer' + statusClass}>
      <input
        type="radio"
        name={name}
        value={value}
        onClick={handleAnswerSelected}
      />
      <span className="answer__text">{value}</span>
    </label>
  );
}
