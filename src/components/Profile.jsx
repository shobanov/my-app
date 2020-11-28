import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
                <img src='https://www.grekomania.ru/images/news/2017/tourism/5463_elafonisi.jpg'/>
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div className={s.posts}>
                        <div className={s.item}>
                            Post1
                        </div>
                        <div className={s.item}>
                            Post2
                        </div>
                    </div>
                </div>
            </div>
}

export default Profile;