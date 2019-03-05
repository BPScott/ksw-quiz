import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './Quiz';

const questionBanks = {};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Quiz questionBanks={questionBanks} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
