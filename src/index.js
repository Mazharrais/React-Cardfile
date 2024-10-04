import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseState from './Components/UseState';
import UserState from './Components/UserState';
import Derivedstate from './Components/Derivedstate';
import LiftStateUp from './Components/LiftStateUp';
import Counter from './Components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <UseState />
    <UserState />
    <Derivedstate />
    <LiftStateUp />
    <br/>
    <br/>
    <br/>
    <Counter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
