import styles from './PostList.module.css';
import Post from '../Post/Post.jsx';
import NewPost from '../NewPost/NewPost.jsx';
import Modal from '../Modal/Modal.jsx';
import { useState } from 'react';

function PostList({ newPostVisible, onNewPost, onNewPostDismiss }) {

    const [posts, setPosts] = useState([]);

    function addPost(post) {
        setPosts((posts) => [post, ...posts]);
    }

    let newPostContent;
    newPostContent = (
        newPostVisible &&
        <Modal onDismiss={onNewPostDismiss}>
            <NewPost onDismiss={onNewPostDismiss} addPost={addPost} />
        </Modal>
    );

    return (
        <>
            {newPostContent}
            <div className={styles.postsWrapper}>
                <ul className={styles.posts}>
                    {
                        posts.length > 0 &&
                        posts.map((p) => <Post key={p.message} message={p.message} username={p.username} />)
                    }
                    {
                        posts.length == 0 &&
                        <p style={{ textAlign: 'center' }}>Nothing here yet. Be the first!</p>
                    }
                </ul>
            </div>
        </>
    );
}

export default PostList;
