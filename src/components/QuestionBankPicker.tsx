import React from 'react';

import {IQuestion, IQuestionBanks} from '../types';

import Header from './Header';

interface Props {
  questionBanks: IQuestionBanks;
  onSubmit: (banks: IQuestionBanks) => void;
}

interface State {
  [key: string]: boolean;
}

export default class QuestionBankPicker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // Initial state - Everything checked by default
    this.state = Object.keys(this.props.questionBanks).reduce(
      (memo, bankName) => {
        memo[bankName] = true;
        return memo;
      },
      {} as {[key: string]: boolean}
    );

    // Bind events so we can access this inside the event handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({[e.target.name]: e.target.checked});
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const filteredBanks = Object.keys(this.props.questionBanks).reduce(
      (memo, bankName) => {
        if (this.state[bankName]) {
          memo[bankName] = this.props.questionBanks[bankName];
        }
        return memo;
      },
      {} as {[key: string]: IQuestion[]}
    );

    this.props.onSubmit(filteredBanks);
  }

  render() {
    const banks = Object.keys(this.props.questionBanks).map((bankName, i) => {
      return (
        <label key={i} className="question-bank__item">
          <input
            type="checkbox"
            name={bankName}
            checked={this.state[bankName]}
            onChange={this.handleInputChange}
          />
          {bankName}
        </label>
      );
    });

    return (
      <form onSubmit={this.handleSubmit} className="question-bank">
        <Header title="Choose your question sets:" />
        {banks}
        <button type="submit" className="fat-button">
          Submit
        </button>
      </form>
    );
  }
}
