import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './Slider.module.scss'
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import fishChipsBox from '../images/fish-chips-box.png'
import lantern from '../images/lantern.jpg'
import kebabBox from '../images/kebab-box.png'
import asiaBox from '../images/asia-box.png'
import pastaBox from '../images/pasta-box.png'
import ownLogo from '../images/own-logo.png'
import {Link} from 'react-router-dom'
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import Slide from "./Slide";

const Slider = () => {
    return(
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                mousewheel={true}
                keyboard={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className={styles.swiper}
            >
                <SwiperSlide className={`${styles.swiperSlide} ${styles.fifth}`}>
                    <Slide imageSrc={ownLogo} altImage="pastaBox" boxName="Z Własnym" secondBoxName="Logo" boxLink="pudelka-mybox/z-wlasnym-logo"/>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.first}`}>
                    <Slide imageSrc={fishChipsBox} altImage="fishChipsBox" boxName="Fish & Chips" secondBoxName="Box" boxLink="pudelka-mybox/fish-and-chips-box"/>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.second}`}>
                    <Slide imageSrc={kebabBox} altImage="kebabBox" boxName="Kebab" secondBoxName="Box" boxLink="pudelka-mybox/kebab-box"/>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.third}`}>
                    <Slide imageSrc={asiaBox} altImage="asiaBox" boxName="Azja" secondBoxName="Box" boxLink="pudelka-mybox/azja-box"/>
                </SwiperSlide>
                <SwiperSlide className={`${styles.swiperSlide} ${styles.fourth}`}>
                    <Slide imageSrc={pastaBox} altImage="pastaBox" boxName="Pasta & Salad" secondBoxName="Box" boxLink="pudelka-mybox/pasta-and-salad-box"/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider;