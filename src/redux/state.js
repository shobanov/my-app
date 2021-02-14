  // Добиваемся того, что-бы в state из index ничего не импортировать. 
  
  let getRerender = () => { //2) Нашли, заходим в subscribe (потому что можем блять и всё тут)
     
  }

let state = {
  
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'Runs the app in the development mode', likesCount: 32}
    ],
    newPostText: ''
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

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push (newPost);
  state.profilePage.newPostText = '';
  getRerender(state); //1) тут происходит замыкание, мы выпрыгиваем вверх и ищем эту ф-цию 
}

export const updateNewPostText = (userText) => {  // userText(название параметра важно только тут) приходит из ф-ции onPostChange
  state.profilePage.newPostText = userText;
  getRerender(state); //1)
}
/*
subscribe может вызвать тот кто её импортирует и передать внутрь другую функцию.
это кстати паттерн - "observer"
*/
export const subscribe = (observer) => { // в subscribe сидит параметр rerenderEntireTree
  getRerender = observer; //3) всё, пиздец, придётся переотрисовать
}

export default state;