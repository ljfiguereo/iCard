import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '../node_modules/semantic-ui-css/semantic.min.css'

// 1) install  npm install semantic-ui-react semantic-ui-css
// 2) Remove ';' adicional from file ../node_modules/semantic-ui-css/semantic.min.css 'data:application/x-font-ttf;charset=utf-8;;' 
// https://github.com/Semantic-Org/Semantic-UI-React/issues/4227
// 3) Reiniciar el webpack: npm install y despues npm install rollup

ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
