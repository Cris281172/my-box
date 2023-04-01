import Slider from "./Slider";
import AboutUs from "./AboutUs";
import OwnLogo from "./OwnLogo";
import Contact from "./Contact";
import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    return(
        <>
            <Slider />
            <AboutUs />
            <OwnLogo />
            <Contact />
        </>
    )
}

export default Home;