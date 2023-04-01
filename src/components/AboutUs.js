import styles from './AboutUs.module.scss'
import kebabBox from '../images/kebab-box.png'
import asiaBox from '../images/asia-box.png'

const AboutUs = () => {
    return(
        <div className={styles.aboutUs}>
            <h2 className={styles.mainTitle}>O firmie</h2>
            <section className={styles.informationSection}>
                <div className={styles.leftSection}>
                    <h3 className={styles.sectionTitle}>Pudełka MyBox do potraw kuchni chińskiej, arabskiej, włoskiej.</h3>
                    <p className={styles.sectionText}>Nasze pudełka MY BOX  skierowane są do przedsiębiorców proponującym swoim klientom produkt "Food to go" -
                        potrawy na wynos. Pudełka MY BOX to ciekawa grafika przyciągająca klientów, kompaktowa pojemność, nieprzemakalność,
                        oraz możliwość szybkiej sprzedaży wielu potraw.</p>
                </div>
                <img src={kebabBox} alt="kebabBox" className={styles.kebabBoxImage} />
            </section>
            <section className={styles.informationSection}>
                <div className={styles.leftSection}>
                    <h3 className={styles.sectionTitle}>MyBox to również naczynia jednorazowe w tym pudełka oraz kubki z własnym logo.</h3>
                    <p className={styles.sectionText}>
                        W sytuacji małej ilości miejsc siedzących lub  dużego ruchu pudełka MY BOX  stwarzają nową możliwość wygenerowanie zysku.
                        Pudełka MY BOX z Twoją szatą graficzną i logo  to prestiż Twojej firmy.
                        Pudełka MY BOX dostępne są w dwóch
                        rozmiarach 450ml i 700ml
                    </p>
                    <p className={styles.sectionText}>
                        Wykonane z wysokiej jakości  papieru  wewnątrz pokrytego laminatem. Na zewnątrz pudełka MY BOX pokryte są  nadrukiem offsetowym.
                        Pudełka MY BOX dostarczamy w formie rozłożonej do samodzielnego złożenia. Dzięki temu nie zabierają miejsca magazynowego, oraz nie są  narażone na uszkodzenia podczas transportu.
                    </p>
                </div>
                <img src={asiaBox} alt="asiaBox" className={styles.kebabBoxImage} />
            </section>
        </div>
    )
}

export default AboutUs;