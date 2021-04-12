import { combineReducers, createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./dialogs-reducer"


let reducers = combineReducers ({
    profileReducer,
    dialogsReducer
})

let store = createStore ()

export default store