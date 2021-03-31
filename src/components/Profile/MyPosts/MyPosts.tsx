import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {myPostActionCreater, apdateNewPostTextActionCreater, ActionType, ProfilePageType} from "../../../redux/state";

type PropsType = {
  dispatch: (action: ActionType) => void
  posts: ProfilePageType
}

const MyPosts: React.FC<PropsType> = (props) => {

  let newPostElement = React.createRef(); //метод реакта createRef, который создаёт ссылку(пока ссылается ни на что)

  let addPostButton = () => {
    props.dispatch(myPostActionCreater());
  }

  let onPostChange = () => {
    let textFromUserPost = newPostElement.current.value;
    let action = apdateNewPostTextActionCreater(textFromUserPost);
    props.dispatch(action);
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    return ( 
      <div className={s.postsBlock}>
        <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange}     //обработчик событий 
                        ref={newPostElement}        //привязываем ссылку к textarea
                        value={props.newPostText}>
              </textarea>
            </div>
            <div>
              <button onClick={addPostButton}>Add post</button>
            </div>
          </div>
            <div className={s.posts}>
              {postsElements}
            </div>
      </div>
    )
}

export default MyPosts;

/*
С помощью ref стучимся напрямую в DOM(чего React рекомендует избегать)
*/