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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push (newPost);
  rerenderEntireTree(state);
}

export default state;