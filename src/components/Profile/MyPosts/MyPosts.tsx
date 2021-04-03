import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {apdateNewPostTextActionCreater, ActionsTypes, PostType} from "../../../redux/state";

type PropsType = {
  dispatch: (action: ActionsTypes) => void
  posts: Array<PostType>
  newPostText: string 
}

const MyPosts: React.FC<PropsType> = (props) => {

  const newPostElement = React.createRef<HTMLTextAreaElement>(); 

  const addPostButton = () => {
    props.dispatch({type: 'ADD-POST', newPostText: props.newPostText});
  }

  const onPostChange = () => {
    const textareaRef = newPostElement.current;

    if (textareaRef) {
      let textFromUserPost = textareaRef.value;
      let action = apdateNewPostTextActionCreater(textFromUserPost);
      props.dispatch(action);
    }
  }

  const postsElements = props.posts && props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

    return ( 
      <div className={s.postsBlock}>
        <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange}     
                        ref={newPostElement}
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