import React from "react";
import { NavLink } from 'react-router-dom';
import data from '../data.json'


export async function loader({ params }) {
    return params
}


export default function SideNav(props) {



    return (
        <aside>
            <div className="sidebar" ref={props.forwardedRef} id={"responsive-menu"} data-toggler={""} data-animate="fade-in fade-out">
                {data.map((item, index) => (
                    <NavLink to={item.path} state={item.data} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""} key={index}>{item.name}</NavLink>
                ))}
                
                {/*<NavLink to={"/news"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>RSS Movie News</NavLink>*/}
                {/*<NavLink to={"/upload"} className={({isActive, isPending}) => isActive ? "active" : isPending ? "pending" : ""}>Upload</NavLink>*/}
            </div>
        </aside>
    )
}