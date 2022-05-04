import * as types from "./userType";
import { EMAIL_PASSOWRD_INCORRECT } from "../../common/message";
import { updateRattingOfUser,updateCart } from "../../api/api";
const initialState = {
    data:{},
    status:false,
    message:"",
    ready:false
}
export default (state = initialState, action) => {
    switch (action.type) {
    case types.CHECK_LOGIN:
        if(action.user !== false){
            localStorage.setItem("user",JSON.stringify(action.user));
            window.location.href='/'
            return {
                data:action.user,
                status:true,
                message:""
            }
        }
        return {
            ...state,
            message:EMAIL_PASSOWRD_INCORRECT
        }
    case types.CHECK_LOCAL_STORAGE:
        if(action.user === ''){
            return{
                ...state,
                status:false,
                ready:true
            }
        }
        return {
            ...state,
            data:action.user,
            status:true,
            ready:true
        }
    case types.LOGOUT:
        localStorage.setItem("user","");
        return initialState;
    case types.UPDATE_USER:
        return {
            ...state,
            data:action.user
        };
    case types.RATTING_OF_USER :
        if(state.data.ListRatting){
            const  array = [...state.data.ListRatting];
            const index =  array.findIndex(x => x.idWine === action.rate.idWine)
            if(index === -1){
                array.push(action.rate);
            }else{
                array[index] = action.rate;
            }
            updateRattingOfUser(state.data.id,array);
            const object = {
                ...state,
                data:{
                    ...state.data,
                    ListRatting:array
                }
            }
            return object;
        }else{
            const array1 = [];
            array1.push(action.rate);
            updateRattingOfUser(state.data.id,array1);
            const objec1 = {
                ...state,
                data:{
                    ...state.data,
                    ListRatting:array1
                }
            }
            return objec1
        }
    case types.ADD_TO_CART :
        const listCart = [...state.data.Cart]
        const {cart} = action;
        let index = listCart.findIndex(x => x.idWine === cart.idWine);
        if(index === -1){
            listCart.push(cart);
        }else{
            listCart[index] = {
                idWine:cart.idWine,
                amount : listCart[index].amount +cart.amount
            }
        }
        const cartObject = {
            ...state,
            data:{
                ...state.data,
                Cart:listCart
            }
        }
        updateCart(state.data.id,listCart);
        return cartObject
    case types.DELETE_CART:
        const listCart1 = [...state.data.Cart]
        const index1 = listCart1.findIndex(x => x.idWine === action.id);
        listCart1.splice(index1,1);
        const cartObject1 = {
            ...state,
            data:{
                ...state.data,
                Cart:listCart1
            }
        }
        updateCart(state.data.id,listCart1);
        return cartObject1
    case types.UPDATE_CART:
        const listCart2 = [...state.data.Cart]
        const index2 = listCart2.findIndex(x => x.idWine === action.cart.idWine);
        listCart2[index2] = {...action.cart};
        const cartObject2 = {
            ...state,
            data:{
                ...state.data,
                Cart:listCart2
            }
        }
        updateCart(state.data.id,listCart2);
        return cartObject2
    case types.PURCHASE_SUSSCESS:
        updateCart(state.data.id,[]);
        return{
            ...state,
            data:{
                ...state.data,
                Cart:[]
            }
        }
    default:
        return state
    }
}