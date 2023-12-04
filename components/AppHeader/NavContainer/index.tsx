import styles from '@/styles/components/NavContainer.module.css';

const NavContainer = () => {
    return (
        <nav className={styles.navContainerWrap}>
            <div className={styles.navLeft}></div>
            <div className={styles.navRight}></div>
            <div></div>
        </nav>
    );
};

export default NavContainer;
