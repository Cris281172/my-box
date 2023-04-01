import styles from './OwnLogo.module.scss'
import ownLogo2 from '../images/own-logo2.png'

const OwnLogo = () => {
    return(
        <div className={styles.ownLogo}>
            <h2 className={styles.title}>Z Własnym Logo</h2>
            <div className={styles.ownLogoInformation}>
                <img src={ownLogo2} alt="ownLogo2" className={styles.boxImage} />
                <div className={styles.rightPanel}>
                    <h3 className={styles.rightPanelTitle}>Z Własnym Logo</h3>
                    <p className={styles.rightPanelText}>
                        Pudełka MY BOX z Twoją szatą graficzną i logo  to prestiż Twojej firmy.
                        Pudełka MY BOX dostępne są w dwóch
                        rozmiarach <span className={styles.decoration}>450ml</span> i <span className={styles.decoration}>700ml</span>
                    </p>
                    <div>
                        <h4 className={styles.rightPanelText}>Minimalna ilość zamówienia to tylko</h4>
                        <ul>
                            <li className={styles.rightPanelText}>700ml - około 8000 szt</li>
                            <li className={styles.rightPanelText}>450ml - około 8000 szt</li>
                        </ul>
                    </div>
                    <h5 className={styles.rightPanelText}>Czas realizacji ok.2 tygodni</h5>
                    <h4 className={styles.rightPanelTitle}>Wyślij zapytanie:</h4>
                    <a href="mailto:myboxbiuro@gmail.com" className={styles.emailText}>myboxbiuro@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default OwnLogo;