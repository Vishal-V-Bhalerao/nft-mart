import React from "react";
import '../productCard/styles.css'
import PropTypes from 'prop-types'
const ProductCard = ({ imageUrl }) => {
    return (
        <div className="h-96 grid grid-rows-6  rounded-lg primary-card m-2 shadow-md ">
            <div className="row-span-4 flex-1 justify-center items-center rounded-t-lg overflow-hidden" >
                <img className="shrink-0 w-full h-full" src={imageUrl}></img>
            </div>
            <div className="row-span-2 rounded-b-lg " >

            </div>
        </div>
    )
}
// for validating props0
ProductCard.propTypes = {
    imageUrl: PropTypes.string
}
export default ProductCard