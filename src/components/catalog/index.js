import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../actions/catalogActions";
import ProductCard from "../productCard";
export const Catalog = () => {
    const productList = useSelector(state => state.productList)
    const dispatch = useDispatch() // is function and return object

    useEffect(() => {
        handleTabRedirect()
    }, []);

    const handleTabRedirect = () => {
        getProductList(dispatch)
    }
    //
    return (
        <div className="flex flex-wrap justify-between">
            {
                productList.map((product) => <div className="" key={product.id} ><ProductCard key={product.id} imageUrl={product.imageUrl} ></ProductCard></div>)
            }
        </div>
    )
}