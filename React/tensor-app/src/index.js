import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TestLinearModel from './TensorComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TestLinearModel />, document.getElementById('root'));
registerServiceWorker();
