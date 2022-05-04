import * as types from "./productType";

const initialState = []

export default (state = initialState, action ) => {
    switch (action.type) {
    case types.FETCH__PRODUCT:
        return action.product
    default:
        return state
    }
}
