import React from "react";
import './styles.css'
import { BaseSearch } from "../baseSearch";
export const TopNavigationPanel = () => {
    return (
        <div className=" flex w-100 sticky top-0 primary-top-navigation">
            <div className="flex text-xl items-center px-8" > <h1 className=" text-white">NFT MART</h1> </div>
            <div className="flex items-center w-1/3" > <BaseSearch></BaseSearch> </div>
            <div></div>
        </div>
    )
}