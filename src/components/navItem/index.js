import React from "react";
import PropTypes from 'prop-types'
import './styles.css'
const NavItem = ({ children }) => {
    return (
        <li className="text-white flex items-center m-5 cursor-pointer" >
            {children}
        </li>
    )
}

NavItem.propTypes = {
    children: PropTypes.any
}
export default NavItem