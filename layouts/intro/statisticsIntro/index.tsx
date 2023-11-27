import styles from '@/styles/layouts/StatisticsIntro.module.css';

const StatisticsIntro = (props: {
    statisticsIntroRef
}) => {
    return(
        <div ref={props.statisticsIntroRef} className={styles.statisticsIntroWrap}>statisticsIntro</div>
    );
}

export default StatisticsIntro;
