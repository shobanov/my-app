import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import { ActionsTypes, PostType} from '../../redux/store';

type PropsType = {
  newPostText: string
  posts: Array<PostType>
  dispatch: (action: ActionsTypes) => void
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