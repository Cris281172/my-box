import styles from './BoxesNavigationItem.module.scss'
import kebabBox from "../images/kebab-box.png";
const BoxesNavigationItem = ({boxLink, boxImageSrc, boxImageAlt, boxName, boxOrLogo}) => {
    return(
        <li className={styles.box}>
            <a href={boxLink} className={styles.link}>
                <img src={boxImageSrc} alt={boxImageAlt} className={styles.boxImage} />
                <h4 className={styles.boxName}>{boxName} <span className={styles.decoration}>{boxOrLogo}</span></h4>
            </a>
        </li>
    )
}

export default BoxesNavigationItem;