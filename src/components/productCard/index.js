import React, { useState } from "react";
import '../productCard/styles.css'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
// TODO: move price to text constants file

const ProductCard = ({ product }) => {
    const [buyOption, setBuyOption] = useState(false)
    return (
        <div
            onMouseEnter={() => setBuyOption(true)}
            onMouseLeave={() => setBuyOption(false)}
            className=" rounded-lg primary-card card-size mb-8 shadow-md ">
            <div className=" min-img-size flex bg-black justify-center items-center rounded-t-lg overflow-hidden" >
                <img className="shrink-0 w-full h-full" src={product.imageUrl}></img>
            </div>
            <div className=" flex flex-col rounded-b-lg " >
                <div className="h-16 flex p-3">
                    <div className="w-3/5 " >
                        <div className="flex justify-items-center" >
                            <div className="card-text-xs font-medium overflow-ellipsis collection-name">
                                <span title={product.collection.name} >{product.collection.name}</span>
                            </div>
                        </div>
                        <div>
                            <div className="card-text-xs font-semibold product-name">
                                <span title={product.name} >{product.name}</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/5 flex flex-col items-end " >
                        <div className="flex justify-items-center" >
                            <div className="card-text-xs font-medium overflow-ellipsis collection-name">
                                <span >Price</span>
                            </div>
                        </div>
                        <div>
                            <div className="card-text-sm font-semibold  product-name flex ">
                                <img className="w-4 h-4" src={product.symbolImageUrl}></img>
                                <span >{product.coinPrice}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-6 pl-3 pr-3">
                    {buyOption ? <div className="text-sm font-semibold primary-blue"> Buy now </div> : <div></div>}
                    <div className="collection-name text-lg" >
                        <FontAwesomeIcon icon={faHeart} ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}
// for validating props0
ProductCard.propTypes = {
    product: PropTypes.object
}
export default ProductCard