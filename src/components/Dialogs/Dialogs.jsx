import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {sendMessageActionCreater, apdateNewMessageActionCreater} from '../../redux/state';


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} />);
  let newMessage = state.newMessage;

  let sendClick = () => {
    props.store.dispatch(sendMessageActionCreater()); // внутри события диспатчим в BLL, данные там меняются, приходят новые пропсы с новым value и отображаются
  };

  let onNewMessageChange = (event) => { // textarea передаёт сюда объект события event
    let userMessage = event.target.value; // записываем в userMessage текущее значение в textarea
    props.store.dispatch(apdateNewMessageActionCreater(userMessage)); // userMessage диспатчим в action
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea value={newMessage} 
                      onChange={onNewMessageChange}> { /* textarea вызывает эту ф-цию когда в ней происходят изменения */ }
            </textarea>
          </div>
          <div>
            <button onClick={sendClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;