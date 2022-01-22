import produce from "immer"
import { UPDATE_PRODUCT } from "../actions/catalogActions"

export const initialProductState = {
    productList: [],
    productCount: 15
}
export const productReducer = (state = initialProductState, action) => {
    if (action.type == UPDATE_PRODUCT) {
        console.log(action.payload)
        if (action.payload && Array.isArray(action.payload.assets)) {
            // using immer produce to update immutable state in mutable fashion
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
            // description: product.node.asset.description,
            externalLink: product.node.asset.external_link,
            collection: {
                "isVerified": product.node.asset.collection.isVerified,
                "relayId": product.node.asset.collection.relayId,
                "id": product.node.asset.collection.id,
                "displayData": product.node.asset.collection.displayData,
                "imageUrl": product.node.asset.collection.imageUrl,
                "slug": product.node.asset.collection.slug,
                "name": product.node.asset.collection.name
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
            usdSpotPrice: product.node.asset.orderData.bestAsk.paymentAssetQuantity.asset.usdSpotPrice
        }
    })
    // {
    //     "node": {
    //         "asset": {
    //             "assetContract": {
    //                 "address": "0x19d84b2a4b21910339af097a1bddb48682d6f47d",
    //                 "chain": "ETHEREUM",
    //                 "id": "QXNzZXRDb250cmFjdFR5cGU6NDk2MDUz",
    //                 "openseaVersion": null
    //             },
    //             "collection": {
    //                 "isVerified": false,
    //                 "relayId": "Q29sbGVjdGlvblR5cGU6NTYyODc0NQ==",
    //                 "id": "Q29sbGVjdGlvblR5cGU6NTYyODc0NQ==",
    //                 "displayData": {
    //                     "cardDisplayStyle": "CONTAIN"
    //                 },
    //                 "imageUrl": "https://lh3.googleusercontent.com/BC4yvlQw8js3h7kyRl-bru-0ig7tmJK9kEkklTcXHU52TdIKR04ZVanoBCPjxrYe2oLuaR5i71FlZOSKisFRU_PW5se71OHDIa0asLc=s120",
    //                 "slug": "dask-dead-army-skeleton-klub",
    //                 "name": "DASK - Dead Army Skeleton Klub"
    //             },
    //             "relayId": "QXNzZXRUeXBlOjIyODA5Njg1OA==",
    //             "tokenId": "6866",
    //             "backgroundColor": null,
    //             "imageUrl": "https://lh3.googleusercontent.com/idVG-QBnBlduNS5V_i-lcMBAsRFsbRBaW5vk7LFLLfcsV4dm3hG-w-4Pjb0UJz5aHpqhBqg3S_Yto8nI0HWRg17votKZDH5ZoGOh7Q",
    //             "name": "DASK #6866",
    //             "id": "QXNzZXRUeXBlOjIyODA5Njg1OA==",
    //             "isDelisted": false,
    //             "animationUrl": "https://storage.opensea.io/files/5fb44de3d8611a1557d2b0e9b9eb5203.mp4",
    //             "displayImageUrl": "https://lh3.googleusercontent.com/idVG-QBnBlduNS5V_i-lcMBAsRFsbRBaW5vk7LFLLfcsV4dm3hG-w-4Pjb0UJz5aHpqhBqg3S_Yto8nI0HWRg17votKZDH5ZoGOh7Q",
    //             "decimals": 0,
    //             "favoritesCount": 0,
    //             "isFavorite": false,
    //             "isFrozen": false,
    //             "hasUnlockableContent": false,
    //             "orderData": {
    //                 "bestAsk": {
    //                     "relayId": "T3JkZXJWMlR5cGU6MjQ5NTM0MTQ1Nw==",
    //                     "orderType": "BASIC",
    //                     "maker": {
    //                         "address": "0x826a98010ff540791a150111164191dc8b02e5de"
    //                     },
    //                     "closedAt": "2022-02-22T10:03:03",
    //                     "dutchAuctionFinalPrice": null,
    //                     "openedAt": "2022-01-22T10:01:28",
    //                     "priceFnEndedAt": null,
    //                     "quantity": "1",
    //                     "decimals": "0",
    //                     "paymentAssetQuantity": {
    //                         "quantity": "179000000000000000",
    //                         "asset": {
    //                             "decimals": 18,
    //                             "imageUrl": "https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg",
    //                             "symbol": "ETH",
    //                             "usdSpotPrice": 2485.97,
    //                             "assetContract": {
    //                                 "blockExplorerLink": "https://etherscan.io/address/0x0000000000000000000000000000000000000000",
    //                                 "chain": "ETHEREUM",
    //                                 "id": "QXNzZXRDb250cmFjdFR5cGU6MjMzMQ=="
    //                             },
    //                             "id": "QXNzZXRUeXBlOjEzNjg5MDc3"
    //                         },
    //                         "id": "QXNzZXRRdWFudGl0eVR5cGU6MTI3NjM5MTk0NDU3MDY5ODU2NjY5MTI4NTk3NjcwMjAxNTUyMjg5",
    //                         "quantityInEth": "179000000000000000"
    //                     }
    //                 },
    //                 "bestBid": null
    //             },
    //             "assetEventData": {
    //                 "lastSale": null
    //             }
    //         },
    //         "assetBundle": null,
    //         "__typename": "SearchResultType"
    //     },
    //     "cursor": "YXJyYXljb25uZWN0aW9uOjMy"
    // },    
}