import { getWineById } from "../../api/api";
import * as types from "./wineType";

export const fetchWine =  id =>{
    return async  dispatch =>{
        const result = await getWineById(id);
        dispatch(setWine(result));
    }
}
export const setWine =  wine =>{
    return {
        type:types.FETCH_WINE,
        wine
    }
}
export const rattingProduct = rate =>{
    return{
        type:types.UPDATE_RATTING,
        rate
    }
}