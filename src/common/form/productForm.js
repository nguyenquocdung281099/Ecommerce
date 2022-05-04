import * as ms from "../message";
const productForm = (product) => {
    let count = 0;
    const checkNumber = /^[-+]?[1-9]\d*$/g ;
    const checkPrice= /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g
    const checkOldPrice= /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/g

    for (const key in product) {
        if (product[key] === "") {
            count++;
            break;
        }
    }
    if (count !== 0){
        return ms.NOT_EMPTY
    }else if( !checkPrice.test(product.Price)){
        return ms.INVALID_PRICE
    }else if( !checkOldPrice.test(product.OldPrice)){
        return ms.INVALID_OLD_PRICE
    } else if( !checkNumber.test(product.NumberOfProducts) || product.NumberOfProducts <= 0){
        return ms.INVALID_NUMBER_PRODUCT
    }


    return true;
}

export default productForm;
