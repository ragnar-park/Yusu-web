import {ButtonProps} from "@/util/commonComponentsProps";
import styles from '@/styles/components/Button.module.css';

const ButtonL = (props:ButtonProps) => {
    return (
        <button className={styles.buttonL} onClick={props.onClick}>{props.buttonText}</button>
    );
}

export default ButtonL;
