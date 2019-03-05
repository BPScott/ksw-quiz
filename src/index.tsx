import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import questionBanks from './question-banks';

import Quiz from './components/Quiz';
import './index.css';

ReactDOM.render(
  <Quiz questionBanks={questionBanks} />,
  document.getElementById('root')
);
serviceWorker.register();
