
import * as  types  from "./cartType";
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case types.FETCH_CART:
        return action.listCart

    default:
        return state
    }
}
