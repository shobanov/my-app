import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {ActionsTypes, StoreType, PostType} from './redux/store';

type PropsType = {
  dispatch: (action: ActionsTypes) => void
  store: any
  newPostText: string
  posts: Array<PostType> 
  state: any
}

const App: React.FC<PropsType> = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render= { () => <Dialogs store={props.store} /> } />
          <Route path='/profile' render={ () => <Profile dispatch={props.dispatch} newPostText={props.newPostText} posts={props.posts} /> } />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;