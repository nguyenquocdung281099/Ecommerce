import React from 'react';
import RatingN from "../rating/RattingN";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ItemRecentView = ({wine}) => {
    const { t } = useTranslation();
    return (
        <div className="productRow__item">
            <div className="productRow__item-img"> <img src={process.env.PUBLIC_URL +wine.Img} alt="" /></div>
            <div className="productRow__item-info">
                <p className="productRow__item-name">{wine.Name}</p>
                <p className="productRow__item-price">{wine.Price.toFixed(3)}<span>đ</span></p>
                <div className="productRow__item-start">
                    <span>{t('common.yourRatting')} :</span> {RatingN(wine.score)}
                </div>
                <p className="productRow__item-content"> {wine.Decription} </p>
                <div className="productRow__item-btn"> <Link to={`/productDetail/${wine.id}`}> {t('common.viewDetail')} </Link>
                </div>
            </div>
        </div>
    );
}

export default ItemRecentView;