import * as ms from "../message";
const checkForm = (user) => {
    let count = 0;
    const regexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/gm;
    const regName = /(^[A-Za-z_ ]{2,12}$)/;
    const regPhone=/(09|01|07[2|6|8|9])+([0-9]{7,9})\b/g;

    for (const key in user) {
        if (user[key] === "") {
            count++;
            break;
        }
    }
    if(count !== 0){
        return ms.NOT_EMPTY
    }else if(typeof user.Email !=='undefined' &&   !regexEmail.test(user.Email)){
        return ms.INVALID_EMAIL
    }else if (typeof user.FirstName !=='undefined' && !regName.test(user.FirstName)){
        return ms.FIRST_NAME
    }else if( typeof user.LastName !=='undefined' &&  !regName.test(user.LastName) ){
        console.log(user.LastName.length)
        return ms.LAST_NAME
    }else if( typeof user.Phone !=='undefined' && user.Phone !== ""){
        if (!regPhone.test(user.Phone)) {
            return ms.INVALID_PHONE
        }


    }

    return true;
}

export default checkForm;
