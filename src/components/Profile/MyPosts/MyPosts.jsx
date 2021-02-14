import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newPostElement = React.createRef(); //метод реакта createRef, который создаёт ссылку(пока ссылается не на что)

  let addPostButton = () => {
    props.addPost();
  }

  let onPostChange = () => {                        //ф-ция для обработчика событий
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    return ( 
      <div className={s.postsBlock}>
        <h3>My posts</h3>
          <div>
            <div>
              <textarea onChange={onPostChange}     //обработчик событий 
                        ref={newPostElement}        //привязываем ссылку к textarea с помощью констр. ref={newPostElement}
                        value={props.newPostText}>
              </textarea>
            </div>
            <div>
              <button onClick={addPostButton}>Add post</button> {/*обработчик клика*/}
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