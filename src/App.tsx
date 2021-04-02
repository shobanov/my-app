import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {StateType, ActionType, StoreType, ProfilePageType} from './redux/state';


type PropsType = {
  state: StateType
  dispatch: (action: ActionType) => void
  store: StoreType
  profilePage: ProfilePageType
}

const App: React.FC<PropsType> = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render= { () => <Dialogs store={props.store} /> } />
          <Route path='/profile' render={ () => <Profile profilePage={props.profilePage} dispatch={props.dispatch} /> } />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;