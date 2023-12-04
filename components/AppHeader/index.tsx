import styles from '@/styles/components/AppHeader.module.css'
import NavContainer from "@/components/AppHeader/NavContainer";

const AppHeader = () => {
    return (
        <header className={styles.headerWrap}>
            <NavContainer/>
        </header>);
};

export default AppHeader;
