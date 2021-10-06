import React, { useState } from 'react';
import { formatPrice, textCapitalize } from '../../../ultils';
import { BootstrapButton } from './../../../UI/BootstrapButton';
import OrderDetail from './OrderDetail';

const OrderItem = ({ order }) => {
    const { createdAt, order_details, payment_method, shipping_addr, status, total } = order;
    const [openModal, setOpenModal] = useState(false);

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

    return (
        <>
            <tr>
                <td className="p-4">
                    {shipping_addr && renderShippingAddr(shipping_addr)}
                </td>
                <td>
                    <BootstrapButton onClick={() => setOpenModal(true)} >Detail</BootstrapButton>
                </td>
                <td>{payment_method}</td>
                <td>{formatPrice(total)}</td>
                <td>{createdAt}</td>
                <td>{status}</td>
            </tr>
            <OrderDetail
                products={order_details}
                open={openModal}
                setOpen={setOpenModal}
            />
        </>
    );
}

export default OrderItem;
