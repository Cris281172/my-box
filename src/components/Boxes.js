import { useParams } from "react-router-dom";
import styles from './Boxes.module.scss'
import kebabBox from '../images/kebab-box.png'
import kebabBox2 from '../images/kebab-box2.png'
import fishChipsBox from '../images/fish-chips-box.png'
import fishChipsBox2 from '../images/fish-chips-box2.png'
import asiaBox from '../images/asia-box.png'
import asiaBox2 from '../images/asia-box2.png'
import pastaBox from '../images/pasta-box.png'
import pastaBox2 from '../images/pasta-box2.png'
import ownLogo from '../images/own-logo.png'
import ownLogo2 from '../images/own-logo2.png'
import BoxesNavigationItem from "./BoxesNavigationItem";
import BoxDetails from "./BoxDetails";
import OwnLogo from "./OwnLogo";
import {useEffect} from "react";

const Boxes = () => {
    const params = useParams();
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return(
        <div className={styles.boxes}>
            <div className={styles.leftPanel}>
                {params.box === 'z-wlasnym-logo' && <OwnLogo />}
                {params.box === 'fish-and-chips-box' && <BoxDetails boxName="Fish & Chips Box" destiny={['restauracje rybne']} boxImage={fishChipsBox2} sizeDescription="Pudełka MY BOX dostępne są w rozmiarze 700ml" price={['700 ml - 0,90pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt']}/>}
                {params.box === 'kebab-box' && <BoxDetails boxName="Kebab Box" destiny={['kebab,', 'shoarma,', 'gyros']} boxImage={kebabBox2} sizeDescription="Pudełka MY BOX dostępne są w dwóch rozmiarach 450ml i 700ml" price={['450 ml - 0,86pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt','700 ml - 0,90pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt']}/>}
                {params.box === 'azja-box' && <BoxDetails boxName="Azja Box" destiny={['potrawy kuchni azjatyckiej']} boxImage={asiaBox2} sizeDescription="Pudełka MY BOX dostępne są w dwóch rozmiarach 450ml i 700ml" price={['450 ml - 0,86pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt','700 ml - 0,90pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt']}/>}
                {params.box === 'pasta-and-salad-box' && <BoxDetails boxName="Pasta & Salad Box" destiny={['makarony,', 'nudle,', 'sałatki']} boxImage={pastaBox2} sizeDescription="Pudełka MY BOX dostępne są w dwóch rozmiarach 450ml i 700ml" price={['450 ml - 0,86pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt','700 ml - 0,90pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt']}/>}
                {/*{params.box === 'z-wlasnym-logo' && <BoxDetails boxName="Z Własnym Logo" destiny={['makarony,', 'nudle,', 'sałatki']} boxImage={ownLogo2} sizeDescription="Pudełka MY BOX dostępne są w dwóch rozmiarach 450ml i 700ml" price={['450 ml - 0,86pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt','700 ml - 0,90pln netto/szt. w opakowaniu zbiorczym 150szt. lub 450szt']}/>}*/}

            </div>
            <div className={styles.rightPanel}>
                <h3 className={styles.rightPanelTitle}>Pudełka MyBox</h3>
                <nav className={styles.boxesNavigation}>
                    <ul className={styles.boxesList}>
                        <BoxesNavigationItem boxLink="z-wlasnym-logo" boxImageSrc={ownLogo} boxImageAlt="pastaBox" boxName="Z Własynm Logo"  boxOrLogo="Logo"/>
                        <BoxesNavigationItem boxLink="fish-and-chips-box" boxImageSrc={fishChipsBox} boxImageAlt="fishChipsBox" boxName="Fish & Chips" boxOrLogo="Box" />
                        <BoxesNavigationItem boxLink="kebab-box" boxImageSrc={kebabBox} boxImageAlt="kebabBox" boxName="Kebab" boxOrLogo="Box" />
                        <BoxesNavigationItem boxLink="azja-box" boxImageSrc={asiaBox} boxImageAlt="asiaBox" boxName="Azja" boxOrLogo="Box" />
                        <BoxesNavigationItem boxLink="pasta-and-salad-box" boxImageSrc={pastaBox} boxImageAlt="pastaBox" boxName="Pasta & Salad" boxOrLogo="Box" />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Boxes;