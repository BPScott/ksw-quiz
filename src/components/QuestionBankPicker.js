import React from 'react';
import PropTypes from 'prop-types';

export default class QuestionBankPicker extends React.PureComponent {
  static propTypes = {
    questionBanks: PropTypes.objectOf(PropTypes.array).isRequired,
  };

  constructor(props) {
    super(props);

    // Initial state - Everything checked by default
    this.state = Object.keys(this.props.questionBanks).reduce(
      (memo, bankName) => {
        memo[bankName] = true;
        return memo;
      },
      {}
    );

    // Bind events so we can access this inside the event handlers
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const filteredBanks = Object.keys(this.props.questionBanks).reduce(
      (memo, bankName) => {
        if (this.state[bankName]) {
          memo[bankName] = this.props.questionBanks[bankName];
        }
        return memo;
      },
      {}
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
        {banks}
        <button type="submit" className="fat-button">
          Submit
        </button>
      </form>
    );
  }
}
