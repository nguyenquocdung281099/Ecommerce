import *as types from "./productType";
import axios from "axios";

const host = 'http://localhost:3000/wine?';
export const fetchProduct =  (page,type='',color='',rateProduct=0) =>{
    return async dispatch =>{
        try {
            let string = `${host}_page=${page}&_limit=6`;
            if(type !== ''){
                string += `&Type=${type}`;
            }
            if(color !== ''){
                string += `&Color=${color}`;
            }
            if(parseInt(rateProduct) !== 0){
                const rate = parseFloat(rateProduct)
                string += `&RatingScore_gte=${rate}&RatingScore_lte=${rate+1-0.1}`;
            }
            const result = await axios.get(string);
            dispatch(setProduct(result.data));
        } catch (error) {
        }
    }
}
export const setProduct =  data =>{
    return {
        type:types.FETCH__PRODUCT,
        product:data
    }
}
export const  getPageAmount = async (type='',color='',rateProduct=0) =>{
    try {
        let string = `${host}`;
        if(type !== ''){
            string += `&Type=${type}`;
        }
        if(color !== ''){
            string += `&Color=${color}`;
        }
        if(parseInt(rateProduct) !== 0){
            const rate = parseFloat(rateProduct)
            string += `&RatingScore_gte=${rate}&RatingScore_lte=${(rate+1)-0.1}`;
        }
        const result = await axios.get(string);
        const number = result.data.length;
        return Math.ceil(number/6);
    } catch (error) {
    }
}