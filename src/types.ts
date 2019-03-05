export type IAnswerStatus = 'unguessed' | 'guessedCorrect' | 'guessedIncorrect';

export interface IQuestion {
  q: string;
  a: string;
}

export type IQuestionBank = IQuestion[];

export interface IQuestionBanks {
  [key: string]: IQuestionBank;
}

export interface IFormatedQuestion {
  query: string;
  answer: string;
  possibleAnswers: string[];
}
