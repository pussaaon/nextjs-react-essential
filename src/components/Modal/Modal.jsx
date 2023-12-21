import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';

function Modal({ children }) {
    const navigate = useNavigate();

    function onDismiss() {
        navigate('../');
    }

    return (
        <>
            <div className={styles.backdrop} onClick={onDismiss} />
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;