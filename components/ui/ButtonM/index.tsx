import {ButtonProps} from "@/util/commonComponentsProps";
import styles from '@/styles/components/Button.module.css';

const ButtonM = (props:ButtonProps) => {
    return (
        <button className={styles.buttonM} onClick={props.onClick}>{props.buttonText}</button>
    );
}

export default ButtonM;
