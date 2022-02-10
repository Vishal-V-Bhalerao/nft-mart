import React from "react";
import NavItem from "../navItem";
import { faUser, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles.css'
const navList = [
    {
        name: 'Explore'
    },
    {
        name: 'About'
    },
    {
        name: 'Resources'
    }
]
export const TopNavigationList = () => {
    return (
        <ul className="flex">
            <div className="flex h-full" >
                {navList.map((item) => <NavItem key={item.name}> <a className="navigation-item nav-text" >{item.name}</a> </NavItem>)}
            </div>
            <div className="flex h-full" >
                <NavItem> <FontAwesomeIcon className="text-white navigation-item text-xl" icon={faUser}></FontAwesomeIcon> </NavItem>
                <NavItem><FontAwesomeIcon className="text-white navigation-item text-xl" icon={faCartArrowDown}></FontAwesomeIcon> </NavItem>
            </div>
        </ul>
    )
}