// Добиваемся того, что-бы в store из index ничего не импортировать.
// Все функции и все переменные упаковываем в один объект store

let store = {  
  _state: {  // является приватным свойством
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
  },

  getState() {  // гетер, задача кот. возвр. _state(т.к. к нему нельзя обращ. на прямую)
    return this._state;  // к св-ву или методу объекта нужно обр. через ключ. слово .this (т.к. имя пер. может меняться)
  },

  _getRerender () {  //2) Нашли, заходим в subscribe (потому что можем блять и всё тут) | это теперь метод объекта store

  },
  
  addPost () {  //теперь ты метод
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push (newPost);
    this._state.profilePage.newPostText = '';
    this._state._getRerender(this._state);     //1) тут происходит замыкание, мы выпрыгиваем вверх и ищем эту ф-цию 
  },

  updateNewPostText (userText) {  // userText(имя параметра важно только тут) приходит из ф-ции onPostChange(MyPosts.jsx)
    this._state.profilePage.newPostText = userText;
    this._state._getRerender (this._state); //1)
  },

  subscribe (observer) {  // в subscribe сидит пар-р rerenderEntireTree
    this._state._getRerender = observer; //3) всё, пиздец, придётся переотрисовать
  }
}
  
/*
subscribe может вызвать тот кто её импортирует и передать внутрь другую функцию.
это кстати паттерн - "observer"
*/

export default store;