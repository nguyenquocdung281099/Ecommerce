import React from 'react';

const ItemOrder = ({item,index}) => {
    return (
        <tr>
            <td>{index+1}</td>
            <td>{item.DateOfPurchase}</td>
            <td>
                {
                    item.Cart.map(x=>x.amount).reduce((a,b) => a+b)
                }
            </td>
            <td> <i className="fas fa-dollar-sign">{item.TotalPrice}</i> </td>
            <td>{ item.Status === 0 ? 'Đang giao hàng' : item.Status === 1 ? "Đã nhận hàng" : "Hủy" }</td>
        </tr>
    );
}

export default ItemOrder;
