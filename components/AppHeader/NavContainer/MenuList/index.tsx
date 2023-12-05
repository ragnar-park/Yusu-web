import Link from "next/link";
import styles from "@/styles/components/MenuList.module.css";

const MenuList = () => {
    return (
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
    );
};

export default MenuList;
