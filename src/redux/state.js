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

  _getRerender () {
  },

  getState() {  // гетер, задача кот. возвр. _state(т.к. к нему нельзя обращ. на прямую)
    return this._state; 
  },

    subscribe (observer) {  // в subscribe сидит пар-р rerenderEntireTree
    this._state._getRerender = observer;
  },

  dispatch(action) {
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
        this._state.profilePage.newPostText = action.text; // каждому action нужны св-ва что бы выполнить операцию.
        this._state._getRerender (this._state);
      }
  }
}

export const myPostActionCreater = () => ({ type: 'ADD-POST' })

export const apdateNewPostTextActionCreater = (textFromUserPost) =>
  ({ type: 'APDATE-NEW-POST-TEXT', text: textFromUserPost })

/*
subscribe может вызвать тот кто её импортирует и передать внутрь другую функцию.
это паттерн - "observer"
*/

export default store;