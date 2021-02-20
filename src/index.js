import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = () => { // ф-ция переотресовки дерева при изменении state для его актуальности
  ReactDOM.render (
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')); // точка входа приложения (обращение к index.html)
}

rerenderEntireTree(store.getState());

/* 
Вызываем ф-цию из того мира, и передаём ей то что мы хотим отдать тому миру.
Таким образом циклическая зависимость не нарушена.
Это - колбэк (мы отдаём ф-цию, что бы кто-то её вызвал)
*/

store.subscribe(rerenderEntireTree);

reportWebVitals();