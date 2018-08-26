import Question from './Question';
import QuestionBankPicker from './QuestionBankPicker';
import React from 'react';
import PropTypes from 'prop-types';
import sampleSize from 'lodash/sampleSize';
import random from 'lodash/random';

export default class Quiz extends React.Component {
  static propTypes = {
    questionBanks: PropTypes.objectOf(PropTypes.array).isRequired,
    questionsPerQuiz: PropTypes.number.isRequired,
    answersPerQuestion: PropTypes.number.isRequired,
  };

  static defaultProps = {
    questionsPerQuiz: 10,
    answersPerQuestion: 4,
  };

  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      selectedQuestionBanks: [],
      selectedQuestions: [],
      currentQuestionIndex: 0,
      score: 0,
    };

    // Bind events so we can access this inside them
    this.setQuestionBanks = this.setQuestionBanks.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.handleResetSameQuestions = this.handleResetSameQuestions.bind(this);
    this.handleResetChangeBanks = this.handleResetChangeBanks.bind(this);
    this._buildAnswerArray = this._buildAnswerArray.bind(this);
  }

  setQuestionBanks(banks) {
    this.setState((prevState) => ({
      selectedQuestionBanks: banks,
      selectedQuestions: this.sampleQuestions(this.formatQuestions(banks)),
    }));
  }

  handleNextQuestion() {
    this.setState((prevState) => ({
      currentQuestionIndex: prevState.currentQuestionIndex + 1,
    }));
  }

  handleResetSameQuestions() {
    this.setState((prevState) => ({
      currentQuestionIndex: 0,
      score: 0,
    }));
  }

  handleResetChangeBanks() {
    this.setState((prevState) => ({
      selectedQuestionBanks: [],
      selectedQuestions: [],
      currentQuestionIndex: 0,
      score: 0,
    }));
  }

  render() {
    const selectedQuestions = this.state.selectedQuestions;
    const currentQuestionIndex = this.state.currentQuestionIndex;

    // If there are no selected questions then show the bank picker
    if (!Object.keys(this.state.selectedQuestionBanks).length) {
      return (
        <QuestionBankPicker
          questionBanks={this.props.questionBanks}
          onSubmit={this.setQuestionBanks}
        />
      );
    }

    // If the index is past the number of questions then  you've reached the end.
    if (currentQuestionIndex >= selectedQuestions.length) {
      return (
        <div className="quiz">
          YO REACHED THE END
          <button onClick={this.handleResetSameQuestions}>
            Reset Same Questions
          </button>
          <button onClick={this.handleResetChangeBanks}>
            Pick a new Set of questions
          </button>
        </div>
      );
    }

    const questions = selectedQuestions.map((q, i) => {
      return (
        <Question
          key={i}
          name={'question' + (i + 1)}
          isActive={i === currentQuestionIndex}
          {...q}
        />
      );
    });

    return (
      <div className="quiz">
        <strong>
          YOU ARE ON QUESTION {currentQuestionIndex + 1}/{questions.length}
        </strong>
        {questions}
        <button onClick={this.handleNextQuestion}>Next Question</button>
      </div>
    );
  }

  /** 
    Initial question banks look like:
    {
      'First Bank Name': [
        {'First Question?' : 'First Answer'},
        {'Second Question?' : 'Second Answer'},
      ],
      'Second Bank Name': [
        {'Third Question?' : 'Third Answer'},
        {'Fourth Question?' : 'Fourth Answer'},
      ]
    }

    We need to reformat that into an array of questions, each containing a
    single answer

    [
      {query: 'FirstQuestion', answer: 'FirstAnswer', possibleAnswers: ['FirstAnswer', 'SecondAnswer']}
    ]
  */
  formatQuestions(questionBanks) {
    let formattedQuestions = [];

    // Reworks how a
    for (let bank in questionBanks) {
      const currentBank = questionBanks[bank];

      const validAnswersForBank = Array.from(
        new Set(currentBank.map((item) => item.a))
      );

      for (const queryTuple of currentBank) {
        formattedQuestions.push({
          query: queryTuple.q,
          answer: queryTuple.a,
          possibleAnswers: this._buildAnswerArray(
            queryTuple.a,
            validAnswersForBank
          ),
        });
      }
    }

    return formattedQuestions;
  }

  sampleQuestions(questions) {
    return sampleSize(questions, this.props.questionsPerQuiz);
  }

  _buildAnswerArray(correctAnswer, validAnswers) {
    // Grab 3 random wrong answers for this question
    let possibleAnswers = sampleSize(
      validAnswers.filter((a) => a !== correctAnswer),
      this.props.answersPerQuestion - 1
    );

    // Insert the right answer at a random point in the array
    possibleAnswers.splice(
      random(0, possibleAnswers.length - 1),
      0,
      correctAnswer
    );

    return possibleAnswers;
  }
}
