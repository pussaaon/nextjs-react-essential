import styles from './PostList.module.css';
import Post from '../Post/Post.jsx';
import { useLoaderData } from 'react-router-dom';

function PostList() {

    const posts = useLoaderData();

    return (
        <>
            <div className={styles.postsWrapper}>
                <ul className={styles.posts}>
                    {
                        posts.length > 0 &&
                        posts.map((p) => <Post key={p.id} id={p.id} message={p.message} username={p.username} />)
                    }
                </ul>
                {
                    posts.length == 0 &&
                    <p style={{ textAlign: 'center' }}>Nothing here yet. Be the first!</p>
                }
            </div>
        </>
    );
}

export default PostList;
