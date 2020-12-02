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
          <Route exact path='/dialogs' component={Dialogs} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/news' component={Profile} />
          <Route exact path='/music' component={Profile} />
          <Route exact path='/settings' component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
