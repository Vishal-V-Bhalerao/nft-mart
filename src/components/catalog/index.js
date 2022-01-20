import React from "react";
import { ProductCard } from "../productCard";
export const Catalog = () => {
    // flex justify-around flex-wrap
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-10 ">
            {
                Array(12).fill().map((indexKey) => <ProductCard key={indexKey}></ProductCard>)
            }
        </div>
    )
}