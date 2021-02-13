import React from 'react';
//import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return  (
      <div>
        <ProfileInfo />
        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText} />
      </div>
    ) 
}

export default Profile;