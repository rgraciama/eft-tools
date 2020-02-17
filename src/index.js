import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);

serviceWorker.register();r