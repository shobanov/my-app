import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render= { () => <Dialogs state={props.state.dialogsPage} /> } />   {/*в пропсах сидит название атрибута*/ }
          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                         addPost={props.addPost}
                                                         updateNewPostText={props.updateNewPostText} /> } />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

/*
 Модуль Route отрисовывает конкретную компоненту при изменении url (path)
*/