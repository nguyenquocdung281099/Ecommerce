import React from 'react';
import { useDispatch } from "react-redux";
import { deleteCartFromUser } from "../../common/mixin";
import { useTranslation } from 'react-i18next';

const HeaderCartItem = ({cart}) => {
    const { t } = useTranslation();
    const dispatch =  useDispatch()
    return (
        <div className="header__item">
            <div className="header__item-img"><img src={process.env.PUBLIC_URL+cart.Img} alt="" /></div>
                <p>{cart.Name}</p>
            <div className="header__item-info">
                <p className="header__item-price">
                    <i className="fas fa-dollar-sign">
                    </i><span>{cart.Price.toFixed(3)}</span>
                    <span>{cart.amount > 1 ? "X"+cart.amount : ""  }</span>
                </p>
                <button onClick = {() => deleteCartFromUser(dispatch,cart.id)} > {t('common.delete')} </button>
            </div>
        </div>
    );
}

export default HeaderCartItem;