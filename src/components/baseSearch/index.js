import React from "react";
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
export const BaseSearch = () => {
    const placeHolderText = "Search items, collections, and accounts"
    return (
        <div className="flex p-3 w-full rounded-lg bg-slate-600" >
            <div className="text-white px-3" >
                <FontAwesomeIcon icon={faBell} ></FontAwesomeIcon>
            </div>
            <input className=" bg-slate-600" placeholder={placeHolderText} ></input>
        </div>
    )
}