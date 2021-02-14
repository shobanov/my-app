import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from './redux/state';
import {addPost, updateNewPostText} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state) => { // ф-ция переотресовки дерева при изменении state для его актуальности
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')); // точка входа приложения (обращение к index.html)
}

rerenderEntireTree(state);

/* 
Вызываем ф-цию из того мира, и передаём ей то что мы хотим отдать тому миру.
Таким образом циклическая зависимость не нарушена.
Это и есть колбэк (мы отдаём ф-цию, что бы кто-то её вызвал)
*/

subscribe(rerenderEntireTree);

reportWebVitals(); // no name