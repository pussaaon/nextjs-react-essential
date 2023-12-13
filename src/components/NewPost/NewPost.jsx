import styles from './NewPost.module.css';
import { useState } from 'react';

function NewPost({ onDismiss, addPost }) {

    const [message, setMessage] = useState('');
    const [username, setUsername] = useState('');

    function onMessageChanged(e) {
        setMessage(e.target.value);
    }

    function onUsernameChanged(e) {
        setUsername(e.target.value);
    }

    function submitPost(e) {
        e.preventDefault();
        const post = {
            message: message,
            username: username
        };
        addPost(post);
        onDismiss();
    }

    return (
        <form className={styles.form} onSubmit={submitPost}>
            <p>
                <label htmlFor="message">Text:</label>
                <textarea id="message" required rows={3} onChange={onMessageChanged} />
            </p>
            <p>
                <label htmlFor="username" label="Username">Your name:</label>
                <input type="text" id="username" required onChange={onUsernameChanged} />
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onDismiss}>Cancel</button>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
}

export default NewPost;