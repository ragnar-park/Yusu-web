import {Fragment, useEffect, useRef, useState} from "react";
import styles from '@/styles/layouts/Intro.module.css';
import MainIntro from "@/layouts/intro/mainIntro";
import StatisticsIntro from "@/layouts/intro/statisticsIntro";
import AnnounceIntro from "@/layouts/intro/announceIntro";
const Intro = () => {

    return (
        <Fragment>
            <MainIntro  />
            <StatisticsIntro />
            <AnnounceIntro  />
        </Fragment>
    );
};

export default Intro;

