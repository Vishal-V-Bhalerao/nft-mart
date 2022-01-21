import React from "react";
import { useSelector } from "react-redux";
import { ProductCard } from "../productCard";
export const Catalog = () => {
    const productCount = useSelector(state => state.productCount)
    // flex justify-around flex-wrap
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-10 ">
            {
                Array(productCount).fill().map((indexKey) => <ProductCard key={indexKey}></ProductCard>)
            }
        </div>
    )
}