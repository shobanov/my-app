import React from 'react';
import s from './Header.module.css';

const Header: React.FC = () => {
  return <header className={s.header}>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZ-RdJiAhq6BYXAQfCrrv2VrO9b8xJgxtfw&usqp=CAU' />
  </header>;
}

export default Header;