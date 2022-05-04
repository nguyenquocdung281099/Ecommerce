import React,{useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import "./listOrder.scss";
import ItemOrder from '../../component/listOrder/ItemOrder';
import { getlistOrder } from "../../api/api";
import { useTranslation } from 'react-i18next';

const ListOrder = () => {
    const { t } = useTranslation();
    const [listOrder,setListOrder] = useState([]);
    const  user = useSelector(state => state.user)
    useEffect(() => {
        if(user.status){
            getOrder(user.data.id);
        }
    }, [user])
    const getOrder = async id =>{
        const data= await getlistOrder(id)
        setListOrder(data);
    }
    return (
        <section className="order">
            <div className="container">
                <div className="order__box">
                    <div className="order__list">
                        <p className="order__list-name"> {t('common.listOfOrders')} </p>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td> {t('common.stt')} </td>
                                <td> {t('common.dateOfPurcharse')} </td>
                                <td> {t('common.numberOfProduct')} </td>
                                <td> {t('common.totalPrice')} </td>
                                <td> {t('common.status')} </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listOrder.map( (item,index) =>
                                    <ItemOrder key={item.id} item={item} index={index} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default ListOrder;