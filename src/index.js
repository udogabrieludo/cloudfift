import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyles } from './global-styles';


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);



