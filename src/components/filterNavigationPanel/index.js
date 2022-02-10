import React from "react";
import FilterItem from "../filterItem/index"
import './styles.css'
export const FilterNavigationPanel = () => {
    return (
        <div className="fixed primary-navigation shadow-md" >
            <FilterItem></FilterItem>
        </div>
    )
}