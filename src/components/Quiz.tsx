import React, {useState, useCallback} from 'react';

import {IQuestionBanks, IFormatedQuestion, IQuestionBank} from '../types';

import Header from './Header';
import Question from './Question';
import QuestionBankPicker from './QuestionBankPicker';

interface Props {
  questionBanks: IQuestionBanks;
  questionsPerQuiz?: number;
  answersPerQuestion?: number;
}

export default function Quiz({
  questionBanks,
  questionsPerQuiz = 10,
  answersPerQuestion = 4,
}: Props) {
  const [selectedQuestionBanks, setSelectedQuestionBanks] = useState<
    IQuestionBank[]
  >([]);
  const [selectedQuestions, setSelectedQuestions] = useState<
    IFormatedQuestion[]
  >([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // eslint-disable-next-line
  const [score, setScore] = useState(0);

  const setQuestionBanks = useCallback(
    (banks: any) => {
      setSelectedQuestionBanks(banks);
      setSelectedQuestions(
        sampleQuestions(
          formatQuestions(banks, answersPerQuestion),
          questionsPerQuiz
        )
      );
    },
    [answersPerQuestion, questionsPerQuiz]
  );

  const handleNextQuestion = useCallback(() => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }, [currentQuestionIndex]);

  const handleResetSameQuestions = useCallback(() => {
    setCurrentQuestionIndex(0);
    setScore(0);
  }, []);

  const handleResetChangeBanks = useCallback(() => {
    setSelectedQuestionBanks([]);
    setSelectedQuestions([]);
    setCurrentQuestionIndex(0);
    setScore(0);
  }, []);

  // If there are no selected questions then show the bank picker
  if (!Object.keys(selectedQuestionBanks).length) {
    return (
      <div className="quiz">
        <QuestionBankPicker
          questionBanks={questionBanks}
          onSubmit={setQuestionBanks}
        />
      </div>
    );
  }

  // If the index is past the number of questions then  you've reached the end.
  if (currentQuestionIndex >= selectedQuestions.length) {
    return (
      <div className="quiz">
        <Header title="The end" />

        {/* <div>
          You scored {score} / {questionsPerQuiz}
        </div> */}

        <button className="fat-button" onClick={handleResetSameQuestions}>
          Ask the same questions again
        </button>
        <button className="fat-button" onClick={handleResetChangeBanks}>
          Pick a new set of questions
        </button>
      </div>
    );
  }

  return (
    <div className="quiz">
      {selectedQuestions.map((q, i) => (
        <Question
          key={i}
          name={'question' + (i + 1)}
          isActive={i === currentQuestionIndex}
          offset={(i + 1).toString() + ' / ' + selectedQuestions.length}
          {...q}
        />
      ))}

      <button className="next-button" onClick={handleNextQuestion}>
        Next Question
      </button>
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
function formatQuestions(
  questionBanks: IQuestionBanks,
  answersPerQuestion: number
) {
  let formattedQuestions: IFormatedQuestion[] = [];

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
        possibleAnswers: buildAnswerArray(
          queryTuple.a,
          validAnswersForBank,
          answersPerQuestion
        ),
      });
    }
  }

  return formattedQuestions;
}

function buildAnswerArray(
  correctAnswer: string,
  validAnswers: string[],
  answersPerQuestion: number
) {
  // Grab 3 random wrong answers for this question
  let possibleAnswers = sampleSize(
    validAnswers.filter((a) => a !== correctAnswer),
    answersPerQuestion - 1
  );

  // Insert the right answer at a random point in the array
  possibleAnswers.splice(
    randomInclusive(0, possibleAnswers.length - 1),
    0,
    correctAnswer
  );

  return possibleAnswers;
}

function sampleQuestions(
  questions: IFormatedQuestion[],
  questionsPerQuiz: number
) {
  return sampleSize(questions, questionsPerQuiz);
}

function randomInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sampleSize<T>(items: T[], size: number) {
  const results = new Set<T>();

  while (results.size < size) {
    results.add(items[randomInclusive(0, items.length - 1)]);
  }

  return Array.from(results);
}
