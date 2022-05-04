import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProductType = ({type,setType}) => {
    const { t } = useTranslation();
    const listType = ["Chivas", "Johnnie Walker", "Whisky", "Glenmorangie"];
    const history = useHistory();
    const onHandleChange = (event) => {
        let target = event.target;
        setType(target.value)
    };
    const onHandleClick = event =>{
        let target = event.target;
        if(target.checked){
            target.checked = false;
            setType('');
        }
        history.push('/product/1');
    }
    const loadType = () => {
        const string = [];
        for (const item of listType) {
            string.push(
                <li key={item}>
                    <input
                        id={`${item.replace(/\s/g, "")}`}
                        type="radio"
                        name="ProductType"
                        value={item}
                        onChange={onHandleChange}
                        checked={type===item}
                        onClick={onHandleClick}
                    />
                    <label htmlFor={`${item.replace(/\s/g, "")}`}> {item} </label>
                </li>
            );
        }
        return string ;
    };
    return (
        <div className="product__list">
        <div className="product__item">
            <p className="product__item-name"> {t('common.foreignWine')} </p>
            <ul>
                {loadType()}
            </ul>
        </div>
        </div>
    );
};

export default ProductType;