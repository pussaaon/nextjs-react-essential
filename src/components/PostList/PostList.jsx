import styles from './PostList.module.css';
import Post from '../Post/Post.jsx';
import { useState, useEffect } from 'react';

function PostList() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:8080/posts');
                const resData = await response.json();
                setPosts(resData.posts);
            } catch (error) {
                console.log("failed to fetch posts:", error);
            }
            setIsLoading(false);
        }
        fetchPosts();
    }, []);

    function addPost(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'content-type': 'application/json'
            }
        });
        setPosts((posts) => [postData, ...posts]);
    }

    return (
        <>
            <div className={styles.postsWrapper}>
                <ul className={styles.posts}>
                    {
                        !isLoading && posts.length > 0 &&
                        posts.map((p) => <Post key={p.id} message={p.message} username={p.username} />)
                    }
                </ul>
                {
                    !isLoading && posts.length == 0 &&
                    <p style={{ textAlign: 'center' }}>Nothing here yet. Be the first!</p>
                }
                {
                    isLoading &&
                    <p style={{ textAlign: 'center' }}>Loading...</p>
                }
            </div>
        </>
    );
}

export default PostList;
