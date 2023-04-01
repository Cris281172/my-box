import styles from "./Slide.module.scss";
import fishChipsBox from "../images/fish-chips-box.png";
import {Link} from "react-router-dom";
import React from "react";

const Slide = ({imageSrc, altImage, boxName, secondBoxName, boxLink}) => {
    return(
        <div className={styles.swiperSlideWrapper}>
            <div className={styles.boxInformation}>
                <img src={imageSrc} alt={altImage} className={styles.boxImage}/>
                <h2 className={styles.boxName}>{boxName} <span className={styles.box}>{secondBoxName}</span></h2>
            </div>
            <Link className={styles.boxMore} to={boxLink}>Poznaj ofertę</Link>
        </div>
    )
}

export default Slide;