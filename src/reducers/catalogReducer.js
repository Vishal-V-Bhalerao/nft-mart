import produce from "immer"
import { UPDATE_PRODUCT } from "../actions/catalogActions"

// TODO : Move to server side
const ETH_TO_USD_RATIO = 0.00039

export const initialProductState = {
    productList: [],
    productCount: 15,
    sortingOptions: [
        {
            displayName: 'Recently Listed',
            value: 'RecentlyListed'
        },
        {
            displayName: 'Recently Sold',
            value: 'RecentlySold'
        },
        {
            displayName: 'Price: Low to High',
            value: 'PriceLowToHigh'
        },
        {
            displayName: 'Price: High to Low',
            value: 'PriceHighToLow'
        }
    ]
}
export const productReducer = (state = initialProductState, action) => {
    if (action.type == UPDATE_PRODUCT) {
        console.log(action.payload)
        if (action.payload && Array.isArray(action.payload.assets)) {
            // using immer "produce" to update immutable state in mutable fashion
            return produce(state, (draftState) => {
                draftState.productList = parseProductList(action.payload.assets)
            })
        }
    }
    return state
}

const parseProductList = (list) => {
    return list.map((product) => {
        return {
            // TODO: add validation
            externalLink: product.node.asset.external_link,
            collection: {
                isVerified: product.node.asset.collection.isVerified,
                relayId: product.node.asset.collection.relayId,
                id: product.node.asset.collection.id,
                displayData: product.node.asset.collection.displayData,
                imageUrl: product.node.asset.collection.imageUrl,
                slug: product.node.asset.collection.slug,
                name: product.node.asset.collection.name
            },
            relayId: product.node.asset.relayId,
            tokenId: product.node.asset.tokenId,
            backgroundColor: product.node.asset.backgroundColor,
            imageUrl: product.node.asset.imageUrl,
            name: product.node.asset.name,
            id: product.node.asset.id,
            isDelisted: product.node.asset.isDelisted,
            animationUrl: product.node.asset.animationUrl,
            displayImageUrl: product.node.asset.displayImageUrl,
            decimals: product.node.asset.decimals,
            favoritesCount: product.node.asset.favoritesCount,
            isFavorite: product.node.asset.isFavorite,
            isFrozen: product.node.asset.isFrozen,
            hasUnlockableContent: product.node.asset.hasUnlockableContent,
            symbol: product.node.asset.orderData.bestAsk.paymentAssetQuantity.asset.symbol,
            symbolImageUrl: product.node.asset.orderData.bestAsk.paymentAssetQuantity.asset.imageUrl,
            usdSpotPrice: product.node.asset.orderData.bestAsk.paymentAssetQuantity.asset.usdSpotPrice,
            coinPrice: parseInt(product.node.asset.orderData.bestAsk.paymentAssetQuantity.asset.usdSpotPrice, 10) * ETH_TO_USD_RATIO
        }
    })
}