import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let newPostElement = React.createRef(); //метод реакта createRef, который создаёт ссылку(пока ссылается не на что)

  let addPostButton = () => {
    debugger;
    let text = newPostElement.current.value; // ссылка newPostElement явл. объектом, у неё есть св-во
    props.addPost(text);                     // current(ссылается на нативный HTML элемент)
    newPostElement.current.value = '';
  }

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);
    return ( 
      <div className={s.postsBlock}>
        <h3>My posts</h3>
          <div>
            <div>
              <textarea ref={newPostElement}></textarea>  {/* привязываем ссылку к textarea с помощью констр. ref={newPostElement} */}
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