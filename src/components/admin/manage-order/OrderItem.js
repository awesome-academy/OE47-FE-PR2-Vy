import React, { useState } from 'react';
import OrderItemDetail from './OrderItemDetail';
import { changeStatusOrderAction } from '../../../features/ManageOrderSlice';
import { formatPrice, textCapitalize } from '../../../ultils';
import { useDispatch } from 'react-redux';
import { BootstrapButton } from './../../../UI/BootstrapButton';

const OrderItem = ({ orderItem, key }) => {
    const statusDatas = [
        { value: 'Wait for confirm', label: 'Wait for confirm' },
        { value: 'Delivery', label: 'Delivery' },
        { value: 'Accomplished', label: 'Accomplished' },
    ];
    const { shipping_addr, order_details } = orderItem;
    const [openOrderDetailModal, setOpenOrderDetailModal] = useState(false);
    const dispatch = useDispatch();

    const renderShippingAddr = (obj) => {
        return Object.keys(obj).map((value, key) => {
            return (
                <p className="text-left m-0" key={key}>
                    <span>
                        <b>{textCapitalize(value)}</b> : {textCapitalize(obj[value])}
                    </span>
                </p>
            )
        })
    }

    const handleChangeStatus = (e) => {
        dispatch(changeStatusOrderAction({ id: orderItem.id, status: e.target.value }))
    }

    const renderStatus = (arr, value) => {
        return (
            <select defaultValue={value} onChange={handleChangeStatus}>
                {arr.map((item, key) => {
                    return (
                        <option
                            value={item.value}
                            key={key}
                            defaultValue={value}
                        >
                            {item.label}
                        </option>
                    )
                })}
            </select>
        )
    }

    return (
        <>
            <tr key={key}>
                <td className="cart-id">
                    {orderItem.id}
                </td>
                <td className="cart-title first-row">
                    {renderShippingAddr(shipping_addr)}
                </td>
                <td className="cart-title first-row">
                    {orderItem.id_user}
                </td>
                <td className="cart-title first-row">
                    <BootstrapButton onClick={() => setOpenOrderDetailModal(true)}>
                        Details
                    </BootstrapButton>
                </td>
                <td className="p-price first-row">
                    {textCapitalize(orderItem.payment_method)}
                </td>
                <td className="qua-col first-row">
                    {renderStatus(statusDatas, orderItem.status)}
                </td>
                <td className="total-price first-row">{formatPrice(orderItem.total)}</td>
            </tr>
            <OrderItemDetail
                open={openOrderDetailModal}
                setOpen={setOpenOrderDetailModal}
                products={order_details}
            />
        </>
    );
}

export default OrderItem;
