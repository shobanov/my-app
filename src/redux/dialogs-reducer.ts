import {ActionsTypes} from './state'

const dialogsReducer = (state: any, action: ActionsTypes) => {
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