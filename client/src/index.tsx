import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "./sass/main.scss";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('messages-list'),
);

