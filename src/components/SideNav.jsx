import React from "react";
import { NavLink } from 'react-router-dom';


export async function loader({ params }) {
    return params
}


export default function SideNav(props) {
    return (
        <aside>
            <div className="sidebar" ref={props.forwardedRef} id={"responsive-menu"} data-toggler={""} data-animate="fade-in fade-out">
                <NavLink to={"/home"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Home</NavLink>
                <NavLink to={"/news"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>RSS Movie News</NavLink>
                <NavLink to={"/upload"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Upload</NavLink>
            </div>
        </aside>
    )
}