import React, { useState } from "react"
import PropTypes from 'prop-types'
const BaseDropDown = ({ onChangeHandler, options, defaultSelected }) => {
    const { selectedOption, setSelectedOption } = useState(defaultSelected)
    const changeHandler = (event) => {
        console.log(event)
        setSelectedOption(event.target.value)
        onChangeHandler()
    }
    return (
        <select value={selectedOption.value} onChange={changeHandler}>
            {options.map((singleOption) => {
                return (<option key={singleOption.value} value={singleOption.value}>{singleOption.displayName}</option>)
            })}
        </select>
    )
}
BaseDropDown.propTypes = {
    onChangeHandler: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    defaultSelected: PropTypes.object.isRequired,
}
export default BaseDropDown