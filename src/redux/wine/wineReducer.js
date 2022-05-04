import * as types from "./wineType";
import { updateRatting } from "../../api/api";
const initialState = {

}
export default (state = initialState, action) => {
    switch (action.type) {
    case types.FETCH_WINE:
        return action.wine;
    case types.UPDATE_RATTING:
        const listRating = [...state.Rating];
        const index =  listRating.findIndex(x=> x.idUser === action.rate.idUser)
        if(index === -1){
            listRating.push(action.rate);
        }else{
            listRating[index] = action.rate;
        }
        let number =(listRating.map(item =>  item.score).reduce((a,b)=>a+b) / listRating.length).toFixed(1)
        let score = parseFloat(number) ;
        updateRatting(state.id,listRating,score);
        return{
            ...state,
            Rating:listRating,
            RatingScore:score
        }
    default:
        return state
    }
}