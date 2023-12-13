import styles from './Modal.module.css';

function Modal({ onDismiss, children }) {
    return (
        <>
            <div className={styles.backdrop} onClick={onDismiss}/>
            <dialog open className={styles.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;