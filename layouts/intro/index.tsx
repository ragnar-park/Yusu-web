import {Fragment, useEffect, useRef, useState} from "react";
import styles from '@/styles/layouts/Intro.module.css';
import MainIntro from "@/layouts/intro/mainIntro";
import StatisticsIntro from "@/layouts/intro/statisticsIntro";
import AnnounceIntro from "@/layouts/intro/announceIntro";
const Intro = () => {
    const statisticsIntroRef = useRef(null);
    const scrollToStatisticsIntro = () => {
        if (statisticsIntroRef.current) {
            statisticsIntroRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }


    return (
        <Fragment>
            <MainIntro  onClickNextIntro={scrollToStatisticsIntro}/>
            <StatisticsIntro statisticsIntroRef={statisticsIntroRef}/>
            <AnnounceIntro  />
        </Fragment>
        // 스크롤바를 없애고 스크롤시 페이지 전환 되는 것 같은 효과에서
        // 스크롤바 유지하 되 꽉찬 컴포넌트들에 아래 버튼을 통해 전환 되는 효과를 추가 (사용성 강화)
        // TODO
        // 공통 버튼 제작
        // 1. 해당 버튼으로 다음 컴포넌트로 스크롤 이동 하여 화면 전환 되는듯한 느낌 주기
    );
};

export default Intro;

