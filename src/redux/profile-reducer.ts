import {ActionsTypes, UpdateNewPostTextActionType} from './store'

type PostType = {
  id: number;
  message: string;
  likesCount: number;
}

export type ProfileType = {
  posts: PostType[],
  newPostText: string;
}

let initionalState:ProfileType = {
  posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'Runs the app in the development mode', likesCount: 32}
    ],
    newPostText: ''
}

const profileReducer = (state = initionalState, action: ActionsTypes) => {
  switch (action.type) {
    case 'ADD-POST':
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostText = ''
      return state
    case 'UPDATE-NEW-POST-TEXT':
      state.newPostText = action.payload
      return state
    default:
      return state
  }
}

export const myPostActionCreater = () => ({ type: 'ADD-POST' })
export const apdateNewPostTextActionCreater = (textFromUserPost: string): UpdateNewPostTextActionType => ({ type: 'UPDATE-NEW-POST-TEXT', payload: textFromUserPost })

export default profileReducer
