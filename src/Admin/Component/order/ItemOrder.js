import React,{useEffect,useState,useRef} from 'react';
import { useTranslation } from "react-i18next";

const ItemOrder = ({order,index,change}) => {
    const {t} = useTranslation();
    const [status,setStatus] = useState(0);
    const refStatus = useRef();
    useEffect(() => {
        setStatus(order.Status)
    }, [order]);
    useEffect(() => {
        if(status === 1){
            refStatus.current.style.backgroundColor= '#348CD4'
        }else if( status === 0){
            refStatus.current.style.backgroundColor= '#78C350'
        }else{
            refStatus.current.style.backgroundColor= '#de513f'
        }
    }, [status])
    const onHandleChange = event =>{
        const {value} = event.target
        change(order.id,parseInt(value));
    }
    return (
        <tr>
            <td> {index} </td>
            <td> {order.Phone} </td>
            <td>{order.Address}</td>
            <td>{order.DateOfPurchase}</td>
            <td>
                <i className="fas fa-dollar-sign"> {order.TotalPrice}</i>
            </td>
            <td>
                <span></span>
                <select value= {status} onChange={onHandleChange} ref={refStatus}>
                    <option value ={1}>
                        {t('common.received')}
                    </option>
                    <option value={0}>
                        {t('common.shipping')}
                    </option>
                    <option value={-1}>
                        {t('common.cancel')}
                    </option>
                </select>
            </td>
        </tr>
    );
}

export default ItemOrder;