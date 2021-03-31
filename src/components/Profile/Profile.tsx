import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import { ActionType, ProfilePageType} from '../../redux/state';

type PropsType = {
  newPostText: ProfilePageType
  posts: ProfilePageType
  dispatch: (action: ActionType) => void
}

const Profile: React.FC<PropsType> = (props) => {
    return  (
      <div>
        <ProfileInfo />
        <MyPosts posts={props.posts}
                 newPostText={props.newPostText}
                 dispatch={props.dispatch} />
      </div>
    ) 
}

export default Profile;