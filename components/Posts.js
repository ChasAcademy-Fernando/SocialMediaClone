import { db } from '@/firebaseConfig';
import Post from './Post';
import { collection, orderBy,query} from 'firebase/firestore';
import { useCollection} from 'react-firebase-hooks/firestore';
 const Posts = () => {
    const collectionRef = collection(db,"posts")
    const inOrderCol = query(collectionRef,orderBy("timestamp","desc"))
    const [value] = useCollection(inOrderCol);
        
    return ( 
        <div>
        
        { value && (value.docs.map(post =>(
        <Post
        key={post.id}
        name={post.data().name}
        message={post.data().message}
        email={post.data().email}
        timestamp={post.data().timestamp}
        image={post.data().image}
        postImage={post.data().postImage}/>)))
           }
        
  
        
        </div>
     );
}
 
export default Posts;