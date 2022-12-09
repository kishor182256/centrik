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
    console.log('selectedValue',value);
    return {
        type: "SORT_PRODUCTS",
        payload: value
    }
}
