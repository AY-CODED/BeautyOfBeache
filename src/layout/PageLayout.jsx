import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

function PageLayout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default PageLayout;
