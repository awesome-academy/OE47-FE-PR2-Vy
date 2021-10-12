import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Modal, Backdrop, Fade, Box } from '@mui/material';
import { formatPrice } from '../../../ultils';

const OrderItemDetail = ({ open, setOpen, products }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        maxHeight: '500px',
        overflowY: 'scroll',
        transform: 'translate(-50%, -50%)',
        minWidth: 1000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
    };

    const renderOrderItem = (arr) => {
        return arr.map((value, key) => {
            const { product, quantity } = value;
            const { image } = product;
            return (
                <tr key={key}>
                    <td className="cart-pic">
                        <img src={image[0]} alt="" />
                    </td>
                    <td className="cart-title">
                        <h5>{product.name}</h5>
                    </td>
                    <td>{value.size}</td>
                    <td className="p-price">{formatPrice(product.price)}</td>
                    <td className="qua-col">
                        {quantity}
                    </td>
                    <td className="total-price">
                        {formatPrice(product.price * quantity)}
                    </td>
                </tr>
            )
        })
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style} className="product-modal profile">
                    <div className="product-modal_icon">
                        <CloseOutlinedIcon className="close_icon" onClick={handleClose} />
                    </div>
                    <section className="">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="cart-table">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Image</th>
                                                    <th className="p-name">Product Name</th>
                                                    <th>Size</th>
                                                    <th>Price</th>
                                                    <th>Quantity</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {renderOrderItem(products)}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Box>
            </Fade>
        </Modal>
    );
}

export default OrderItemDetail;
