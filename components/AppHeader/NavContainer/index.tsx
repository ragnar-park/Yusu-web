import styles from '@/styles/components/NavContainer.module.css';
import MenuList from "@/components/AppHeader/NavContainer/MenuList";

const NavContainer = () => {
    return (
        <nav className={styles.navContainerWrap}>
            <div className={styles.navLeft}>
                {/*로고 대신 임시*/}
                <div className={styles.navLogo}></div>
            </div>
            <div className={styles.navRight}>
                <MenuList/>
            </div>
        </nav>
    );
};

export default NavContainer;
