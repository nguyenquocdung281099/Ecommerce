import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./cartDetail.scss";
import { deleteCartFromUser } from "../../common/mixin";
import CartDetailItem from '../../component/cartDetail/CartDetailItem';
import { updateCart } from "../../redux";
import { useTranslation } from 'react-i18next';

export default function CartDetail() {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts);
    const [totalPrice, setTotalPrice] = useState(0);
    const { t } = useTranslation();
    useEffect(() => {
        if(carts.length !==0){
            const number = carts.map(x => x.Price*x.amount).reduce((a,b)=> a+b);
            setTotalPrice(number.toFixed(3));
        }else{
            setTotalPrice(0)
        }
    }, [carts]);
    const onHandleDeleteCart = (id) => {
        deleteCartFromUser(dispatch,id)
    }
    return (
    <section className="bag">
            <div className="container">
                <div className="bag__title">  {t('common.listOfYourProducts')} </div>
                <table className="bag__table">
                    <thead>
                        <tr>
                            <th>{t('header.menu.4')}</th>
                            <th>{t('common.name')}</th>
                            <th>{t('common.price')}</th>
                            <th> {t('common.numberOfProduct')} </th>
                            <th> {t('common.amount')} </th>
                            <th> {t('common.totalMoney')} </th>
                            <th> {t('common.delete')} </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map( cart =>
                                <CartDetailItem
                                    key={cart.id}
                                    cart={cart}
                                    onHandleDeleteCart = {onHandleDeleteCart}
                                    updateCart={updateCart}
                                    dispatch={dispatch}
                                />
                            )
                        }
                    </tbody>
                </table>
                <div className="bag__pay">
                    <p> {t('common.theTotalOF')} <i className="fas fa-dollar-sign">
                            {totalPrice}
                    </i></p>
                    <Link to={ totalPrice === 0 ?'/cartDetail':`/confirmInfor/${totalPrice}`}> {t('common.purchase')} </Link>
                </div>
            </div>
    </section>
    )
}
