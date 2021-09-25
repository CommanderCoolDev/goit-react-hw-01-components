import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';

//импорт всей сборки
import App from './App';


ReactDOM.render(//вот тут рендерится все
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

