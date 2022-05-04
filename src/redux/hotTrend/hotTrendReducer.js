import * as types from "./hotTrendType";

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case types.FETCH_HOT_TREND_WINE:
        return action.wine

    default:
        return state
    }
}
