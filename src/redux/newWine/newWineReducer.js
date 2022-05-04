import * as types from "./newWineType";

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_NEW_WINE:
        return action.wine
    default:
        return state
    }
}