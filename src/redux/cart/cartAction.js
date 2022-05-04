import * as types  from "./cartType";
import { getWineByCart } from "../../api/api";

export const fetchCart = (carts) =>{
    return async dispatch =>{
        const listCart = await getWineByCart(carts ? carts : [] ) ;
        dispatch({
            type:types.FETCH_CART,
            listCart
        })
    }
}