import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Home";
import Boxes from "../components/Boxes";
import Contact from "../components/Contact";

const RoutesWrapper = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pudelka-mybox/:box" element={<Boxes />} />
                <Route path="kontakt" element={<Contact />} />
                {/*<Route path="*" element={<NoMatch />} />*/}
            </Route>
        </Routes>
    )
}

export default RoutesWrapper