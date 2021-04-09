import {ActionsTypes, UpdateNewPostTextActionType} from './state'

const profileReducer = (state: any, action: ActionsTypes) => {
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
/* 
reducer это чистая ф-ция, которая принимает state и action.
Если нужно, этот action применяется к этому state и возвращает новый state, и не изменяет его, если action не подошёл.
*/