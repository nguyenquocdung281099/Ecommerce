import { getAllOrder,getAllProduct,getAllUser,addProduct ,updateProduct,deleteWine,updateOrderStatus,loadMoreWine,getTenOrder,loadTenOrder,update,deletePerson,register, searchPerson } from "../../api/api";
import * as types from "./allType";

export const  fetchAllUser  = () =>{
    return async dispatch =>{
        const data = await getAllUser();
        dispatch({
            type:types.FETCH_ALL_USER,
            data
        })
    }
}
export const  fetchAllProduct = () =>{
    return async dispatch =>{
        const data = await getAllProduct();
        dispatch({
            type:types.FETCH_ALL_PRODUCT,
            data
        })
    }
}
export const  fetchAllOrder  = () =>{
    return async dispatch =>{
        const data = await getAllOrder();
        dispatch({
            type:types.FETCH_ALL_ORDER,
            data
        })
    }
}
export const  fetchListOrder  = () =>{
    return async dispatch =>{
        const data = await getTenOrder();
        dispatch({
            type:types.FETCH_TEN_ORDER,
            data
        })
    }
}
export const addNewProducts = (file,product) =>{
    return async dispatch =>{
        const result = await addProduct(file,product);
        dispatch({
            type:types.ADD_PRODUCT,
            product:result
        })
    }
}
export const updateProducts = (file,product,status) =>{
    return async dispatch =>{
        const result = await updateProduct(file,product,status);
        dispatch({
            type:types.UPDATE_PRODUCT,
            product:result
        })
    }
}
export const deleteProduct = (id) =>{
    deleteWine(id);
    return{
        type:types.DELETE_PRODUCT,
        id
    }
}
export const changeOrderStatus = (id,status) =>{
    return async dispatch =>{
        const order = await updateOrderStatus(id,status);
        dispatch({
            type:types.CHANGE_STATUS,
            order
        })
    }
}
export const loadMoreProduct = (page) =>{
    return async dispatch => {
        const products = await loadMoreWine(page);
        if(products.length !== 0){
            dispatch({
                type:types.LOAD_MORE_PRODUCT,
                products
            })
        }else{
            dispatch({
                type:types.FULL_PRODUCT
            })
        }
    }
}
export const loadMoreOrder = (page) =>{
    return async dispatch => {
        const orders = await loadTenOrder(page);
        if(orders.length !== 0){
            dispatch({
                type:types.LOAD_MORE_ORDER,
                orders
            })
        }else{
            dispatch({
                type:types.FULL_ORDER
            })
        }
    }
}
export const updatePerson = (user) =>{
    return async dispatch =>{
        const result = await update(user);
        dispatch({
            type:types.UPDATE_PERSON,
            user:result.data
        })
    }
}
export const deleteUser = (id)=>{
    return async dispatch =>{
        const user = await deletePerson(id);
        dispatch({
            type:types.DELETE_USER,
            id:user.id
        })
    }
}
export const addNewUser = (user) =>{
    return async dispatch =>{
        const result = await register(user);
        dispatch({
            type:types.ADD_NEW_USER,
            user:result.data
        })
    }
}
export const searchUser = (string) =>{
    return async dispatch =>{
        const data = await searchPerson(string);
        dispatch({
            type:types.SEARCH_USER,
            user:data
        })
    }
}