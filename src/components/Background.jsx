import React, {useRef, useState, useEffect} from "react";
import Header from './Header'
import SideNav from './SideNav'
import OAuth from "./OAuth";
import {Outlet} from "react-router-dom";


//import MotionUI from "motion-ui";

export default function Background() {
    const menuBarRef = useRef(null)
    const [toggle, setToggle] = useState(false)
    //window.addEventListener('resize', () => { !toggle ? document.getElementById('responsive-menu').style.display = 'flex' : document.getElementById('responsive-menu').style.display = 'none' })

    useEffect(() => {
        menuBarRef.current.style.display = 'none'
    },[])

    return (
        <div className={"background"}>
            { toggle ? <div className={"lock-display"} onClick={() => {
                document.documentElement.style.overflow = 'auto'
                setToggle(!toggle)
                menuBarRef.current.style.display = 'none'

            }}></div> : <div></div> }

            <Header onClick={() => {
                menuBarRef.current.style.visibility = 'visible'
                document.documentElement.style.overflow = 'hidden'; // 스크롤바를 숨김
                if (toggle) {
                    menuBarRef.current.style.display = 'flex'
                    document.documentElement.style.overflow = 'auto'; // 스크롤바를 다시 보여줌
                }
                setToggle(!toggle)
            }}></Header>
            <section>
                <SideNav forwardedRef={menuBarRef}></SideNav>
                <Outlet></Outlet>
            </section>

            <OAuth></OAuth>

        </div>
    );

}