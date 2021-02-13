import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import {addPost, updateNewPostText} from './state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = (state) => { // ф-ция переотресовки дерева при изменении state для его актуальности
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </BrowserRouter>,
    document.getElementById('root')); // точка входа приложения (обращение к index.html)
}

/* внедряем третьего игрока - render.js что бы избежать циклической зависимости, т.к
index.js имортирует state.js и по этому мы не можем rerenderEntireTree ипортировать из index.js
*/