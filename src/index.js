import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Quiz from './Quiz';
import QuestionBanks from './QuestionBanks';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Quiz questionBanks={QuestionBanks} />,
  document.getElementById('root')
);
registerServiceWorker();
