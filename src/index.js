import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import {rerenderEntireTree} from './redux/render';

rerenderEntireTree(state);

reportWebVitals();