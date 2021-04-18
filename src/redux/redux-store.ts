import { combineReducers, createStore } from "redux"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./dialogs-reducer"
import { ProfileType } from './profile-reducer';

export type StoreType = {
    profileReducer: ProfileType;
    dialogsReducer: any;
}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})


let store = createStore(reducers)

export default store