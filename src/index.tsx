import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/state';
import {BrowserRouter} from 'react-router-dom';

export let rerenderEntireTree = () => {
  ReactDOM.render (
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root'));
}

rerenderEntireTree();

/* 
Вызываем ф-цию из того мира, и передаём ей то что мы хотим отдать тому миру.
Таким образом циклическая зависимость не нарушена.
Это - колбэк (мы отдаём ф-цию, что бы кто-то её вызвал)
*/

store.subscribe(rerenderEntireTree);

reportWebVitals();