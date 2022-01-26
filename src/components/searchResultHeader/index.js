import React from "react";
import BaseDropDown from "../baseDropDown";
import PropTypes from 'prop-types'
import { useSelector } from "react-redux";

const SearchResultHeader = ({ totalCount }) => {

    const dropdownChangeHandler = (value) => {
        console.log(value)
    }
    const sortingOptions = useSelector(state => state.sortingOptions)
    // console.log('Sorting options', sortingOptions)
    return (
        <div className="flex justify-between mt-2 mb-10">
            <div className="mt-5 mb-5 text-white text-lg"><h1>{`total ${totalCount} items`} </h1></div>
            <BaseDropDown onChangeHandler={dropdownChangeHandler} options={sortingOptions} defaultSelected={sortingOptions[0]}></BaseDropDown>
        </div>
    )
}

SearchResultHeader.propTypes = {
    totalCount: PropTypes.string
}

export default SearchResultHeader