import styles from './BoxDetails.module.scss'
const BoxDetails = ({boxName, destiny, boxImage, sizeDescription, price}) => {
    return(
        <div className={styles.ownLogo}>
            <h2 className={styles.title}>{boxName}</h2>
            <div className={styles.ownLogoInformation}>
                <img src={boxImage} alt="ownLogo2" className={styles.boxImage} />
                <div className={styles.rightPanel}>
                    <h3 className={styles.rightPanelTitle}>{boxName}</h3>
                    <p className={styles.rightPanelText}>
                        Przeznaczenie: {destiny.map(el => <p>{el}</p>)}
                    </p>
                    <p className={styles.rightPanelText}>
                        {sizeDescription}
                    </p>
                    <p className={styles.rightPanelText}>
                        Dostępne w opakowaniach zbiorczych kartonowych po 150szt , 450szt, 1200szt, paleta 12000szt
                    </p>
                    <div>
                        <h4 className={styles.rightPanelText}>Cena</h4>
                        <ul>
                            <li className={styles.rightPanelText}>{price}</li>
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

export default BoxDetails;