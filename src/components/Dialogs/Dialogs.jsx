import s from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {sendMessageActionCreater, apdateNewMessageActionCreater} from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messagesElements = state.messages.map(m => <Message message={m.message} />);
  let newMessage = state.newMessage;

  let sendClick = () => {
    props.store.dispatch(sendMessageActionCreater());
  };

  let onNewMessageChange = (event) => { 
    let userMessage = event.target.value;
    props.store.dispatch(apdateNewMessageActionCreater(userMessage));
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
                      onChange={onNewMessageChange}>
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