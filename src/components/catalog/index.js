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

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 p-5 ">
            {
                productList.map((product) => <ProductCard key={product.id} imageUrl={product.imageUrl} ></ProductCard>)
            }
        </div>
    )
}