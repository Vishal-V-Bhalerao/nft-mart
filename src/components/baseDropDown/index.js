import React, { useState } from "react"
import PropTypes from 'prop-types'
import './styles.css'
const BaseDropDown = ({ onChangeHandler, options, defaultSelected }) => {
    const [selectedOption, setSelectedOption] = useState(defaultSelected)
    const changeHandler = (event) => {
        console.log(event)
        setSelectedOption(event.target.value)
        onChangeHandler(event.target.value)
    }
    console.log(defaultSelected)
    // console.log(selectedOption)
    return (
        <select className="bg-green primary-dropdown shadow-lg" name={selectedOption.value} onChange={changeHandler}>
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