import { getHotTrendWine } from "../../api/api";
import * as types from "./hotTrendType";

export const fetchHotTrendWine = () =>{
    return async dispatch =>{
        const data = await getHotTrendWine();
        dispatch({
            type:types.FETCH_HOT_TREND_WINE,
            wine:data
        })
    }
}