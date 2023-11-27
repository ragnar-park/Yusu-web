import styles from '@/styles/layouts/MainIntro.module.css'
import iconArrowBottom from "@/public/icon/icon_arrow_bottom.png"
import Image from "next/image";

const MainIntro = (props: {
    onClickNextIntro() : void;
}) => {
    
    return (
        <div className={styles.mainIntroWrap}>
            <Image className={styles.arrowIcon} src={iconArrowBottom}  onClick={props.onClickNextIntro}  alt='화살표 이미지'/>
        </div>
    );
};

export default MainIntro;
