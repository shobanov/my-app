import {rerenderEntireTree} from './render'

let state = {
  
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'Runs the app in the development mode', likesCount: 32}
    ]
  },
  
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Aleksey' },
      { id: 2, name: 'Anna' }
    ],
    
    messages: [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How are you?' }
    ]
  }
}

export let addPost = (postMessage) => { // экспорт перем. без дефолта / (postMessage)-Любое слово
  debugger;
  let newPost = {
    id: 5,
    message: postMessage, // postMessage - то что придёт в пар-ах перем. addPost
    likesCount: 0
  };
  state.profilePage.posts.push (newPost); // .push доб. в конец массива (posts) новый эл. массива (newPost)
  rerenderEntireTree(state);
}

export default state;