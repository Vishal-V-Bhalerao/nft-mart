import React from "react";
import '../productCard/styles.css'
import PropTypes from 'prop-types'
const ProductCard = ({ imageUrl }) => {
    return (
        <div className="grid grid-rows-4  rounded-lg primary-card card-size mb-5 shadow-md ">
            <div className="row-span-3 flex-1 justify-center items-center rounded-t-lg overflow-hidden" >
                <img className="shrink-0 w-full h-full" src={imageUrl}></img>
            </div>
            <div className="row-span-1 rounded-b-lg " >

            </div>
        </div>
    )
}
// for validating props0
ProductCard.propTypes = {
    imageUrl: PropTypes.string
}
export default ProductCard