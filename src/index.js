import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
);
reportWebVitals();

//document.body.innerHTML = `<div id="root"><div class="container"><div class="todoTop"><div class="title"><h1>My To Do List</h1><form style="display: flex;"><input type="text" name="value" placeholder="Title..." value="" style="flex: 10 1 0%; padding: 5px;"><input type="submit" class="btn" value="Add" style="flex: 1 1 0%;"></form></div></div><ul></ul></div></div>`;
