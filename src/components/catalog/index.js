import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../actions/catalogActions";
import ProductCard from "../productCard";
import SearchResultHeader from "../searchResultHeader";
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
        <div>
            <SearchResultHeader totalCount={productList.length.toString()} ></SearchResultHeader>
            <div className="flex flex-wrap justify-between">
                {
                    productList.map((product) => <div className="" key={product.id} ><ProductCard key={product.id} product={product} ></ProductCard></div>)
                }
            </div>
        </div>
    )
}