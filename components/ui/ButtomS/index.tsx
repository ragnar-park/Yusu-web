import {ButtonProps} from "@/util/commonComponentsProps";
import styles from '@/styles/components/Button.module.css';

const ButtonS = (props:ButtonProps) => {
    return (
        <button className={styles.buttonS} onClick={props.onClick}>{props.buttonText}</button>
    );
}

export default ButtonS;
