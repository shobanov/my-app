import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return  (
      <div>
        <div>
          <img src='https://www.grekomania.ru/images/news/2017/tourism/5463_elafonisi.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
          Ava + Description
        </div> 
      </div>
    )
    
}

export default ProfileInfo;