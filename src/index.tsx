import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import questionBanks from './question-banks';

import Quiz from './components/Quiz';
import './index.css';

// In development mode inject a shim to enable using react's devtools plugin
if ((module as any).hot) {
  require('preact/debug');
}

ReactDOM.render(
  <Quiz questionBanks={questionBanks} />,
  document.getElementById('root')
);
serviceWorker.register();
