import styles from "./loading.module.css";

export default function loading () {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loader}>
                <div></div>
            </div>
        </div>
    )
}