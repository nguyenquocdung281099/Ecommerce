import { showLoginNowModal } from "../modal/loginNowModal/LoginNowModal";
import { addCartToUser,deleteCart } from "../redux";


export const addToCart = (status,dispatch,idWine,amount=1) =>{
    if(!status){
        showLoginNowModal();
    }else{
        dispatch(addCartToUser({
            idWine,
            amount
        }));
    }
}
export const deleteCartFromUser = (dispatch,idWine) =>{
        dispatch(deleteCart(idWine))
}

