import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const ProductItem = ({item,index,deleteItem}) => {
    const { t } = useTranslation();
    return (
        <tr>
            <td>{index}</td>
            <td>
                <img src={process.env.PUBLIC_URL+item.Img} alt="" />
            </td>
            <td> {item.Name} </td>
            <td> {item.Price } </td>
            <td>
                <Link to={{
                    pathname:`/product/${item.id}`,
                    state:{
                        wine:item,
                    },
                    type:'update'
                }} > {t('common.edit')} </Link>
                <button onClick={()=> deleteItem(item.id)} >
                    {t('common.delete')}
                </button>
            </td>
        </tr>
    );
}

export default ProductItem;