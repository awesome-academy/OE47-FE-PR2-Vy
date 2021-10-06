import React from 'react';
import { Modal, Fade, Box, Grid, Backdrop } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { formatPrice } from '../../../ultils';

const OrderDetail = ({ products, open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 700,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
    };

    const renderOrderItem = (arr) => {
        return arr.map((value, key) => {
            const { product, quantity } = value;
            const { image } = product;
            return (
                <div className="d-flex align-items-center justify-content-between" key={key}>
                    <img className="width-100" src={image[0]} alt={`${product.name}-image-${key + 1}`} />
                    <div>
                        <h6>{product.name}</h6>
                        <p>{`${formatPrice(product.price)} x ${quantity}`}</p>
                    </div>
                    <p>{formatPrice(product.price * quantity)}</p>
                </div>
            )
        })
    }

    return (
        <>
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
                        {renderOrderItem(products)}
                    </Box>
                </Fade>
            </Modal>
        </>
    );
}

export default OrderDetail;
