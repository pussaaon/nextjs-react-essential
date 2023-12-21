import styles from './Post.module.css';
import { Link } from 'react-router-dom';

function Post({ id, message, username }) {
    return (
        <li className={styles.post}>
            <Link to={'/post/' + id}>
                <p className={styles.username}>{username}</p>
                <p className={styles.message}>{message}</p>
            </Link>
        </li>
    );
}

export default Post;