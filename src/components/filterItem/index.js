import React from "react";
import PropTypes from 'prop-types'
import './styles.css'
const FilterItem = ({ children }) => {
    return (
        <div className="h-16 w-full" >
            <button className=" filter-button h-full w-full" >
                {children}
            </button>
        </div>
    )
}

FilterItem.propTypes = {
    children: PropTypes.any
}
export default FilterItem