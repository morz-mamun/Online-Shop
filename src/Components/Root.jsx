import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import { useState } from "react";




const Root = () => {
    const [isToggled, setIsToggled] = useState(false)

    const changeBackground = () => {
        setIsToggled(!isToggled)
    }

    const backgroundColor = isToggled ? "#494949" : 'white'
    return (
        <div className="overflow-x-hidden" style={{backgroundColor}}>
            <Navbar changeBackground={changeBackground}
            ></Navbar>
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;