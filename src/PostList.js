
import axiox from 'axios';
import Productcard from './productcard'
import { useState , useEffect} from 'react'

const PostList = () => {

    const [posts,setPosts] = useState([])
    const [error,setError] = useState('')

    useEffect( () => {
        axiox.get("http://jsonplaceholder.typicode.com/users")
            .then( response=> {
                setPosts(response.data)
            })
            .catch( error => {
                setError("URL error")
            })
    },[])

    return (
        <div>
            List
            {
                posts.map(user => {
                    const {id,name,username,email,address} = user
                    return <Productcard key={id} id={id}  name={name} username={username} email={email} address={address}  />
                } )
            }
        </div>
    );
}

export default PostList;