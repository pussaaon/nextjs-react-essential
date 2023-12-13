import styles from './Post.module.css';

function Post({ message, username }) {
    return (
        <li className={styles.post}>
            <figure>
                <blockquote>{message}</blockquote>
                <figcaption>{username}</figcaption>
            </figure>
        </li>
    );
}

export default Post;