import React,{useEffect} from 'react';
import { useCounter } from "../productDetail/InforProduct";
import { useTranslation } from 'react-i18next';

const CartDetailItem = ({onHandleDeleteCart,cart,updateCart,dispatch}) => {
    const { t } = useTranslation();
    const [ count, onIncrease, onDecrease,setCount,setMax ] = useCounter();
    useEffect(() => {
        if(cart.length !== 0){
            setCount(cart.amount)
        }
        if(typeof cart.NumberOfProducts !== 'undefined'){
            setMax(cart.NumberOfProducts)
        }
    }, [cart,setCount,setMax]);
    useEffect(() => {
        if(cart.amount!== count){
            dispatch(updateCart({
                idWine:cart.id,
                amount:count
            }))
        }
    }, [count]);
    return (
        <tr>
            <td> <img src={process.env.PUBLIC_URL+cart.Img} />
            </td>
            <td><p>{cart.Name}</p></td>
            <td> <i className="fas fa-dollar-sign"></i><span>{cart.Price.toFixed(2)}</span></td>
            <td> {cart.NumberOfProducts} </td>
            <td className="bag__table-count">
                    <button onClick={onDecrease}><i className="fas fa-minus"> </i></button>
                        <input type="text" value={count} readOnly />
                    <button onClick={onIncrease}><i className="fas fa-plus"> </i></button>
            </td>
            <td> <i className="fas fa-dollar-sign"></i><span>{(cart.Price*cart.amount).toFixed(2)}</span></td>
            <td><button onClick = { () => onHandleDeleteCart(cart.id) }> {t('common.delete')} </button></td>
        </tr>
    );
}

export default CartDetailItem;