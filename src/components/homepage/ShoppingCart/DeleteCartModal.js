import React from 'react';
import { Modal, Box, Fade, Backdrop, Button } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const DeleteCartModal = ({ open, product, setOpen, deleteItem }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minWidth: 500,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
    };

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
                <Box sx={style} className="delete-modal">
                    <div className="delete-modal_icon">
                        <CloseOutlinedIcon className="close_icon" onClick={() => setOpen(false)} />
                    </div>
                    <div className="delete-modal_container">
                        <p className="text-center mb-8">
                            Are you sure you want to remove {product.name}?
                        </p>
                        <div className="delete-modal_btn-container">
                            <Button className="btn-cancel" onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                            <Button className="btn-remove" onClick={deleteItem}>
                                Remove
                            </Button>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
}

export default DeleteCartModal;
