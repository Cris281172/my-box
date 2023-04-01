import styles from './MainNav.module.scss'
import myBoxLogo from '../images/my-box-logo.png'
import { AiFillPhone } from "react-icons/ai";
import {NavLink} from 'react-router-dom'
import {useRef, useState} from 'react';
const MainNav = () => {
    const list = useRef();
    const mainNav = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const listDisplay = (e) => {
        // e.currentTarget.classList.toggle(`${styles.isActive}`);
        setIsMenuOpen(current => !current);
        // if(mainNav.current.classList.value.split(' ')[1]){
        //     setTimeout(() => {
        //         mainNav.current.classList.toggle(`${styles.active}`);
        //     }, 200)
        //     list.current.classList.toggle(`${styles.active}`);
        // }
        // else{
        //     list.current.classList.toggle(`${styles.active}`);
        //     mainNav.current.classList.toggle(`${styles.active}`);
        // }

    }
    return(
        <div className={styles.navigationSpace}>
            <div className={styles.mainNav} ref={mainNav}>
                <nav className={styles.navigation}>
                    <NavLink to="/">
                        <img src={myBoxLogo} alt="MyBoxLogo" className={styles.logo}  />
                    </NavLink>
                    <button className={isMenuOpen ? `${styles.hamburger} ${styles.isActive}` : styles.hamburger} onClick={listDisplay} aria-label="hamburger-menu">
                        <span className={styles.line} />
                        <span className={styles.line} />
                        <span className={styles.line} />
                    </button>

                    <ul className={isMenuOpen ? `${styles.list} ${styles.openMenu}` : styles.list} ref={list}>
                        <li className={styles.itemList}>
                            <NavLink to="/" className={(navData) => navData.isActive ? `${styles.link} ${styles.active}` : styles.link }>
                                Strona główna
                            </NavLink>
                        </li>
                        <li className={styles.itemList}>
                            <NavLink to="/pudelka-mybox/fish-and-chips-box" className={(navData) => navData.isActive ? `${styles.link} ${styles.active}` : styles.link }>
                                Pudełka
                            </NavLink>
                        </li>
                        <li className={styles.itemList}>
                            <NavLink to="/pudelka-mybox/z-wlasnym-logo" className={(navData) => navData.isActive ? `${styles.link} ${styles.active}` : styles.link }>
                                Własne logo
                            </NavLink>
                        </li>
                        <li className={styles.itemList}>
                            <NavLink to="/kontakt" className={(navData) => navData.isActive ? `${styles.link} ${styles.active}` : styles.link }>
                                Kontakt
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default MainNav;