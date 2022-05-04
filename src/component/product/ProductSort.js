import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductSort = ({sort,setSort}) => {
    const { t } = useTranslation();
    const onHandleChange = event =>{
        setSort(parseInt(event.target.value))
    }
    return (
        <div className="product__box-sort">
            <p> {t('common.sort')} : </p>
            <select value={sort} onChange={onHandleChange}>
                <option value={0}></option>
                <option value={1}> {t('common.highToLow')} </option>
                <option value={2}> {t('common.lowToHigh')} </option>
            </select>
        </div>
    );
}

export default ProductSort;