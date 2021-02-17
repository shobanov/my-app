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
      <App state={store.getState()}
           addPost={store.addPost.bind(store)} // связывем, что бы владелец метода сохранился, т.к. .this ссылается на _state
           updateNewPostText={store.updateNewPostText.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')); // точка входа приложения (обращение к index.html)
}

rerenderEntireTree(store.getState());

/* 
Вызываем ф-цию из того мира, и передаём ей то что мы хотим отдать тому миру.
Таким образом циклическая зависимость не нарушена.
Это и есть колбэк (мы отдаём ф-цию, что бы кто-то её вызвал)
*/

store.subscribe(rerenderEntireTree);

reportWebVitals(); // no name