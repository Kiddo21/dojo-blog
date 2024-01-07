import { useState, useEffect } from 'react';
import PostList from './PostList';

const Home = () => {

    const [posts, setPosts] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'luigi', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev to tips', body: 'lorem ipsum...', author: 'luigi', id: 3 }
    ]);


    const [name, setName] = useState('mario');


    const handleDelete = (id) => {
        const newPosts = posts.filter(post => post.id !== id);
        setPosts(newPosts);
    }


    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);


    return (
        <div className="home">
            <PostList posts={posts} title="All Posts!" handleDelete={handleDelete}/>
            <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;