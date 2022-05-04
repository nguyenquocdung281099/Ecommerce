import { combineReducers } from "redux";
import wineReducer from "./wine/wineReducer";
import userReducer from "./user/userReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";
import newWineReducer from "./newWine/newWineReducer";
import hotTrendReducer from "./hotTrend/hotTrendReducer";
import allReduce from "./all/allReduce";

const rootReducer = combineReducers({
    wine : wineReducer,
    user: userReducer,
    product: productReducer,
    carts: cartReducer,
    hotWine:hotTrendReducer,
    newWine:newWineReducer,
    all:allReduce
})

export default rootReducer;