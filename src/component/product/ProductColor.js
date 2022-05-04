import React from 'react';
import { useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProductColor = ({color,setColor}) => {
    const { t } = useTranslation();
    const listColor = ['black','green','red','yellow'];
    const history = useHistory();
    const onHandleChange = (event) => {
        let target = event.target;
        target.style = {
            border : `1px solid ${target.value}`
        }
        setColor(target.value)
    };
    const onHandleClick = event =>{
        let target = event.target;
        if(target.checked){
            target.checked = false;
            setColor('')
        }
        history.push('/product/1');
    }
    const loadColor = () => {
        const string = [];
        for (const item of listColor) {
            string.push(
                <li key={`${item}ProductColor`}>
                    <input
                        id={`${item}ProductColor`}
                        type="radio"
                        name="ProductColor"
                        value={item}
                        onChange={onHandleChange}
                        checked={color===item}
                        onClick={onHandleClick}
                    />
                    <label
                        htmlFor={`${item}ProductColor`}
                        style={{backgroundColor:item}}
                    >
                    </label>
                </li>
            );
        }
        return string ;
    };
    return (
        <div className="product__color">
            <p className="product__title"> {t('common.colorOf')} </p>
            <div className="product__icon"><img src={process.env.PUBLIC_URL+'/img/titleleft-dark.png'} /></div>
            <ul className="product__color-box">
                {loadColor()}
            </ul>
        </div>
    );
}

export default ProductColor;