import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {addToCart} from "../../common/mixin";
import { useTranslation } from 'react-i18next';

const ItemWine = ({wine}) => {
    const { t } = useTranslation();
    const {status} = useSelector(state => state.user);
    const dispatch = useDispatch();
    return (
        <div className="newproduct__item">
            <div className="newproduct__img"><img src={process.env.PUBLIC_URL+wine.Img} alt="" />
                <div className={`newproduct__img-type -${wine.Status?wine.Status.toLowerCase() : ""}`}>
                    <p>{wine.Status?wine.Status : ""}</p>
                </div>
                <div className="newproduct__img-sub">
                    <div className="newproduct__img-sub-item">
                        <p> <i className="fas fa-heart"></i><span>{t('common.like')} </span></p>
                    </div>
                    <div className="newproduct__img-sub-item">
                        <p> <i className="fas fa-signal"></i><span>{t('common.compare')} </span></p>
                    </div>
                    <div className="newproduct__img-sub-item">
                        <Link to={`/productDetail/${wine.id}`}> <i className="fas fa-compress-alt"> </i></Link>
                    </div>
                </div>
            </div>
            <div className="newproduct__info">
                <p className="newproduct__info-name"> {wine.Name} </p>
                <p className="newproduct__info-price"><span> {(wine.Price).toFixed(3)} <small>đ </small></span><span>-</span><del>
                        {(wine.OldPrice).toFixed(3)}<small>đ</small></del></p>
                        <button className="newproduct__info-btn" onClick= {()=>addToCart(status,dispatch,wine.id)} >{t('common.addToCart')}</button>
            </div>
        </div>
    );
}

export default ItemWine;