import React from 'react';
import { useHistory } from "react-router-dom";
import RatingN from "../../component/rating/RattingN";
import { useTranslation } from 'react-i18next';

const ProductRate = ({rate,setRate}) => {
    const listRate = [5,4,3,2,1];
    const history = useHistory();
    const { t } = useTranslation();
    const onHandleChange = (event) => {
        let target = event.target;
        setRate(target.value);
    };
    const onHandleClick = event =>{
        let target = event.target;
        if(target.checked){
            target.checked = false;
            setRate(0);
        }
        history.push('/product/1');
    }
    const loadRate = () => {
        const string = [];
        for (const item of listRate) {
            string.push(
                <li key={`${item}ProductRate`}>
                    <input
                        id={`${item}ProductRate`}
                        type="radio"
                        name="ProductRate"
                        value={item}
                        onChange={onHandleChange}
                        checked={rate==item}
                        onClick={onHandleClick}
                    />
                    <label
                        htmlFor={`${item}ProductRate`}
                        style={{backgroundColor:item}}
                    >
                        <div className="product__rate-box">
                            {RatingN(item,'#F8CC03','20px','2px')}
                        </div>
                    </label>
                </li>
            );
        }
        return string ;
    };
    return (
        <div className="product__rate">
            <p className="product__title"> {t('common.productReview')} </p>
            <ul>
                {loadRate()}
            </ul>
        </div>
    );
}
export default ProductRate;