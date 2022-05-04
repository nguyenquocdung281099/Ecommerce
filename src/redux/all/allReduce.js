import *as types from "./allType";
const initialState = {
    products:[],
    listUser:[],
    orders:[],
    newOrder:[],
    statusProduct:0,
    statusUser:0,
    statusOrder:0

}
export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_USER:
            return{
                ...state,
                listUser:action.data
            }
        case types.FETCH_ALL_PRODUCT:
            return{
                ...state,
                products:action.data
            }
        case types.FETCH_ALL_ORDER:
            return{
                ...state,
                orders:action.data
            }
        case types.FETCH_TEN_ORDER:
            return{
                ...state,
                newOrder:action.data
            }
        case types.ADD_PRODUCT:
            const listProduct = [...state.products] ;
            listProduct.push(action.product);
            return{
                ...state,
                products:listProduct
            }
        case types.UPDATE_PRODUCT:
            const listProduct1 = [...state.products] ;
            const index = listProduct1.findIndex( x => x.id === action.product.id);
            listProduct1[index] = action.product;
            return{
                ...state,
                products:listProduct1
            }
        case types.DELETE_PRODUCT:
            const listProduct2 = [...state.products] ;
            const index2= listProduct2.findIndex(x=> x.id === action.id);
            listProduct2.splice(index2,1);
            return{
                ...state,
                products:listProduct2
            }
        case types.CHANGE_STATUS :
            const listOrder = [...state.newOrder]
            const index3 = listOrder.findIndex(x=>x.id === action.order.id);
            listOrder[index3] = action.order
            return{
                ...state,
                newOrder:listOrder
            }
        case types.LOAD_MORE_ORDER:
            const listOrder2 = [...state.newOrder];
            const newArrayOrder =  listOrder2.concat(action.orders)
            return{
                ...state,
                newOrder:newArrayOrder
            }
        case types.FULL_ORDER:
            return{
                ...state,
                statusOrder:1
            }
        case types.LOAD_MORE_PRODUCT:
            const listProduct3 = [...state.products];
            const newArray =  listProduct3.concat(action.products)
            return{
                ...state,
                products:newArray
            }
        case types.FULL_PRODUCT:
            return{
                ...state,
                statusProduct:1
            }
        case types.UPDATE_PERSON:
            const listUser1 = [...state.listUser]
            const indexUser = listUser1.findIndex(x => x.id === action.user.id)
            listUser1[indexUser] = action.user;
            return{
                ...state,
                listUser:listUser1
            }
        case types.DELETE_USER:
            const listUser2 = [...state.listUser]
            const indexUser2 = listUser2.findIndex(x => x.id === action.id);
            listUser2.splice(indexUser2,1);
            return{
                ...state,
                listUser:listUser2
            }
        case types.ADD_NEW_USER:
            const listUser3 = [...state.listUser];
            listUser3.push(action.user);
            console.log(action.user)
            return{
                ...state,
                listUser:listUser3
            }
        case types.SEARCH_USER:
            return{
                ...state,
                listUser:action.user
            }
        default:
            return state
    }
}