import styles from '@/styles/components/NavContainer.module.css';
import Link from "next/link";

const NavContainer = () => {
    return (
        <nav className={styles.navContainerWrap}>
            <div className={styles.navLeft}>
                {/*로고 대신 임시*/}
                <div className={styles.navLogo}></div>
            </div>
            <div className={styles.navRight}>
                {/* TODO 분리 필요*/}
                <ul className={styles.navUl}>
                    <li>
                        <Link href='#'>
                            소개
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            유기동물지도
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            실시간유기동물통계
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavContainer;
