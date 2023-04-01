import styles from './Footer.module.scss'
import myBoxLogo from '../images/my-box-logo.png'
import { AiFillPhone, AiFillFacebook, AiFillYoutube, AiOutlineMail } from "react-icons/ai";

const Footer = () => {
    return(
        <div className={styles.footerWrapper}>
            <footer className={styles.footer}>
                <img src={myBoxLogo} alt="myBoxLogo" className={styles.logo} />
                <div className={styles.contactInformation}>
                    <div className={styles.phoneNumber}>
                        <AiFillPhone className={styles.phoneLogo} />
                        <a href="tel:+48796378822" className={styles.phone}>+48 796 37 88 22</a>
                    </div>
                    <div className={styles.email}>
                        <AiOutlineMail className={styles.emailLogo} />
                        <a href="mailto:myboxbiuro@gmail.com" className={styles.emailText}>myboxbiuro@gmail.com</a>
                    </div>
                    <div className={styles.socials}>
                        <a href="https://www.facebook.com/profile.php?id=100002713180305" target="_blank">
                            <AiFillFacebook className={styles.facebook} />
                        </a>
                        <a href="https://www.youtube.com/user/MyBoxBiuro?feature=watch" target="_blank">
                            <AiFillYoutube className={styles.youtube}/>
                        </a>
                    </div>
                </div>
                <div className={styles.companyDetails}>
                        Al.Ks.Kard.Wyszyńskiego 67<br />
                        94-047 Łódź<br/>
                        nip 727-23-66-894<br/>
                </div>
            </footer>
            <div className={styles.bottomInformation}>
                <a className={styles.author} href="https://juczynski.pl" target="_blank">Created By <span className={styles.name}>Krzysztof Juczyński</span></a>
                <h6 className={styles.copyright}>&copy; Copyright 2023 my-box.com.pl</h6>
            </div>
        </div>
    )
}

export default Footer;