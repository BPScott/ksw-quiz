import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';
import QuestionBanks from './QuestionBanks';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz questionBanks={QuestionBanks} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
