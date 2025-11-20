
// # Navbar + Outlet + Footer

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const RootLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;