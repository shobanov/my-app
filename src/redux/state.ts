export type ActionType = {
  type: string
  payload: string
}

export type MessageType = {
  id: number
  message: string
}

export type PostType = {
  id: number
  message: string
  likesCount: number
}

export type DialogType = {
  id: number
  name: string
}

export type ProfilePageType = {
  posts: Array<PostType>
  newPostText: string
}

export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  newMessage: string
}

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  _getRerender: any
}

export type StoreType = {
  state: StateType
  _getRerender: (state: StateType) => void
  getState: () => StateType
  subscribe: (observer: any) => void
  dispatch: (action: ActionType) => void
}


let store: StoreType = {  
  state: {
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
    },
    _getRerender: ''
  },

  _getRerender (state: StateType) {
  },

  getState() {
    return this.state; 
  },

  subscribe (observer) {  // в subscribe сидит пар-р rerenderEntireTree
    this.state._getRerender = observer
  },

  dispatch(action: ActionType)  {// action это объект у которого как минимум есть св-во type
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this.state.profilePage.newPostText,
        likesCount: 0
      };
      this.state.profilePage.posts.push (newPost)
      this.state.profilePage.newPostText = ''
      this.state._getRerender(this.state)
    } else if (action.type === 'APDATE-NEW-POST-TEXT') {
        this.state.profilePage.newPostText = action.payload
        this.state._getRerender (this.state)
    } else if (action.type === 'APDATE-NEW-MESSAGE-BODY') {
        this.state.dialogsPage.newMessage = action.payload; // newMessage равен тому что приходит в action
        this.state._getRerender (this.state)
    } else if (action.type === 'SEND-MESSAGE') {
        let userMessage = this.state.dialogsPage.newMessage; // записали в userMessage то что ввели
        this.state.dialogsPage.newMessage = '' // обнулили
        this.state.dialogsPage.messages.push({id: 3, message: userMessage}) // пушим в массив messages новый элемент
        this.state._getRerender (this.state) // Вызываем переотрисовку и передаём изменившийся стейт
    }
  }
}

// создаём actions что бы их задиспатчить, а диспатч их обрабатывает.

export const myPostActionCreater = () => ({ type: 'ADD-POST' })
export const apdateNewPostTextActionCreater = (textFromUserPost: string) => ({ type: 'APDATE-NEW-POST-TEXT', payload: textFromUserPost })

export const sendMessageActionCreater = () => ({ type: 'SEND-MESSAGE' })
export const apdateNewMessageActionCreater = (userMessage: string) => ({ type: 'APDATE-NEW-MESSAGE-BODY', payload: userMessage }) // userMessage локальная пер-ая

/*
subscribe может вызвать тот кто её импортирует и передать внутрь другую функцию.
это паттерн - "observer"
*/

export default store;