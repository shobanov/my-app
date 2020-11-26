import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZ-RdJiAhq6BYXAQfCrrv2VrO9b8xJgxtfw&usqp=CAU'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
        <div className='content'>
          <img src='https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg'/>
        </div>
    </div>
  );
}

export default App;
