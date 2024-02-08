import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import index from "./webbpages/index";

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <App />
        <h1>
            Denna React App är ett pågående project.
            Kom tillbaka med jämna mellanrum för att se hur den utvecklas.
        </h1>
    </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
