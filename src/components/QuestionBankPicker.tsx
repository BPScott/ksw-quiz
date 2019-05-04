import React, {useState} from 'react';

import {IQuestion, IQuestionBanks} from '../types';

import Header from './Header';

interface Props {
  questionBanks: IQuestionBanks;
  onSubmit: (banks: IQuestionBanks) => void;
}

export default function QuestionBankPicker({questionBanks, onSubmit}: Props) {
  // Initial state - Everything checked by default
  const [questionBankSelections, setQuestionBankSelections] = useState(() =>
    Object.keys(questionBanks).reduce(
      (memo, bankName) => Object.assign(memo, {[bankName]: true}),
      {} as {[key: string]: boolean}
    )
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestionBankSelections({
      ...questionBankSelections,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredBanks = Object.keys(questionBanks).reduce(
      (memo, bankName) => {
        if (questionBankSelections[bankName]) {
          memo[bankName] = questionBanks[bankName];
        }
        return memo;
      },
      {} as {[key: string]: IQuestion[]}
    );

    onSubmit(filteredBanks);
  };

  const banks = Object.keys(questionBanks).map((bankName, i) => {
    return (
      <label key={i} className="question-bank__item">
        <input
          type="checkbox"
          name={bankName}
          checked={questionBankSelections[bankName]}
          onChange={handleInputChange}
        />
        {bankName}
      </label>
    );
  });

  return (
    <form onSubmit={handleSubmit} className="question-bank">
      <Header title="Choose your question sets:" />
      {banks}
      <button type="submit" className="fat-button">
        Submit
      </button>
    </form>
  );
}
