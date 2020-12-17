import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './index.css';
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<><Router>
    <Switch>
        <App />
    </Switch>
    </Router>
     </>, document.getElementById('root'));
serviceWorker.unregister();
