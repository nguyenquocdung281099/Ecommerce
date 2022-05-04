import * as types from "./userType";
import { checkUser,update,getUser,pruchase  } from "../../api/api";

export const  checkLogin =  (user) =>{
    return async dispatch =>{
        const data = await checkUser(user);
        dispatch(setUser(data));
    }
}
export const checkStorage = () =>{
    return async dispatch =>{
        const data= localStorage.getItem('user')
        if(data === ''){
            dispatch(setUserFormStorage(''));
        }else if( JSON.parse(data) === null  ){
            dispatch(setUserFormStorage(''));
        }else{
            const user = await getUser(JSON.parse(data).id)
            dispatch(setUserFormStorage(user));
        }
    }
}
export const setUserFormStorage = (user) =>{
    return{
        type: types.CHECK_LOCAL_STORAGE,
        user
    }

}
export const setUser = data =>{
    return{
        type: types.CHECK_LOGIN,
        user :data
    }
}
export const logout = ()=>{
    return{
        type: types.LOGOUT
    }
}
export const updateUser = user =>{
    return async dispatch =>{
        const result = await update(user);
        dispatch(setUserAffterUpdate(result.data));
    }

}
export const setUserAffterUpdate = user =>{
    return {
        type: types.UPDATE_USER,
        user:user
    }
}
export  const rattingOfUser = rate =>{
    return{
        type: types.RATTING_OF_USER,
        rate
    }
}
export const addCartToUser = (cart) =>{
    return{
        type: types.ADD_TO_CART,
        cart
    }
}
export const deleteCart = (id) =>{
    return{
        type: types.DELETE_CART,
        id
    }
}
export const updateCart = (cart) =>{
    return{
        type: types.UPDATE_CART,
        cart
    }
}
export const purchaseSussess = (infor,totalPrice,cart) =>{
    pruchase(infor,totalPrice,cart);
    return{
        type: types.PURCHASE_SUSSCESS,
    }
}