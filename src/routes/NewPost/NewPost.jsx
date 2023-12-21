import styles from './NewPost.module.css';
import Modal from '../../components/Modal/Modal.jsx';
import { Link, redirect, Form } from 'react-router-dom';

function NewPost() {

    return (
        <Modal>
            <Form method='post' className={styles.form}>
                <p>
                    <label htmlFor="message">Text:</label>
                    <textarea id="message" name="message" required rows={3} />
                </p>
                <p>
                    <label htmlFor="username" label="Username">Your name:</label>
                    <input type="text" name="username" id="username" required />
                </p>
                <p className={styles.actions}>
                    <Link to="../" className={styles.cancel}>Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function postSubmit({ request }) {

    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            'content-type': 'application/json'
        }
    });

    return redirect('/');
}