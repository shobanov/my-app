import {ActionsTypes} from './store'

let initionalState = {
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

const dialogsReducer = (state = initionalState, action: ActionsTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessage = action.payload
            return state
        case 'SEND-MESSAGE':
            let userMessage = state.newMessage;
            state.newMessage = ''
            state.messages.push({ id: 3, message: userMessage })
            return state
        default:
            return state
    }
}

export const sendMessageActionCreater = () => ({ type: 'SEND-MESSAGE' })
export const apdateNewMessageActionCreater = (userMessage: string) => ({ type: 'UPDATE-NEW-MESSAGE-BODY', payload: userMessage })

export default dialogsReducer