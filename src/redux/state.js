const ADD_POST = 'ADD-POST';
const APDATE_NEW_POST_TEXT = 'APDATE-NEW-POST-TEXT';

let store = {  
  _state: { 
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
      ],
      newMessage: ''
    }
  },

  _getRerender () {
  },

  getState() {
    return this._state; 
  },

    subscribe (observer) {  // в subscribe сидит пар-р rerenderEntireTree
    this._state._getRerender = observer;
  },

  dispatch(action) { // action это объект у которого как минимум есть св-во type
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push (newPost);
      this._state.profilePage.newPostText = '';
      this._state._getRerender(this._state);
    } else if (action.type === 'APDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.input;
        this._state._getRerender (this._state);
    } else if (action.type === 'APDATE-NEW-MESSAGE-BODY') {
        this._state.dialogsPage.newMessage = action.input; // newMessage равен тому что приходит в action
        this._state._getRerender (this._state); 
    } else if (action.type === 'SEND-MESSAGE') {
        let userMessage = this._state.dialogsPage.newMessage; // записали в userMessage то что ввели
        this._state.dialogsPage.newMessage = '';  // обнулили
        this._state.dialogsPage.messages.push({id: 3, message: userMessage}); // пушим в массив messages новый элемент
        this._state._getRerender (this._state); // Вызываем переотрисовку и передаём изменившийся стейт
    }
  }
}

// создаём actions что бы их задиспатчить, а диспатч их обрабатывает.

export const myPostActionCreater = () => ({ type: 'ADD-POST' })
export const apdateNewPostTextActionCreater = (textFromUserPost) => ({ type: 'APDATE-NEW-POST-TEXT', input: textFromUserPost })

export const sendMessageActionCreater = () => ({ type: 'SEND-MESSAGE' })
export const apdateNewMessageActionCreater = (userMessage) => ({ type: 'APDATE-NEW-MESSAGE-BODY', input: userMessage }) // userMessage локальная пер-ая

/*
subscribe может вызвать тот кто её импортирует и передать внутрь другую функцию.
это паттерн - "observer"
*/

export default store;