import React,{useState,useEffect} from 'react';
import  "./order.scss";
import ItemOrder from '../../Component/order/ItemOrder';
import { useSelector,useDispatch } from "react-redux";
import { changeOrderStatus,loadMoreOrder } from "../../../redux";
import { useTranslation } from "react-i18next";

const Order = () => {
    const {t} = useTranslation();
    const orders  = useSelector( state => state.all.newOrder)
    const [listOrder,setListOrder] = useState([]);
    const [sort,setSort] = useState(3);
    const status = useSelector(state => state.all.statusOrder);
    const [page,setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        setListOrder(orders)
        setPage(Math.ceil( (orders.length/20) ))
    }, [orders]);
    useEffect(() => {
        if(sort === 3){
            setListOrder(orders)
        }else{
            const array = orders.filter(x=> x.Status === sort)
            setListOrder(array);
        }
    }, [sort,page]);
    const change = (id,status)=>{
        dispatch(changeOrderStatus(id,status))
    }
    const  onHandleChange = event =>{
        const value = parseInt(event.target.value);
        setSort(value);
    }
    const loadOrder = ()=>{
        dispatch(loadMoreOrder(page+1))
    }
    return (
        <section className="admOrder">
            <div className="Container">
            <select value={sort} onChange={onHandleChange}>
                <option value={3}>
                    {t('common.all')}
                </option>
                <option value={1}>
                    {t('common.received')}
                </option>
                <option value={0}>
                    {t('common.shipping')}
                </option>
                <option value={-1} >
                    {t('common.cancel')}
                </option>
            </select>
                <table>
                    <thead>
                        <tr>
                            <th>
                                {t('common.stt')}
                            </th>
                            <th>
                                {t('common.phone')}
                            </th>
                            <th>
                                {t('common.address')}
                            </th>
                            <th>
                                {t('common.orderDate')}
                            </th>
                            <th>
                                {t('common.invoiceValue')}
                            </th>
                            <th>
                                {t('common.status')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOrder.map( (item,index) =>
                                <ItemOrder key={item.id} order={item} index={index+1} change={change} />
                            )
                        }
                    </tbody>
                </table>
                {
                    status === 0 ? <button className="admProduct__btn" onClick={loadOrder}>{ t('common.loadMore') }</button> :""
                }
            </div>
        </section>
    );
}

export default Order;