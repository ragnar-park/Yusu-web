import {Fragment, useEffect, useState} from "react";
import styles from '@/styles/layouts/Intro.module.css';
import MainIntro from "@/layouts/intro/mainIntro";
import StatisticsIntro from "@/layouts/intro/statisticsIntro";
import AnnounceIntro from "@/layouts/announceIntro";
const Intro = () => {
    const [activeComponent, setActiveComponent] = useState('MainIntro'); // type 필요

    const [scrollDistance, setScrollDistance] = useState(0);

    const scrollThreshold = 100;

    const handleWheel = (event) => {
        const scrollDirection = event.deltaY > 0 ? 'down' : 'up';

        setScrollDistance((prevDistance) => prevDistance + Math.abs(event.deltaY));

        if (scrollDistance >= scrollThreshold) {
            if (scrollDirection === 'down') {
                setActiveComponent((prevComponent) => getNextComponent(prevComponent));
            } else {
                setActiveComponent((prevComponent) => getPreviousComponent(prevComponent));
            }

            setScrollDistance(0);
        }
    };

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, [scrollDistance]);

    const getNextComponent = (currentComponent) => {
        switch (currentComponent) {
            case 'MainIntro':
                return 'StatisticsIntro';
            case 'StatisticsIntro':
                return 'AnnounceIntro';
            case 'AnnounceIntro':
                return 'MainIntro';
            default:
                return 'MainIntro';
        }
    };

    const getPreviousComponent = (currentComponent) => {
        switch (currentComponent) {
            case 'MainIntro':
                return 'AnnounceIntro';
            case 'StatisticsIntro':
                return 'MainIntro';
            case 'AnnounceIntro':
                return 'StatisticsIntro';
            default:
                return 'MainIntro';
        }
    };

    return (
        <Fragment>

            {/* Render components based on the activeComponent */}
            {activeComponent === 'MainIntro' && <MainIntro />}
            {activeComponent === 'StatisticsIntro' && <StatisticsIntro />}
            {activeComponent === 'AnnounceIntro' && <AnnounceIntro />}
        </Fragment>
    );
};

// Define MainIntro, StatisticsIntro, and AnnounceIntro components here...

export default Intro;

