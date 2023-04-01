import {Outlet} from "react-router-dom";
import MainNav from "../routes/MainNav";
import styles from './Layout.module.scss'
import Footer from "./Footer";

const Layout = () => {
    return(
        <>
            <MainNav />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;