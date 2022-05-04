import { getNewWine } from "../../api/api";
import * as types from "./newWineType";

export const fetchNewWine = () =>{
    return async dispatch =>{
        const data = await getNewWine(20190901);
        dispatch({
            type:types.FETCH_NEW_WINE,
            wine:data
        })
    }
}