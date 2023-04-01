import styles from './Contact.module.scss'
import {AiFillPhone, AiOutlineMail} from "react-icons/ai";
import {useEffect} from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return(
        <div className={styles.contact}>
            <h2 className={styles.title}>Kontakt</h2>
            <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                    <h3 className={styles.contactItemTitle}>Numer telefonu: </h3>
                    <div className={styles.phoneWrapper}>
                        <AiFillPhone className={styles.phoneLogo} />
                        <a href="tel:+48796378822" className={styles.phone}>+48 796 37 88 22</a>
                    </div>
                </li>
                <li className={styles.contactItem}>
                    <h3 className={styles.contactItemTitle}>Email: </h3>
                    <div className={styles.emailWrapper}>
                        <AiOutlineMail className={styles.emailLogo} />
                        <a href="mailto:myboxbiuro@gmail.com" className={styles.emailText}>myboxbiuro@gmail.com</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Contact;