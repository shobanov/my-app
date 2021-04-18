import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';


export let rerenderEntireTree = (state: any) => {
  ReactDOM.render (
    <BrowserRouter>
      <App  state={store.getState()} 
            dispatch={store.dispatch.bind(store)}
            store={store.getState()} 
            newPostText={state.profilePage.newPostText}
            posts={state.profilePage.posts}
      />
    </BrowserRouter>,
    document.getElementById('root'));
}

rerenderEntireTree(store.getState());


store.subscribe( () => {
  let state = store.getState();
  rerenderEntireTree(state);
});

reportWebVitals();