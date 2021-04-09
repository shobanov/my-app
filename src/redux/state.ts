import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessageBodyActionType

export type AddPostActionType = {
  type: 'ADD-POST'
  newPostText: string
}

export type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  payload: string
}

export type SendMessageActionType = {
  type: 'SEND-MESSAGE' 
  userMessage: () => void
}

export type UpdateNewMessageBodyActionType = {
  type: 'UPDATE-NEW-MESSAGE-BODY'
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
  dispatch: (action: ActionsTypes) => void
  subscribe: (observer: any) => void
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

  subscribe (observer) {
    this.state._getRerender = observer
  },

  dispatch(action: ActionsTypes)  {

    this.state.profilePage = profileReducer(this.state.profilePage, action)
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action)

    this.state._getRerender (this.state)
  }
}

export default store;