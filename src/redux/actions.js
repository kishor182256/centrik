export const ADD = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}


export const SET = (products) => {
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}


export const SORT = (value) => {
    console.log('SORT_BY_PRICE--->SORT_BY_PRICE',value);
    return {
        type: "SORT_BY_PRICE",
        payload: value
    }
}
