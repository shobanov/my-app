import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return  <div className={s.content}>
                <div>
                    <img src='https://www.grekomania.ru/images/news/2017/tourism/5463_elafonisi.jpg'/>
                </div>
                <div>
                    ava+description
                </div> 
                <MyPosts />       
            </div>
}

export default Profile;