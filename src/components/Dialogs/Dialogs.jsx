import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;

  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {

  return (
    <div className={s.dialog}>{props.message}</div>
  )
}

const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Aleksey'},
    {id: 2, name: 'Anna'}
  ]

  let dialogsElements = [
    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
  ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'}
  ]

    return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          <Message message={messagesData[0].message} />
          <Message message={messagesData[1].message} />
        </div>
      </div>            
    )
}

export default Dialogs;